import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";
import OrderSummary from "../layout/Shop/OrderSummary";
import ShoppingCart from "../layout/Shop/ShoppingCart";
import { calculateTotalPrice } from "../utils/calculatePrice";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);

  const cart = useSelector((state) => state.shoppingCartReducer.cart);
  const dispatch = useDispatch();

  const handleIncrease = (product) => {
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

  useEffect(() => {
    calculateTotalPrice(cart, setTotalPrice, setShippingPrice);
  }, [cart]);

  return (
    <section className="flex overflow-x-hidden font-montserrat">
      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row flex-wrap w-full justify-around items-center lg:items-start">
          <div className="xl:w-3/6 lg:w-2/3 w-3/4 pt-14 pb-8 lg:py-24 items-center">
            {/* Top */}
            <div className="md:flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                {cart?.length} Items
              </h2>
            </div>
            {/* Product */}
            <div className="flex flex-col justify-center">
              {cart?.map((item, i) => (
                <ShoppingCart
                  item={item}
                  key={i}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="xl:w-[25%] lg:w-1/5 w-3/4">
            <OrderSummary navigationPath={`/cart/checkout/${Date.now()}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
