import React from "react";
import Input from "../../components/Inputs/Input";

function UserForm({ register, errors }) {
  return (
    <>
      <Input
        labelTitle={"Full Name"}
        label="name"
        register={register}
        rules={{
          required: "Please enter a name longer than 3 characters",
          minLength: 3,
        }}
        placeholder="Full Name"
        type="text"
      />
      {errors.name && (
        <p className="text-error text-xs -mt-4 mb-2 font-medium">
          {errors.name.message}
        </p>
      )}
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
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          pattern: {
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          },
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

      <Input
        labelTitle={"Verify Password"}
        label="validatePassword"
        register={register}
        rules={{
          required: true,
        }}
        placeholder="Verify Password"
        type="password"
      />
      {errors.validatePassword && (
        <p className="text-error text-xs -mt-4 mb-2 font-medium">
          {errors.validatePassword.message}
        </p>
      )}
    </>
  );
}

export default UserForm;
