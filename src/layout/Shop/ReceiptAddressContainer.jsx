import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAddress,
  setReceiptAddress,
} from "../../store/actions/shoppingCartActions";
import ReceiptAddressCard from "../../components/Cards/ReceiptAddressCard";

function ReceiptAddressContainer({ title, modal, setModal }) {
  const address = useSelector((state) => state.shoppingCartReducer.address);
  const [selectedAddress, setSelectAddress] = useState("");

  const dispatch = useDispatch();
  const shippingAddress = useSelector(
    (state) => state.shoppingCartReducer.shippingAddress
  );
  const receiptAddress = useSelector(
    (state) => state.shoppingCartReducer.receiptAddress
  );
  const handleSelectReceipt = (value, item) => {
    setSelectAddress(value + "Receipt");
    dispatch(setReceiptAddress(item));
  };
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-wrap gap-6 ml-2">
        {/* New Address */}
        <div
          onClick={() => setModal(!modal)}
          className="mt-8 shadow-sm w-96 p-4 h-28 flex flex-col gap-y-2 justify-center items-center text-center bg-lightGray border border-borderGray rounded-md"
        >
          <i className="fa-solid fa-plus text-alert font-bold text-xl"></i>
          <h4 className="text-sm font-medium text-headerColor">
            Add New Address
          </h4>
        </div>
        {/* Address Cart */}
        <div>
          {address?.map((item) => (
            <ReceiptAddressCard
              item={item}
              handleSelectReceipt={handleSelectReceipt}
              selectedAddress={selectedAddress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReceiptAddressContainer;
