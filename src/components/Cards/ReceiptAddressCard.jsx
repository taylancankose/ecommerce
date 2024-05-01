import React from "react";
import { useDispatch } from "react-redux";
import { removeAddress } from "../../store/actions/shoppingCartActions";

function ReceiptAddressCard({ item, selectedAddress, handleSelectReceipt }) {
  const dispatch = useDispatch();
  return (
    <div className="w-96" key={item.id}>
      <div className="flex justify-between mb-2">
        <div>
          <input
            id={item.id + "Rec"}
            type="radio"
            name={`${item.title}Receipt`}
            value={`${item.title}Receipt`}
            checked={selectedAddress === item.title + "Receipt"}
            onChange={(e) => handleSelectReceipt(e.target.value, item)}
          />
          <label htmlFor={item.id + "Rec"} className="ml-2 font-medium text-sm">
            {item?.title}
          </label>
        </div>
        <div className="flex items-center gap-x-8 ">
          <p className="text-sm underline cursor-pointer">Edit</p>
          <p
            onClick={() => dispatch(removeAddress(item.id))}
            className="text-sm underline cursor-pointer"
          >
            Remove
          </p>
        </div>
      </div>
      <div className="shadow-sm p-4 md:h-28 flex flex-col gap-y-2 justify-center bg-lightGray border border-borderGray rounded-md font-medium ">
        <div className="md:flex items-center justify-between w-full text-sm mb-2">
          <div className="my-2 md:my-0 flex items-center gap-x-2">
            <i className="fa-solid fa-user text-alert"></i>
            <p>
              {item?.name} {item?.surname}
            </p>
          </div>
          <div className="flex items-center gap-x-2 text-sm">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <p>{item?.phone}</p>
          </div>
        </div>
        <div className="mt-2 text-sm">
          <p>{item?.neighborhood}</p>
          <p>
            {item?.district}/{item?.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReceiptAddressCard;
