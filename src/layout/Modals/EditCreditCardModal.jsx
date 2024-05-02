import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPayment } from "../../store/actions/shoppingCartActions";

function EditCreditCardModal({ onClose, item }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(item);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    dispatch(editPayment(form));
    onClose();
  };

  console.log(form);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-2/6">
        <button onClick={onClose}>Kapat</button>
        <div>
          {/* Name & Surname */}
          <div className="mt-2">
            {/* Name */}
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Name on Card
              </label>
              <input
                onChange={handleChange}
                name="name_on_card"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.name_on_card}
              />
            </div>
            {/* Surname */}
          </div>
          <div>
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Card No
              </label>
              <input
                onChange={handleChange}
                name="card_no"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.card_no}
                type="number"
                maxLength={16}
              />
            </div>
          </div>
          {/* Phone & Title */}
          <div className="flex items-center justify-around my-4 gap-x-4">
            {/* Phone */}
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Expire Month
              </label>
              <input
                onChange={handleChange}
                name="expire_month"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.expire_month}
                maxLength={2}
              />
            </div>
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Expire Year
              </label>
              <input
                onChange={handleChange}
                name="expire_year"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.expire_year}
                maxLength={4}
              />
            </div>
            {/* Title */}
          </div>
          <button
            onClick={editForm}
            className="bg-alert w-full py-3 rounded-md text-white font-medium hover:opacity-90 "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCreditCardModal;
