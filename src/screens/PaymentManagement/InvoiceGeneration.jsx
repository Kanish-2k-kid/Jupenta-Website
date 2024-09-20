import React, { useState } from "react";
import "./InvoiceGeneration.scss"; // Assuming you have custom styles

const InvoiceGeneration = () => {
  const [invoiceData, setInvoiceData] = useState({
    SchoolName: "",
    SchoolNumber: "",
    SchoolEmail: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerateInvoice = () => {
    // Add logic to generate invoice
    console.log("Generating invoice for:", invoiceData);
  };

  return (
    <div className="invoice-generation">
      <h1>Generate Invoice</h1>
      <form className="invoice-form">
        <label>
          School Name:
          <input
            type="text"
            name="schoolName"
            value={invoiceData.SchoolName}
            onChange={handleChange}
          />
        </label>
        <label>
          School Number:
          <input
            type="phonenumber"
            name="SchoolNumber"
            value={invoiceData.SchoolNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          School Mail:
          <input
            type="email"
            name="SchoolEmail"
            value={invoiceData.SchoolEmail}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={invoiceData.amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={invoiceData.date}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleGenerateInvoice}>
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceGeneration;
