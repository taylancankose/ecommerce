import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../store/actions/shoppingCartActions";

function AddressCard({ item, register, registerLabel, onChange }) {
  const dispatch = useDispatch();
  const shippingAddress = useSelector(
    (state) => state.shoppingCartReducer.shippingAddress
  );
  const receiptAddress = useSelector(
    (state) => state.shoppingCartReducer.receiptAddress
  );
  return (
    <>
      <div className="flex justify-between items-center mt-5 ">
        {/* select */}
        <div className="">
          <input
            type="radio"
            {...register(registerLabel)}
            value={item.id}
            id={item.id}
            onChange={onChange}
          />
          <label className="ml-2 font-medium text-sm">{item?.title}</label>
        </div>
        {/* edit & remove */}
        <div className="flex items-center gap-x-8">
          <p className="text-sm underline cursor-pointer">Edit</p>
          <p
            onClick={() => dispatch(removeAddress(item.id))}
            className="text-sm underline cursor-pointer"
          >
            Remove
          </p>
        </div>
      </div>
      {/* Card */}
      <div
        className={`shadow-sm p-4 lg:h-36  flex flex-col justify-center bg-lightGray border border-borderGray rounded-md font-medium mt-1`}
      >
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
          <p className="text-sm text-seco">
            {item?.neighborhood?.slice(0, 30)}
            {item?.neighborhood?.length > 30 && "..."}
          </p>
          <p>
            {item?.district}/{item?.city}
          </p>
        </div>
      </div>
    </>
  );
}

export default AddressCard;
