import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";
import OrderSummary from "../layout/Shop/OrderSummary";
import ShoppingCart from "../layout/Shop/ShoppingCart";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(totalPrice);
  const [promo, setPromo] = useState("");
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

  const calculateTotalPrice = () => {
    let result = 0;
    cart.forEach((item) => {
      const checked = item?.checked;
      const price = item?.product?.price;
      const count = item?.count;
      if (checked) {
        result += price * count;
        setTotalPrice(result);
        setShippingPrice(result * 0.05);
      } else {
        setTotalPrice(0);
        setShippingPrice(0);
      }
    });
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (promo.toLowerCase().trim() === "taylan24") {
      setDiscountPrice(totalPrice * 0.2);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
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
          <OrderSummary
            cart={cart}
            setPromo={setPromo}
            handleApply={handleApply}
            totalPrice={totalPrice}
            discountPrice={discountPrice}
            shippingPrice={shippingPrice}
          />
        </div>
      </div>
    </section>
  );
}

export default CartPage;
