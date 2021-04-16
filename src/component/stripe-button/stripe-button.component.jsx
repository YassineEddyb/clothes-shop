import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IgrtbDCbutMDYEGTPXhC75UBTNlRs1OqWKnmd8zsq8y6bd7u9xp7fXU0Mp8K8sxlkxaQAS2QDRSdQLfnLBLF2GR00czCDjGuT";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="pay now"
      name="clothes shop"
      billingAddress
      shippingAddress
      image=""
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
