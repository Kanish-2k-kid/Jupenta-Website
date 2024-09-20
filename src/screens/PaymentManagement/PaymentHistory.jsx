import React from 'react';
import './PaymentHistory.scss'; // Import custom styles

const PaymentHistory = ({ schoolId }) => {
  // Mock data for payment history
  const paymentData = [
    { id: 1, date: '2024-01-15', amount: '₹1000', status: 'Paid' },
    { id: 2, date: '2024-02-15', amount: '₹1000', status: 'Pending' },
    { id: 3, date: '2024-03-15', amount: '₹1000', status: 'Paid' },
  ];

  return (
    <div className="payment-history-container">
      <h1 className="title">Payment History for School ID: {schoolId}</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>
                <span className={`status ${payment.status.toLowerCase()}`}>
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
