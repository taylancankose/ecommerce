import React from "react";
import Input from "../../components/Inputs/Input";

function Form({ register, errors }) {
  return (
    <>
      <Input
        labelTitle={"Email"}
        label="email"
        register={register}
        placeholder="Email"
        type="email"
        rules={{ required: "Email Address is required" }}
      />
      {errors.email && (
        <p className="text-error text-xs -mt-4 mb-2 font-medium">
          {errors.email.message}
        </p>
      )}
      <Input
        labelTitle={"Password"}
        label="password"
        register={register}
        rules={{
          required: "Password is required",
        }}
        placeholder="Password"
        type="password"
      />
      {errors.validatePassword && (
        <p className="text-error text-xs -mt-4 mb-2 font-medium">
          {errors.validatePassword.message}
        </p>
      )}
      {errors.password && (
        <p className="text-error text-xs -mt-4 mb-2 font-medium">
          {errors.password.message}
        </p>
      )}
    </>
  );
}

export default Form;
