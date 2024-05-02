import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddressCard from "../../components/Cards/AddressCard";

function AddressContainer({ handleSelectAddress, title, modal, setModal }) {
  const address = useSelector((state) => state.shoppingCartReducer.address);
  const [selectedAddress, setSelectAddress] = useState("");

  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-wrap gap-6 ">
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
        {address?.map((item) => (
          <AddressCard
            key={item.id}
            item={item}
            handleSelectAddress={handleSelectAddress}
            setSelectAddress={setSelectAddress}
            selectedAddress={selectedAddress}
          />
        ))}
      </div>
    </div>
  );
}

export default AddressContainer;
