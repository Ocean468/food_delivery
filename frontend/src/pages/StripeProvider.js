import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm"; // Create this component

const stripePromise = loadStripe("pk_test_51R3jOoGLYkneHjthkpBMtiReqejsihZSfS9WCLT6t2Inb0mteTFLXjyDbz0wyH0lv5F49BIUWiMGLK0B7uUIEI4W00ECNFxbxi");

const StripeProvider = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeProvider;
