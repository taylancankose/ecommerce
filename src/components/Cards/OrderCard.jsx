import React, { useState } from "react";
import { useSelector } from "react-redux";

function OrderCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const address = useSelector((state) => state.shoppingCartReducer.address);

  return (
    <div
      key={item.id}
      className="border border-borderGray rounded-lg shadow-sm"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex-col sm:flex-row gap-y-4 sm:gap-y-0 flex items-start md:items-center justify-between bg-bgGray py-4 px-6 text-xs md:text-sm"
      >
        <div>
          <p className="font-medium text-secondTextColor">Order Date</p>
          <p className="font-normal text-headerColor mt-1">
            {item?.order_date}
          </p>
        </div>
        <div>
          <p className="font-medium text-secondTextColor">Order Summary</p>
          <p className="font-normal text-headerColor mt-1">
            1 Delivery,{" "}
            {item?.products.reduce((acc, { count }) => count + acc, 0)} products
          </p>
        </div>
        <div>
          <p className="font-medium text-secondTextColor">Receiver</p>
          <p className="font-normal text-headerColor mt-1">
            {address.find((ad) => ad.id === item.address_id)?.name}{" "}
            {address.find((ad) => ad.id === item.address_id)?.surname}
          </p>
        </div>
        <div>
          <p className="font-medium text-secondTextColor">Amount</p>
          <p className="font-medium text-success mt-1">${item?.price}</p>
        </div>
        <i
          className={`fa-solid transition-transform transform fa-chevron-${
            isOpen ? "down rotate-180" : "down"
          }`}
        />
      </div>
      {isOpen && (
        <div className="p-4 transition-all duration-300 ease-in-out">
          {item?.products?.map((product) => (
            <div
              key={product?.id}
              className="block sm:flex gap-x-0 sm:gap-x-4 items-center "
            >
              <img
                src={product?.images[0].url}
                className="h-44 object-cover m-auto sm:m-0"
              />
              <div className="flex flex-col gap-y-4 w-full sm:mr-6 sm:ml-4">
                <div className="flex items-center justify-between">
                  <p>{product?.name}</p>
                  <p>${product?.price}</p>
                </div>
                <p>{product?.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderCard;
