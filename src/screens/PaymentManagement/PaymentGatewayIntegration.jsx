import React from "react";
import "./PaymentGatewayIntegration.scss"; // Assuming you have custom styles

const PaymentGatewayIntegration = () => {
  return (
    <div className="payment-gateway-integration">
      <h1>Payment Gateway Integration</h1>
      <p>
        Here, you can configure and integrate payment gateways for automated billing.
        Follow the documentation of your payment provider to complete the integration.
      </p>
      <button className="configure-btn">Configure Payment Gateway</button>
    </div>
  );
};

export default PaymentGatewayIntegration;
