import React from "react";
import Input from "../components/Inputs/Input";
import { cities, districts } from "../utils/countries";

function Modal({ city, handleSubmit, register, sendForm, onClose, setCity }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-2/6">
        <button onClick={onClose}>Kapat</button>
        <form onSubmit={handleSubmit(sendForm)}>
          {/* Name & Surname */}
          <div className="flex items-center justify-around my-4">
            {/* Name */}
            <div>
              <Input
                labelTitle={"Ad"}
                label="name"
                register={register}
                rules={{
                  required: "You have to enter a name",
                }}
                placeholder="Name"
                type={"text"}
                className={"h-10  px-8"}
              />
            </div>
            {/* Surname */}
            <div>
              <Input
                labelTitle={"Soyad"}
                label="surname"
                register={register}
                rules={{
                  required: "You have to enter a surname",
                }}
                placeholder="Surname"
                type={"text"}
                className={"h-10 px-8"}
              />
            </div>
          </div>
          {/* Phone & Title */}
          <div className="flex items-center justify-around my-4">
            {/* Phone */}
            <div>
              <Input
                labelTitle={"Telefon"}
                label="phone"
                register={register}
                rules={{
                  required: "You have to enter a phone number",
                }}
                placeholder="XXXX XXX XXXX"
                type={"text"}
                className={"h-10 px-8"}
              />
            </div>
            {/* Title */}
            <div>
              <Input
                labelTitle={"Title"}
                label="title"
                register={register}
                rules={{
                  required: "You have to enter a title",
                }}
                placeholder="Title"
                type={"text"}
                className={"h-10 px-8"}
                name="title"
              />
            </div>
          </div>
          {/* City & Distinct */}
          <div className="flex items-center justify-around my-4 w-full ">
            {/* City */}
            <div className="w-5/12">
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Cities
              </label>
              <select
                name="city"
                {...register("city")}
                onChange={(e) => setCity(e.target.value)}
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
                {...register("district")}
                disabled={city?.length < 0}
                name="district"
                className={`border w-full text-sm border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7   tracking-[0.2px] my-2 text-secondTextColor`}
              >
                {districts[city]?.map((district, i) => (
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
              className="bg-lightGray border border-borderGray rounded-md pl-3 w-full py-4"
              name="neighborhood"
              {...register("neighborhood")}
            />
          </div>
          <button
            type="submit"
            className="bg-alert w-full py-3 rounded-md text-white font-medium hover:opacity-90 "
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
