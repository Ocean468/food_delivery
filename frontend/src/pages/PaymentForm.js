import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51R3jOoGLYkneHjthkpBMtiReqejsihZSfS9WCLT6t2Inb0mteTFLXjyDbz0wyH0lv5F49BIUWiMGLK0B7uUIEI4W00ECNFxbxi");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("🎉 Payment Successful!");
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button disabled={!stripe} style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>
          PAY NOW
        </button>
      </form>
      {message && <p style={{ color: message.includes("Success") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default App;
