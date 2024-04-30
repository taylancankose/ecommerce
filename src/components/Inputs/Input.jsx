import React from "react";

function Input({
  label,
  placeholder,
  rules,
  register,
  labelTitle,
  type,
  className,
}) {
  return (
    <>
      <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mb-2">
        {labelTitle}*
      </label>
      <input
        placeholder={`${placeholder}*`}
        className={`border ${className} flex flex-col w-full border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor mt-2 mb-6`}
        {...register(label, rules)}
        type={type}
        name={label}
      />
    </>
  );
}

export default Input;
