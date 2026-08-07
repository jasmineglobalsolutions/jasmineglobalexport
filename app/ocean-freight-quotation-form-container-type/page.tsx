"use client";

import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import { generateQuotationPdf } from "../utils/generateQuotationPdf";

interface CarrierQuote {
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

export default function OceanFreightQuotationPage() {
  const [refNo, setRefNo] = useState("JGE-OFQ-2026-001");
  const [quoteDate, setQuoteDate] = useState("");
  const [custName, setCustName] = useState("");
  const [custCompany, setCustCompany] = useState("");
  const [origin, setOrigin] = useState("Singapore");
  const [destination, setDestination] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const [carriers, setCarriers] = useState<CarrierQuote[]>([
    {
      id: "1",
      name: "",
      amount: "",
      method: "Container",
      containerType: "40HC",
      validFrom: "",
      validUntil: "",
      remarks:
        "Ocean freight only. All rates are quoted in USD. Subject to carrier space, equipment availability, sailing schedule, and final booking confirmation.",
      dates: [""],
    },
  ]);

  useEffect(() => {
    // Set default date to today
    const today = new Date().toISOString().split("T")[0];
    setQuoteDate(today);

    // Try loading saved draft
    const saved = localStorage.getItem("jasmineOceanFreightContainerTypeDraftNext");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.refNo) setRefNo(data.refNo);
        if (data.quoteDate) setQuoteDate(data.quoteDate);
        if (data.custName) setCustName(data.custName);
        if (data.custCompany) setCustCompany(data.custCompany);
        if (data.origin) setOrigin(data.origin);
        if (data.destination) setDestination(data.destination);
        if (data.carriers && data.carriers.length > 0) {
          setCarriers(data.carriers);
        }
      } catch (e) {
        console.error("Error loading draft", e);
      }
    }
  }, []);

  // Carrier Handlers
  const addCarrier = () => {
    const newCarrier: CarrierQuote = {
      id: Date.now().toString(),
      name: "",
      amount: "",
      method: "Container",
      containerType: "40HC",
      validFrom: "",
      validUntil: "",
      remarks:
        "Ocean freight only. All rates are quoted in USD. Subject to carrier space, equipment availability, sailing schedule, and final booking confirmation.",
      dates: [""],
    };
    setCarriers((prev) => [...prev, newCarrier]);
  };

  const removeCarrier = (id: string) => {
    if (carriers.length <= 1) {
      alert("At least one carrier quotation is required.");
      return;
    }
    setCarriers((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCarrier = (id: string, field: keyof CarrierQuote, value: any) => {
    setCarriers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  // Date Handlers per carrier
  const addShippingDate = (carrierId: string) => {
    setCarriers((prev) =>
      prev.map((c) =>
        c.id === carrierId ? { ...c, dates: [...c.dates, ""] } : c
      )
    );
  };

  const removeShippingDate = (carrierId: string, index: number) => {
    setCarriers((prev) =>
      prev.map((c) => {
        if (c.id === carrierId) {
          if (c.dates.length <= 1) {
            alert("At least one shipping date is required per carrier.");
            return c;
          }
          const newDates = [...c.dates];
          newDates.splice(index, 1);
          return { ...c, dates: newDates };
        }
        return c;
      })
    );
  };

  const updateShippingDate = (
    carrierId: string,
    index: number,
    value: string
  ) => {
    setCarriers((prev) =>
      prev.map((c) => {
        if (c.id === carrierId) {
          const newDates = [...c.dates];
          newDates[index] = value;
          return { ...c, dates: newDates };
        }
        return c;
      })
    );
  };

  // Save Draft
  const saveDraft = () => {
    const data = {
      refNo,
      quoteDate,
      custName,
      custCompany,
      origin,
      destination,
      carriers,
    };
    localStorage.setItem(
      "jasmineOceanFreightContainerTypeDraftNext",
      JSON.stringify(data)
    );
    alert("Draft saved to your browser!");
  };

  // Clear Form
  const clearForm = () => {
    if (confirm("Are you sure you want to clear the form?")) {
      setRefNo("JGE-OFQ-2026-001");
      setQuoteDate(new Date().toISOString().split("T")[0]);
      setCustName("");
      setCustCompany("");
      setOrigin("Singapore");
      setDestination("");
      setCarriers([
        {
          id: Date.now().toString(),
          name: "",
          amount: "",
          method: "Container",
          containerType: "40HC",
          validFrom: "",
          validUntil: "",
          remarks:
            "Ocean freight only. All rates are quoted in USD. Subject to carrier space, equipment availability, sailing schedule, and final booking confirmation.",
          dates: [""],
        },
      ]);
      localStorage.removeItem("jasmineOceanFreightContainerTypeDraftNext");
    }
  };

  // Formatting helpers
  const formatDateStr = (dateStr: string) => {
    if (!dateStr) return "TBA";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "TBA";
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatUSD = (val: string) => {
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
  };

  // Generate PDF via pdfmake library
  const generatePDF = () => {
    setIsGenerating(true);
    try {
      generateQuotationPdf({
        refNo,
        quoteDate,
        custName,
        custCompany,
        origin,
        destination,
        carriers,
      });
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("An error occurred while generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <PageLayout>
      <div style={{ background: "linear-gradient(135deg, #f7f0e4 0%, #efe2ce 100%)", padding: "40px 16px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", background: "#fffaf2", border: "1px solid #e2d4bd", borderRadius: "22px", boxShadow: "0 18px 45px rgba(35, 27, 16, 0.12)", overflow: "hidden" }}>
          
          {/* Header */}
          <header style={{ background: "#fffdf8", padding: "30px 40px", borderBottom: "5px solid #b98a33" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
              <div>
                <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 900, color: "#111820", letterSpacing: "1px" }}>JASMINE GLOBAL EXPORT</h1>
                <p style={{ margin: "6px 0 0", color: "#6b6258", fontSize: "14px" }}>International Trade &amp; Ocean Freight Quotation Portal</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#8a6322" }}>OCEAN FREIGHT QUOTATION</h2>
                <p style={{ margin: "4px 0 0", color: "#6b6258", fontSize: "13px" }}>Container Type &amp; Carrier Comparison</p>
                <div style={{ display: "inline-block", marginTop: "10px", border: "1px solid rgba(185, 138, 51, 0.7)", color: "#8a6322", borderRadius: "999px", padding: "6px 14px", fontSize: "12px", fontWeight: 800, background: "#fff8ea" }}>
                  QUOTATION GENERATOR
                </div>
              </div>
            </div>
          </header>

          {/* Form Body */}
          <div style={{ padding: "34px 40px 40px" }}>
            
            {/* Section 1: Quote Info */}
            <div style={{ background: "rgba(255, 255, 255, 0.65)", border: "1px solid #e2d4bd", borderRadius: "18px", padding: "24px", marginBottom: "28px" }}>
              <div style={{ borderBottom: "1px solid #e2d4bd", paddingBottom: "12px", marginBottom: "20px" }}>
                <h3 style={{ margin: 0, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.8px", color: "#8a6322", fontWeight: 800 }}>Quote Information</h3>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Reference No</label>
                  <input
                    type="text"
                    value={refNo}
                    onChange={(e) => setRefNo(e.target.value)}
                    placeholder="JGE-OFQ-2026-001"
                    style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#17202a", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Quote Date</label>
                  <input
                    type="date"
                    value={quoteDate}
                    onChange={(e) => setQuoteDate(e.target.value)}
                    style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#17202a", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Customer Name</label>
                  <input
                    type="text"
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    placeholder="John Doe"
                    style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#17202a", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Customer Company</label>
                  <input
                    type="text"
                    value={custCompany}
                    onChange={(e) => setCustCompany(e.target.value)}
                    placeholder="Global Exports Ltd"
                    style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#17202a", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Port of Loading / Origin</label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Singapore Port / Manila, Philippines"
                    style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#17202a", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Port of Discharge / Destination</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Port of Hamburg, Germany"
                    style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#17202a", outline: "none" }}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Carrier Quotations */}
            <div style={{ background: "rgba(255, 255, 255, 0.65)", border: "1px solid #e2d4bd", borderRadius: "18px", padding: "24px", marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e2d4bd", paddingBottom: "12px", marginBottom: "20px" }}>
                <h3 style={{ margin: 0, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.8px", color: "#8a6322", fontWeight: 800 }}>Carrier Quotations</h3>
                <button
                  type="button"
                  onClick={addCarrier}
                  style={{ background: "#111820", color: "#ffffff", border: "none", borderRadius: "10px", padding: "10px 16px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}
                >
                  + Add Carrier Quote
                </button>
              </div>

              {carriers.map((c, index) => (
                <div key={c.id} style={{ background: "#fffdf8", border: "1px solid #dfceb4", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "1px dashed #e2d4bd", paddingBottom: "10px" }}>
                    <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 900, color: "#8a6322", textTransform: "uppercase" }}>
                      Carrier Quotation #{index + 1}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeCarrier(c.id)}
                      style={{ background: "#fff2f2", color: "#9f2f2f", border: "1px solid #e7b9b9", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
                    >
                      Remove Carrier
                    </button>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Shipping Line / Carrier</label>
                      <input
                        type="text"
                        value={c.name}
                        onChange={(e) => updateCarrier(c.id, "name", e.target.value)}
                        placeholder="MSC / Maersk / CMA CGM / Hapag-Lloyd"
                        style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", outline: "none" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Ocean Freight Amount</label>
                      <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#8a6322", fontWeight: 800, fontSize: "13px" }}>USD</span>
                        <input
                          type="number"
                          step="0.01"
                          value={c.amount}
                          onChange={(e) => updateCarrier(c.id, "amount", e.target.value)}
                          placeholder="3800"
                          style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "10px", padding: "11px 13px 11px 52px", fontSize: "14px", fontWeight: 700, outline: "none" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Shipping Method</label>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: "6px", background: "#fff", border: "1px solid #d8c8ae", borderRadius: "10px", padding: "8px 14px", cursor: "pointer", fontSize: "13px", fontWeight: 700 }}>
                          <input
                            type="radio"
                            name={`method_${c.id}`}
                            value="Container"
                            checked={c.method === "Container"}
                            onChange={() => updateCarrier(c.id, "method", "Container")}
                          />
                          Container
                        </label>
                        <label style={{ display: "flex", alignItems: "center", gap: "6px", background: "#fff", border: "1px solid #d8c8ae", borderRadius: "10px", padding: "8px 14px", cursor: "pointer", fontSize: "13px", fontWeight: 700 }}>
                          <input
                            type="radio"
                            name={`method_${c.id}`}
                            value="RoRo"
                            checked={c.method === "RoRo"}
                            onChange={() => updateCarrier(c.id, "method", "RoRo")}
                          />
                          RoRo
                        </label>
                      </div>
                    </div>

                    {c.method === "Container" && (
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Container Type</label>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {(["20 STD", "40 STD", "40HC"] as const).map((type) => (
                            <label key={type} style={{ display: "flex", alignItems: "center", gap: "5px", background: "#fff", border: "1px solid #d8c8ae", borderRadius: "10px", padding: "8px 12px", cursor: "pointer", fontSize: "13px", fontWeight: 700 }}>
                              <input
                                type="radio"
                                name={`containerType_${c.id}`}
                                value={type}
                                checked={c.containerType === type}
                                onChange={() => updateCarrier(c.id, "containerType", type)}
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Rate Valid From</label>
                      <input
                        type="date"
                        value={c.validFrom}
                        onChange={(e) => updateCarrier(c.id, "validFrom", e.target.value)}
                        style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", outline: "none" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Rate Valid Until</label>
                      <input
                        type="date"
                        value={c.validUntil}
                        onChange={(e) => updateCarrier(c.id, "validUntil", e.target.value)}
                        style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "10px", padding: "11px 13px", fontSize: "14px", outline: "none" }}
                      />
                    </div>

                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#3b342c", marginBottom: "6px" }}>Remarks</label>
                      <textarea
                        rows={2}
                        value={c.remarks}
                        onChange={(e) => updateCarrier(c.id, "remarks", e.target.value)}
                        style={{ width: "100%", border: "1px solid #d8c8ae", background: "#fff", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", color: "#17202a", outline: "none", resize: "vertical" }}
                      />
                    </div>
                  </div>

                  {/* Shipping Dates Section */}
                  <div style={{ marginTop: "18px", padding: "16px", border: "1px solid #e5d4ba", borderRadius: "12px", background: "#fff8ee" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <h5 style={{ margin: 0, fontSize: "13px", textTransform: "uppercase", color: "#3b342c", fontWeight: 800 }}>Estimated Shipping Date / ETD</h5>
                      <button
                        type="button"
                        onClick={() => addShippingDate(c.id)}
                        style={{ background: "#efe3d0", color: "#3f3324", border: "1px solid #dac6a8", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
                      >
                        + Add Shipping Date
                      </button>
                    </div>

                    {c.dates.map((d, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                        <input
                          type="date"
                          value={d}
                          onChange={(e) => updateShippingDate(c.id, dIdx, e.target.value)}
                          style={{ flex: 1, border: "1px solid #d8c8ae", background: "#fff", borderRadius: "8px", padding: "8px 12px", fontSize: "13px" }}
                        />
                        <button
                          type="button"
                          onClick={() => removeShippingDate(c.id, dIdx)}
                          style={{ background: "#fff2f2", color: "#9f2f2f", border: "1px solid #e7b9b9", borderRadius: "8px", padding: "8px 12px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Preview Card */}
            <div style={{ background: "#fff", border: "1px dashed #c8b28d", borderRadius: "18px", padding: "24px", marginBottom: "28px" }}>
              <h3 style={{ margin: "0 0 16px", color: "#8a6322", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 800 }}>Live Document Preview</h3>
              <div style={{ background: "#fffaf2", border: "1px solid #e2d4bd", borderRadius: "12px", padding: "20px", fontSize: "14px", lineHeight: "1.7" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "16px" }}>
                  <div><strong>Reference No:</strong> {refNo || "-"}</div>
                  <div><strong>Quote Date:</strong> {formatDateStr(quoteDate)}</div>
                  <div><strong>Customer:</strong> {custName || "-"} {custCompany ? `(${custCompany})` : ""}</div>
                  <div><strong>From Port:</strong> {origin || "-"}</div>
                  <div><strong>To Port:</strong> {destination || "-"}</div>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", fontSize: "12px" }}>
                    <thead>
                      <tr style={{ background: "#efe3d0", color: "#2d241a" }}>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>No.</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Shipping Line / Carrier</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Ocean Freight</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Method</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Container</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Estimated ETD</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Validity</th>
                        <th style={{ border: "1px solid #deceb6", padding: "8px", textAlign: "left" }}>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carriers.map((c, idx) => (
                        <tr key={c.id}>
                          <td style={{ border: "1px solid #deceb6", padding: "8px" }}>{idx + 1}</td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px" }}>{c.name || "-"}</td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px", fontWeight: "bold" }}>{formatUSD(c.amount)}</td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px" }}>{c.method}</td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px" }}>{c.method === "RoRo" ? "-" : c.containerType}</td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px" }}>
                            {c.dates.filter(Boolean).length > 0 ? c.dates.filter(Boolean).map((d) => formatDateStr(d)).join(", ") : "-"}
                          </td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px" }}>
                            {c.validFrom && c.validUntil ? `${formatDateStr(c.validFrom)} to ${formatDateStr(c.validUntil)}` : "-"}
                          </td>
                          <td style={{ border: "1px solid #deceb6", padding: "8px", fontSize: "11px" }}>{c.remarks || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "14px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={clearForm}
                style={{ background: "#efe3d0", color: "#3f3324", border: "1px solid #dac6a8", borderRadius: "12px", padding: "12px 20px", fontWeight: 800, fontSize: "14px", cursor: "pointer" }}
              >
                Clear Form
              </button>

              <button
                type="button"
                onClick={saveDraft}
                style={{ background: "#efe3d0", color: "#3f3324", border: "1px solid #dac6a8", borderRadius: "12px", padding: "12px 20px", fontWeight: 800, fontSize: "14px", cursor: "pointer" }}
              >
                Save Draft
              </button>

              <button
                type="button"
                onClick={generatePDF}
                disabled={isGenerating}
                style={{ background: "#b98a33", color: "#ffffff", border: "none", borderRadius: "12px", padding: "12px 24px", fontWeight: 800, fontSize: "14px", boxShadow: "0 8px 18px rgba(185, 138, 51, 0.25)", cursor: "pointer" }}
              >
                {isGenerating ? "Generating PDF..." : "Generate PDF"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
