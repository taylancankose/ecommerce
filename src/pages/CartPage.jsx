import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceDiscounted, setTotalPriceDiscounted] = useState(totalPrice);
  const [promo, setPromo] = useState("");
  const cart = useSelector((state) => state.shoppingCartReducer.cart);
  const dispatch = useDispatch();

  const handleIncrease = (product) => {
    console.log(product);
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.product.id
    );
    if (existingItemIndex !== -1) {
      const updtdCart = [...cart];
      updtdCart[existingItemIndex].count += 1;
      dispatch(
        setCart(
          updtdCart[existingItemIndex].product,
          updtdCart[existingItemIndex].count,
          updtdCart[existingItemIndex].checked
        )
      );
    }
  };

  const handleDecrease = (product) => {
    console.log(product);
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.product.id
    );
    if (existingItemIndex !== -1) {
      const updtdCart = [...cart];
      if (updtdCart[existingItemIndex].count !== 1) {
        updtdCart[existingItemIndex].count -= 1;
      } else {
        updtdCart[existingItemIndex].count = 1;
      }
      dispatch(
        setCart(
          updtdCart[existingItemIndex].product,
          updtdCart[existingItemIndex].count,
          updtdCart[existingItemIndex].checked
        )
      );
    }
  };

  const calculateTotalPrice = () => {
    let result = 0;
    cart.forEach((item) => {
      const price = item?.product?.price;
      const count = item?.count;
      result += price * count;
      setTotalPrice(result);
    });
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (promo.toLowerCase().trim() === "taylan24") {
      setTotalPriceDiscounted(totalPrice * 0.75);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <section className="flex overflow-x-hidden font-montserrat">
      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row flex-wrap w-full justify-around items-center">
          <div className="xl:w-3/6 lg:w-2/3 w-3/4 pt-14 pb-8 lg:py-24 items-center">
            {/* Top */}
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                3 Items
              </h2>
            </div>
            {/* Product */}
            <div className="flex flex-col justify-center">
              {cart?.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center min-[767px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group"
                >
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src={item?.product.images[0].url}
                      alt="perfume bottle image"
                      className="mx-auto w-4/5 aspect-square object-cover"
                    />
                  </div>
                  <div className="w-4/5 flex items-center justify-between">
                    <div className="flex flex-col max-[500px]:items-center w-[120px] lg:w-[160px]">
                      <h6 className="font-semibold text-base leading-7 text-black">
                        {item?.product.name}
                      </h6>
                      <h6 className="font-normal text-base leading-7 text-gray-500">
                        {item?.product.rating * 10} / 10
                      </h6>
                      <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        ${item?.product.price}
                      </h6>
                    </div>
                    {/* Price & Qty */}
                    <div className="flex lg:w-44 justify-center items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center ">
                        <button
                          onClick={() => handleDecrease(item)}
                          className="text-2xl font-bold group rounded-l-xl px-5  py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="text-xl font-bold border-y border-gray-200 outline-none text-gray-900 w-full max-w-[33px] md:max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[20px] -mr-3   text-center bg-transparent"
                          value={item.count}
                        />
                        <button
                          onClick={() => handleIncrease(item)}
                          className="text-2xl font-bold group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center lg:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                        ${(item?.product.price * item?.count).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
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
                  ${totalPrice}
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
                <div className="flex items-center justify-between py-8">
                  <p className="font-medium text-xl leading-8 text-black">
                    {cart?.length > 1
                      ? `${cart?.length} items`
                      : `${cart?.length} item`}
                  </p>
                  <p className="font-semibold text-xl leading-8 text-indigo-600">
                    ${totalPriceDiscounted.toFixed(2)}
                  </p>
                </div>
                <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
