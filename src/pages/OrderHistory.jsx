import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../components/Cards/OrderCard";
import { getOrderHistory } from "../store/actions/shoppingCartActions";

function OrderHistory() {
  const dispatch = useDispatch();
  const orderHistory = useSelector(
    (state) => state.shoppingCartReducer.orderHistory
  );

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

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
