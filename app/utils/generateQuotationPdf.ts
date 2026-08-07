import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { JASMINE_LOGO_BASE64 } from "./logoBase64";

// Configure pdfMake virtual file system for fonts
if (pdfMake) {
  if ((pdfFonts as any)?.pdfMake?.vfs) {
    (pdfMake as any).vfs = (pdfFonts as any).pdfMake.vfs;
  } else if ((pdfFonts as any)?.vfs) {
    (pdfMake as any).vfs = (pdfFonts as any).vfs;
  }
}

export interface CarrierQuoteData {
  id: string;
  name: string;
  amount: string;
  method: "Container" | "RoRo";
  containerType: "20 STD" | "40 STD" | "40HC";
  validFrom: string;
  validUntil: string;
  remarks: string;
  dates: string[];
}

export interface QuotationPdfParams {
  refNo: string;
  quoteDate: string;
  custName: string;
  custCompany: string;
  origin: string;
  destination: string;
  carriers: CarrierQuoteData[];
}

function formatDateStr(dateStr: string): string {
  if (!dateStr) return "TBA";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "TBA";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatUSD(val: string): string {
  if (!val) return "USD 0.00";
  const num = parseFloat(val);
  if (isNaN(num)) return "USD 0.00";
  return (
    "USD " +
    num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export function generateQuotationPdf(data: QuotationPdfParams) {
  const safeRef = data.refNo ? data.refNo.replace(/[^a-zA-Z0-9_-]/g, "_") : "Quote";
  const filename = `Ocean_Freight_Quotation_${safeRef}_${new Date().toISOString().split("T")[0]}.pdf`;

  // Build Carrier Table Rows
  const tableBody: any[] = [
    [
      { text: "#", style: "tableHeader", alignment: "center" },
      { text: "Carrier / Shipping Line", style: "tableHeader" },
      { text: "Ocean Freight", style: "tableHeader" },
      { text: "Method", style: "tableHeader" },
      { text: "Type", style: "tableHeader" },
      { text: "Estimated ETD", style: "tableHeader" },
      { text: "Rate Validity", style: "tableHeader" },
      { text: "Remarks", style: "tableHeader" },
    ],
  ];

  data.carriers.forEach((c, index) => {
    const datesStr =
      c.dates && c.dates.filter(Boolean).length > 0
        ? c.dates.filter(Boolean).map((d) => formatDateStr(d)).join("\n")
        : "TBA";

    const validityStr =
      c.validFrom && c.validUntil
        ? `${formatDateStr(c.validFrom)}\nto ${formatDateStr(c.validUntil)}`
        : "TBA";

    const rowBg = index % 2 === 0 ? "#ffffff" : "#fffcf7";

    tableBody.push([
      { text: (index + 1).toString(), alignment: "center", fillColor: rowBg },
      { text: c.name || "TBA", bold: true, fillColor: rowBg },
      { text: formatUSD(c.amount), bold: true, color: "#8a6322", fillColor: rowBg },
      { text: c.method, fillColor: rowBg },
      { text: c.method === "RoRo" ? "-" : c.containerType, fillColor: rowBg },
      { text: datesStr, fontSize: 8.5, fillColor: rowBg },
      { text: validityStr, fontSize: 8.5, fillColor: rowBg },
      { text: c.remarks || "-", fontSize: 8, color: "#555555", fillColor: rowBg },
    ]);
  });

  const docDefinition: any = {
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: [30, 30, 30, 40],
    content: [
      // Header Banner
      {
        columns: [
          {
            image: JASMINE_LOGO_BASE64,
            width: 130,
          },
          {
            width: "*",
            stack: [
              { text: "JASMINE GLOBAL EXPORT", style: "mainTitle" },
              { text: "International Trade & Shipping Solutions · Singapore HQ", style: "subTitle" },
            ],
            margin: [10, 5, 0, 0],
          },
          {
            width: "auto",
            stack: [
              { text: "OCEAN FREIGHT QUOTATION", style: "docTitle", alignment: "right" },
              { text: "Container Type & Carrier Comparison", style: "docSubTitle", alignment: "right" },
              {
                text: "OFFICIAL QUOTATION",
                style: "badge",
                alignment: "right",
                margin: [0, 6, 0, 0],
              },
            ],
          },
        ],
        margin: [0, 0, 0, 12],
      },

      // Gold Accent Line
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 535,
            y2: 0,
            lineWidth: 3,
            lineColor: "#b98a33",
          },
        ],
        margin: [0, 0, 0, 16],
      },

      // Quote & Customer Info Card Box
      {
        style: "infoCard",
        table: {
          widths: ["20%", "30%", "20%", "30%"],
          body: [
            [
              { text: "Reference No:", style: "labelKey" },
              { text: data.refNo || "TBA", style: "labelValBold" },
              { text: "Quote Date:", style: "labelKey" },
              { text: formatDateStr(data.quoteDate), style: "labelVal" },
            ],
            [
              { text: "Customer Name:", style: "labelKey" },
              { text: data.custName || "TBA", style: "labelVal" },
              { text: "Port of Loading:", style: "labelKey" },
              { text: data.origin || "TBA", style: "labelValBold" },
            ],
            [
              { text: "Customer Company:", style: "labelKey" },
              { text: data.custCompany || "TBA", style: "labelVal" },
              { text: "Port of Discharge:", style: "labelKey" },
              { text: data.destination || "TBA", style: "labelValBold" },
            ],
          ],
        },
        layout: "noBorders",
        margin: [0, 0, 0, 18],
      },

      // Section Title
      {
        text: "CARRIER COMPARISON SUMMARY",
        style: "sectionHeading",
        margin: [0, 0, 0, 8],
      },

      // Carrier Quotation Table
      {
        table: {
          headerRows: 1,
          widths: ["5%", "22%", "16%", "10%", "10%", "13%", "12%", "12%"],
          body: tableBody,
        },
        layout: {
          hLineWidth: (i: number, node: any) => (i === 0 || i === node.table.body.length ? 1 : 0.5),
          vLineWidth: () => 0.5,
          hLineColor: () => "#deceb6",
          vLineColor: () => "#deceb6",
        },
        margin: [0, 0, 0, 24],
      },

      // Gold Footer Separator
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 535,
            y2: 0,
            lineWidth: 1.5,
            lineColor: "#b98a33",
          },
        ],
        margin: [0, 0, 0, 12],
      },

      // Office Addresses Grid
      {
        columns: [
          {
            width: "35%",
            stack: [
              { text: "Singapore HQ", bold: true, fontSize: 8.5, color: "#111820" },
              { text: "390 Victoria Street, Golden Landmark #03-20, Singapore 188061", fontSize: 7.5, color: "#555555" },
            ],
          },
          {
            width: "40%",
            stack: [
              { text: "Philippines Operations", bold: true, fontSize: 8.5, color: "#111820" },
              { text: "Regus RM 401, 4th Floor, Aurora Suites, Subic Bay Freeport Zone, Zambales", fontSize: 7.5, color: "#555555" },
            ],
          },
          {
            width: "25%",
            stack: [
              { text: "Contact & Web", bold: true, fontSize: 8.5, color: "#111820", alignment: "right" },
              { text: "admin@jasmineglobalexport.com\nwww.jasmineglobalexport.com", fontSize: 7.5, color: "#8a6322", alignment: "right" },
            ],
          },
        ],
        margin: [0, 0, 0, 10],
      },

      // Disclaimer Box
      {
        table: {
          widths: ["100%"],
          body: [
            [
              {
                text: "Notice & Disclaimer: All freight quotations are provided by Jasmine Global Export. Rates are subject to live space availability, carrier bunker surcharges, equipment positioning, and final booking confirmation. Destination customs clearance, duties, local port charges, and vehicle registration are the sole responsibility of the buyer.",
                fontSize: 7.5,
                color: "#6b6258",
                fillColor: "#fff8ea",
                margin: [8, 6, 8, 6],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => "#e2d4bd",
          vLineColor: () => "#e2d4bd",
        },
      },
    ],

    styles: {
      mainTitle: {
        fontSize: 16,
        bold: true,
        color: "#111820",
      },
      subTitle: {
        fontSize: 9,
        color: "#6b6258",
      },
      docTitle: {
        fontSize: 13,
        bold: true,
        color: "#8a6322",
      },
      docSubTitle: {
        fontSize: 8.5,
        color: "#6b6258",
      },
      badge: {
        fontSize: 8,
        bold: true,
        color: "#8a6322",
        background: "#fff8ea",
      },
      labelKey: {
        fontSize: 9,
        bold: true,
        color: "#8a6322",
      },
      labelVal: {
        fontSize: 9,
        color: "#17202a",
      },
      labelValBold: {
        fontSize: 9,
        bold: true,
        color: "#111820",
      },
      sectionHeading: {
        fontSize: 11,
        bold: true,
        color: "#8a6322",
      },
      tableHeader: {
        fontSize: 9,
        bold: true,
        color: "#ffffff",
        fillColor: "#b98a33",
      },
    },
  };

  pdfMake.createPdf(docDefinition).download(filename);
}
