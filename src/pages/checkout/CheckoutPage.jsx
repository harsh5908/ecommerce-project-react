import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { PaymentSummary } from "./PaymentSummary";
import { OrderSummary } from "./OrderSummary";
import "./CheckoutPage.css";


export function CheckoutPage({ cart ,loadCart }) {
  const [deliveryOption, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimateDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });
    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  });
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.svg" />
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
         <OrderSummary cart={cart} deliveryOption={deliveryOption}
         loadCart={loadCart}/>
<PaymentSummary PaymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
