import React from "react";

function OrderSummary({
  setPromo,
  handleApply,
  discountPrice,
  totalPrice,
  cart,
  shippingPrice,
}) {
  return (
    <div className="xl:w-[25%] lg:w-1/5 w-3/4 py-12 lg:py-24">
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
          <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
            Promo Code
          </label>
          <div className="flex pb-4 w-full">
            <div className="relative w-full ">
              <input
                onChange={(e) => setPromo(e.target.value)}
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
          <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderSummary;
