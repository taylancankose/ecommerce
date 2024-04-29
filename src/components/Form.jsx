import React from "react";
import Input from "./Inputs/Input";

const Form = ({ inputConfigs, form, handleChange }) => {
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
