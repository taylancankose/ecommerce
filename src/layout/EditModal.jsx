import React, { useState } from "react";
import Input from "../components/Inputs/Input";
import { cities, districts } from "../utils/countries";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { editAddress } from "../store/actions/shoppingCartActions";

function EditModal({ onClose, item }) {
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
    dispatch(editAddress(form));
    onClose();
  };

  console.log(form);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-2/6">
        <button onClick={onClose}>Kapat</button>
        <div>
          {/* Name & Surname */}
          <div className="flex items-center justify-around my-4">
            {/* Name */}
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Name
              </label>
              <input
                onChange={handleChange}
                name="name"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.name}
              />
            </div>
            {/* Surname */}
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Surname
              </label>
              <input
                onChange={handleChange}
                name="surname"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.surname}
              />
            </div>
          </div>
          {/* Phone & Title */}
          <div className="flex items-center justify-around my-4">
            {/* Phone */}
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Phone
              </label>
              <input
                onChange={handleChange}
                name="phone"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.phone}
              />
            </div>
            {/* Title */}
            <div>
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Title
              </label>
              <input
                onChange={handleChange}
                name="title"
                className={`border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
                defaultValue={item?.title}
              />
            </div>
          </div>
          {/* City & Distinct */}
          <div className="flex items-center justify-between my-4 w-full ">
            {/* City */}
            <div className="w-5/12">
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Cities
              </label>
              <select
                onChange={handleChange}
                name="city"
                defaultValue={item?.city}
                className={`border w-full my-2 text-sm border-borderGray bg-dropDownGray py-4   rounded-md font-normal leading-7  tracking-[0.2px] text-secondTextColor`}
              >
                {cities.map((city, i) => (
                  <option value={city} key={i}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            {/* Distinct */}
            <div className="w-5/12">
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                District
              </label>
              <select
                onChange={handleChange}
                disabled={form?.city?.length < 0}
                name="district"
                defaultValue={item?.district}
                className={`border w-full text-sm border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7   tracking-[0.2px] my-2 text-secondTextColor`}
              >
                {districts[form?.city]?.map((district, i) => (
                  <option value={district} key={i}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Address Desc */}
          <div className="flex items-center justify-around my-4">
            <textarea
              placeholder="Enter your address"
              cols={30}
              rows={3}
              onChange={handleChange}
              defaultValue={item?.neighborhood}
              className="bg-lightGray border border-borderGray rounded-md pl-3 w-full py-4"
              name="neighborhood"
            />
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

export default EditModal;
