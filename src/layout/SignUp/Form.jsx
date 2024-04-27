import React from "react";
import Input from "../../components/Inputs/Input";

function Form({ register, errors, role_id }) {
  return (
    <>
      {role_id === 2 ? (
        <>
          <Input
            labelTitle={"Store Name"}
            label="name"
            register={register}
            rules={{
              required: "Please enter a store name longer than 3 characters",
              minLength: 3,
            }}
            placeholder="Store Name"
            type="text"
          />
          {errors.name && (
            <p className="text-error text-xs -mt-4 mb-2 font-medium">
              {errors.name.message}
            </p>
          )}
          <Input
            labelTitle={"Phone"}
            label="phone"
            register={register}
            placeholder="05XXXXXXXXX"
            type="tel"
            rules={{
              required: "A Turkish Phone Number is required",
              pattern: {
                value: /^[0-9]{1}[0-9]{10}$/,
                message: "Turkish Phone Number is required",
              },
            }}
          />
          {errors.phone && (
            <p className="text-error text-xs -mt-4 mb-2 font-medium">
              {errors.phone.message}
            </p>
          )}
          <Input
            labelTitle={"Store Tax ID"}
            label="tax"
            register={register}
            rules={{
              required:
                "Store Tax ID field should be appear and it should match the pattern “TXXXXVXXXXXX”",
              pattern: {
                value: /^T\d{4}V\d{6}$/,
                message: "Invalid Tax ID format",
              },
            }}
            placeholder="TXXXXVXXXXXX"
            type="text"
          />
          {errors.tax && (
            <p className="text-error text-xs -mt-4 mb-2 font-medium">
              {errors.tax.message}
            </p>
          )}

          <Input
            labelTitle={"Store Bank Account"}
            label="bank"
            register={register}
            rules={{
              required: "Store Bank Account field should be valid IBAN address",
              pattern: {
                value:
                  /^(?:(?=.{5,34}$)[A-Z]{2}\d{2})(?:\d{4}|\d{2}(?:\d{3}){1,7})\w{0,16}$/,
                message: "Invalid IBAN format",
              },
            }}
            placeholder="Bank Account"
            type="text"
          />
          {errors.bank && (
            <p className="text-error text-xs -mt-4 mb-2 font-medium">
              {errors.bank.message}
            </p>
          )}
        </>
      ) : (
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
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
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
      )}
    </>
  );
}

export default Form;
