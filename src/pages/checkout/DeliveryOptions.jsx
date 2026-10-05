import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../../utils/money";
export function DeliveryOption({ deliveryOptions, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOptions) => {
        let priceString = "FREE shipping";
        if (deliveryOptions.priceCents > 0) {
          priceString = `${formatMoney(deliveryOptions.priceCents)}-Shipping `;
        }

        const updateDeliveryOption = async () => {
          axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionsId: deliveryOptions.id,
          });
          await loadCart();
        };
        return (
          <div
            key={deliveryOptions.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              checked={deliveryOptions.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOptions.estimatedDeliveryTimeMs).format(
                  `dddd, MMMM , D`,
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
