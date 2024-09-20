import React from "react";
import { Link } from "react-router-dom";
import "./PaymentManagement.scss"; // Assuming you have custom styles

const PaymentManagement = () => {
  return (
    <div className="payment-management">
      <h1>Payment Management</h1>
      <div className="payment-options">
        <Link to="/payment/invoice-generation">
          <button className="option-btn">Generate Invoices</button>
        </Link>
        <Link to="/payment/history/SS">
          <button className="option-btn">View Payment History</button> {/* Leads to School Selection */}
        </Link>
        <Link to="/payment/pending">
          <button className="option-btn">Pending Payments</button>
        </Link>
        
      </div>
    </div>
  );
};

export default PaymentManagement;
