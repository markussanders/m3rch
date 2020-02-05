import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_OkIDbWkimuPwkR1chEHspJ3x00w2IzOGoL';

    const onToken = token => {
        // pass to backend to process payment
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="M3rch Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Hmm.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;