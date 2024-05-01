import React from "react";
import Input from "../components/Inputs/Input";
import { cities, districts } from "../utils/countries";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editAddress } from "../store/actions/shoppingCartActions";

function EditModal({ sendForm, onClose, setCity, item }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" });
  const dispatch = useDispatch();

  const handleEdit = (data) => {
    dispatch(editAddress(data));
    console.log(data);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-2/6">
        <button onClick={onClose}>Kapat</button>
        <form onSubmit={handleSubmit(handleEdit)}>
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
                defaultValue={item?.name}
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
                defaultValue={item?.surname}
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
                defaultValue={item?.phone}
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
                defaultValue={item?.title}
              />
            </div>
          </div>
          {/* City & Distinct */}
          <div className="flex items-center justify-around my-4 w-full bg-red-300">
            {/* City */}
            <div className="w-5/12">
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
                Cities
              </label>
              <select
                name="city"
                {...register("city")}
                defaultValue={item?.city}
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
                disabled={item?.city?.length < 0}
                name="district"
                defaultValue={item?.district}
                className={`border w-full text-sm border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7   tracking-[0.2px] my-2 text-secondTextColor`}
              >
                {districts[item?.city]?.map((district, i) => (
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
              defaultValue={item?.neighborhood}
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

export default EditModal;
