import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "../components/Cards/OrderCard";

function OrderHistory() {
  const orderHistory = useSelector(
    (state) => state.shoppingCartReducer.orderHistory
  );

  return (
    <div className="p-4 font-montserrat">
      <div className="md:mx-24 gap-y-8 flex flex-col">
        {orderHistory.map((item) => (
          <OrderCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
