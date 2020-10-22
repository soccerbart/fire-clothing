import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HXUURBBAG0dy504oICQrHcqOomcXGSVLaZOEHH9bHql2ooTDXGBQCC9ln0deKY9xARCJrjxlVZ7pGXPMrqPOM1p00SgtjzjOe';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Fire Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
