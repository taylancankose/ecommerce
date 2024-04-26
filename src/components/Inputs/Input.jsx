import React from "react";

function Input({
  label,
  placeholder,
  rules,
  register,
  labelTitle,
  type,
  // handleChange,
  // value,
  // name,
  // disabled,
  // required,
}) {
  return (
    <>
      <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
        {labelTitle}*
      </label>
      <input
        placeholder={`${placeholder}*`}
        className="border flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6"
        {...register(label, rules)}
        type={type}
      />
      {/* <input
        onChange={handleChange}
        value={value}
        type={type}
        name={name}
        disabled={disabled}
        placeholder={`${placeholder}*`}
        className="border border-borderGray bg-dropDownGray py-4 pl-3 rounded-md fotn-normal leading-7 tracking-[0.2px] text-secondTextColor"
      /> */}
    </>
  );
}

export default Input;
