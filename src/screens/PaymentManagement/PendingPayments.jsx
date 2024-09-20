import React from "react";
import "./PendingPayments.scss"; // Assuming you have custom styles

const PendingPayments = () => {
  // Sample data
  const pendingPayments = [
    { id: 1, school: "DEF School", amount: "₹7000", dueDate: "2024-09-15" },
    { id: 2, school: "GHI School", amount: "₹4500", dueDate: "2024-09-20" },
  ];

  return (
    <div className="pending-payments">
      <h1>Pending Payments</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>School</th>
            <th>Amount</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {pendingPayments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.school}</td>
              <td>{payment.amount}</td>
              <td>{payment.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingPayments;
