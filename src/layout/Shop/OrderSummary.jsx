import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalPrice } from "../../utils/calculatePrice";

function OrderSummary({
  navigationPath,
  isPaying = false,
  setActive,
  isOrder = false,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(totalPrice);
  const [promo, setPromo] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const cart = useSelector((state) => state.shoppingCartReducer.cart);
  const shippingAddress = useSelector(
    (state) => state.shoppingCartReducer.shippingAddress
  );
  const receiptAddress = useSelector(
    (state) => state.shoppingCartReducer.receiptAddress
  );
  console.log(shippingAddress.id, receiptAddress.id);
  const handleApply = (e) => {
    e.preventDefault();
    if (promo.toLowerCase().trim() === "taylan24") {
      setDiscountPrice(totalPrice * 0.2);
    }
  };

  useEffect(() => {
    calculateTotalPrice(cart, setTotalPrice, setShippingPrice);
  }, [cart]);

  const handlePromoChange = (e) => setPromo(e.target.value);
  const handleCheck = (e) => {
    e.preventDefault();
    setActive("Cards");
  };
  return (
    <div className="w-full py-12 lg:py-24">
      <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
        Order Summary
      </h2>
      <div className="mt-8">
        <div className="flex items-center justify-between pb-6">
          <p className="font-normal text-lg leading-8 text-black">
            {cart?.length > 1
              ? `${cart?.length} items`
              : `${cart?.length} item`}
          </p>
          <p className="font-medium text-lg leading-8 text-black">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
        <form>
          {!isPaying && (
            <>
              <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                Promo Code
              </label>
              <div className="flex pb-4 w-full">
                <div className="relative w-full ">
                  <input
                    onChange={handlePromoChange}
                    type="text"
                    className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                    placeholder="xxxx xxxx xxxx"
                  />
                </div>
              </div>
              <div className="flex items-center border-b border-gray-200">
                <button
                  onClick={handleApply}
                  className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80"
                >
                  Apply
                </button>
              </div>
            </>
          )}

          <div className="flex items-center justify-between pt-4">
            <p className=" font-medium leading-8 text-alert">Shipping:</p>
            <p className=" font-medium leading-8 text-alert">
              ${shippingPrice.toFixed(2)}
            </p>
          </div>
          {discountPrice > 0 && (
            <div className="flex items-center justify-between pt-2 pb-4">
              <p className=" font-medium leading-8 text-success">Discount:</p>
              <p className=" font-medium leading-8 text-success">
                ${discountPrice.toFixed(2)}
              </p>
            </div>
          )}
          <div className="flex items-center justify-between pb-8">
            <p className="font-medium text-xl leading-8 text-black">Total:</p>
            <p className="font-semibold text-xl leading-8 text-indigo-600">
              ${(totalPrice + shippingPrice - discountPrice).toFixed(2)}
            </p>
          </div>

          {isPaying ? (
            <button
              onClick={handleCheck}
              disabled={!shippingAddress.id || !receiptAddress.id}
              className={`w-full flex py-3 px-6 rounded-xl justify-center items-center text-center ${
                !shippingAddress.id || !receiptAddress.id
                  ? "bg-muted hover:bg-lightSecontTextColor"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }   font-semibold text-lg text-white transition-all duration-500 `}
            >
              Checkout
            </button>
          ) : (
            <Link
              to={{
                pathname: navigationPath,
                state: {
                  totalPrice,
                  shippingPrice,
                  discountPrice,
                },
              }}
              className="w-full flex py-3 px-6 rounded-xl justify-center items-center text-center bg-indigo-600  font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"
            >
              Checkout
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default OrderSummary;
