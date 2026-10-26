import { NextResponse } from "next/server";
import { Client } from "pg";

export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      whatsapp,
      country,
      port,
      buyerType,
      hiluxVariant,
      preferredColour,
      shippingMethod,
      otherShippingMethod,
      timeline,
      quantity,
      otherMake,
      otherModel,
      message,
      responsibilityAgreed,
      source = "Website",
    } = body;

    // Check if an external CRM Backend URL is configured to forward first
    const crmBackendUrl = process.env.CRM_BACKEND_URL || process.env.CRM_API_URL;
    if (crmBackendUrl && !crmBackendUrl.includes("localhost")) {
      try {
        const response = await fetch(`${crmBackendUrl.replace(/\/+$/, "")}/api/v1/leads/quote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          const crmData = await response.json();
          return NextResponse.json(crmData, {
            status: 200,
            headers: corsHeaders,
          });
        }
      } catch (forwardErr) {
        console.warn("Could not forward to CRM backend, falling back to direct database insert:", forwardErr);
      }
    }

    // Direct database connection via Supabase PostgreSQL
    const connectionString =
      process.env.DATABASE_URL ||
      process.env.DIRECT_URL ||
      "postgresql://postgres.aiijzkftxjfafpjdzzdj:amQXvDwx0lgBpljH@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true";

    const client = new Client({
      connectionString,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 10000,
    });

    await client.connect();

    try {
      // Generate unique Reference Number (e.g. JGE-26-HLX-XXXX)
      const currentYear = new Date().getFullYear().toString().slice(-2);
      const prefix = `JGE-${currentYear}-HLX-`;
      let newRefNumber = "";
      let isUnique = false;
      let attempts = 0;

      while (!isUnique && attempts < 10) {
        attempts++;
        const random4Digit = Math.floor(1000 + Math.random() * 9000);
        newRefNumber = `${prefix}${random4Digit}`;
        const existing = await client.query("SELECT id FROM leads WHERE ref_number = $1 LIMIT 1", [newRefNumber]);
        if (existing.rows.length === 0) {
          isUnique = true;
        }
      }

      // Parse quantity
      const parsedQty = quantity ? parseInt(String(quantity), 10) : null;
      const finalQty = isNaN(parsedQty as number) ? null : parsedQty;

      // Parse responsibilityAgreed
      const isAgreed = responsibilityAgreed === true || responsibilityAgreed === "on" || responsibilityAgreed === "true";

      // Insert into leads table
      const insertQuery = `
        INSERT INTO leads (
          ref_number,
          name,
          company,
          email,
          whatsapp,
          country,
          port,
          buyer_type,
          hilux_variant,
          preferred_colour,
          shipping_method,
          other_shipping_method,
          timeline,
          quantity,
          other_make,
          other_model,
          message,
          responsibility_agreed,
          source,
          status,
          created_at,
          updated_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
          $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
          NOW(), NOW()
        ) RETURNING id, ref_number, created_at;
      `;

      const values = [
        newRefNumber,
        name || null,
        company || null,
        email || null,
        whatsapp || null,
        country || null,
        port || null,
        buyerType || null,
        hiluxVariant || null,
        preferredColour || null,
        shippingMethod || null,
        otherShippingMethod || null,
        timeline || null,
        finalQty,
        otherMake || null,
        otherModel || null,
        message || null,
        isAgreed,
        source || "Website",
        "New Lead",
      ];

      const leadResult = await client.query(insertQuery, values);
      const savedLead = leadResult.rows[0];

      // Automatically register / update contact in customers Master Database
      if (email || whatsapp) {
        try {
          const checkCust = await client.query(
            "SELECT id FROM customers WHERE (email IS NOT NULL AND email != '' AND email = $1) OR (whatsapp IS NOT NULL AND whatsapp != '' AND whatsapp = $2) LIMIT 1",
            [email || "", whatsapp || ""]
          );

          if (checkCust.rows.length === 0) {
            const customerCode = `JGE-CUST-${Math.floor(10000 + Math.random() * 90000)}`;
            await client.query(
              `INSERT INTO customers (
                customer_code, company_name, contact_person, email, phone, whatsapp,
                country, destination_country, remarks, source_channel, created_at, updated_at
              ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())`,
              [
                customerCode,
                company || name || "Quote Contact",
                name || null,
                email || null,
                whatsapp || null,
                whatsapp || null,
                country || null,
                port || null,
                message || null,
                source || "Website Quote Form",
              ]
            );
          }
        } catch (custErr) {
          console.warn("Auto customer registry warning:", custErr);
        }
      }

      return NextResponse.json(
        {
          success: true,
          message: "Quote submitted successfully",
          refNumber: savedLead.ref_number,
          id: savedLead.id,
        },
        {
          status: 201,
          headers: corsHeaders,
        }
      );
    } finally {
      await client.end();
    }
  } catch (err: any) {
    console.error("Quote submission error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Failed to process quote request",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
