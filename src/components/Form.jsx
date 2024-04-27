import React, { useState } from "react";
import Input from "./Inputs/Input";

const Form = ({ inputConfigs, form, handleChange }) => {
  console.log(form?.label);
  return (
    <form className="w-full">
      {inputConfigs.map((config, index) => (
        <div key={index} className="flex-col flex gap-y-3 w-full ">
          <Input
            handleChange={handleChange}
            label={config.label}
            type={config.type}
            value={form[index]}
            disabled={config.disabled}
            placeholder={config.placeholder}
            name={config?.label?.toLowerCase().replace(" ", "-")}
          />
        </div>
      ))}
    </form>
  );
};

export default Form;

// const inputConfig = [
//   { label: "Name", placeholder: "Full Name", type: "text" },
//   { label: "Email", placeholder: "example@gmail.com", type: "email" },
//   { label: "Password", placeholder: "Password", type: "password" },
//   {
//     label: "Validate Password",
//     placeholder: "Validate Password",
//     type: "password",
//   },
// ];

/* <Form
              inputConfigs={inputConfig}
              form={form}
              handleChange={handleChange}
            />   */
