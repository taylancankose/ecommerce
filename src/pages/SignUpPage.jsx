import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Inputs/Input";
import { getRoles } from "../fetch/role";

function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    "validate-password": "",
    role_id: 3,
  });
  const [roles, setRoles] = useState(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data.password !== data["validate-password"]) {
      console.log("first");
      setError("password", {
        type: "manual",
        message: "Passwords do not match.",
      });
    } else {
      setForm(data);
    }
  };

  const getRoleData = async () => {
    const res = await getRoles();
    setRoles(res);
  };

  useEffect(() => {
    getRoleData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-headerColor font-montserrat">
      <div className="flex items-center justify-center w-5/6 m-auto h-[90%] rounded-tl-2xl rounded-bl-2xl shadow-lg">
        {/* Image */}
        <div className="hidden lg:inline md:w-3/6 2xl:w-3/6 h-full rounded-tl-2xl rounded-bl-xl">
          <img
            src="/src/assets/signup-bg.jpg"
            className="object-cover h-full rounded-tl-2xl rounded-bl-xl"
          />
        </div>
        <div className="w-full h-full bg-white rounded-tl-2xl rounded-bl-2xl lg:rounded-tl-none lg:rounded-bl-none rounded-tr-2xl rounded-br-2xl items-center justify-center flex flex-col px-10 lg:px-0">
          {/* Form */}
          <form className="lg:p-40 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-bold mb-10 text-center text-headerColor text-3xl">
              SignUp to Shoppit
            </h1>

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
            {errors["validate-password"] && (
              <p className="text-error text-xs -mt-4 mb-2 font-medium">
                {errors["validate-password"].message}
              </p>
            )}
            {errors.password && (
              <p className="text-error text-xs -mt-4 mb-2 font-medium">
                {errors.password.message}
              </p>
            )}

            <Input
              labelTitle={"Verify Password"}
              label="validate-password"
              register={register}
              rules={{
                required: true,
              }}
              placeholder="Verify Password"
              type="password"
            />
            {errors["validate-password"] && (
              <p className="text-error text-xs -mt-4 mb-2 font-medium">
                {errors["validate-password"].message}
              </p>
            )}

            {/* Select */}
            <div className="flex w-full mt-2 mb-6 items-center">
              <label className="text-headerColor font-bold leading-6 tracking-[0.2px] mr-4">
                Rol*
              </label>
              <select
                defaultValue={3}
                name="customer_id"
                {...register("customer_id")}
                className="flex w-full md:w-2/3 xl:w-3/4 h-full border border-borderGray bg-dropDownGray py-4 pl-3 rounded-md font-normal leading-7 tracking-[0.2px] text-secondTextColor "
              >
                {roles
                  ?.sort((a, b) => Number(b.id) - Number(a.id))
                  .map((role) => (
                    <option
                      key={role.id}
                      className={`w-full h-full order-2 ${
                        role.id === 3
                          ? "order-1"
                          : role.id === 2
                          ? "order-2"
                          : "order-3"
                      }`}
                      value={role.id}
                    >
                      {role.name}
                    </option>
                  ))}
              </select>
            </div>
            <input
              type="submit"
              className="bg-success py-3 px-10 rounded-md text-white font-medium leading-6 tracking-[0.2px] cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
