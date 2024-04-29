import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/";
import SignInForm from "../layout/SignIn/SignInForm";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../store/actions/clientActions";
import { Bounce, toast } from "react-toastify";

function SignInPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);
  const user = useSelector((state) => state.clientReducer.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await dispatch(handleLogin(data));
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(error);
    }
  };
  if (rememberMe && user?.token) {
    localStorage.setItem("credentials", JSON.stringify(user?.token));
    if (history.length > 1) history.goBack();
    else history.push("/");
  }

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-headerColor font-montserrat">
      <div className="flex items-center justify-center w-5/6 m-auto h-[90%] rounded-tl-2xl rounded-bl-2xl shadow-lg">
        {/* Image */}
        <div className="hidden lg:inline md:w-3/6 2xl:w-3/6 h-full rounded-tl-2xl rounded-bl-xl">
          <img
            src="https://i.ibb.co/DQ8SQ9p/woman-with-shopping-bags-jumping.jpg"
            className="object-cover h-full rounded-tl-2xl rounded-bl-xl"
          />
        </div>
        <div className="w-full h-full bg-white rounded-tl-2xl rounded-bl-2xl lg:rounded-tl-none lg:rounded-bl-none rounded-tr-2xl rounded-br-2xl items-center justify-center flex flex-col px-10 lg:px-0">
          {/* Form */}
          <form className="lg:p-40 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-bold mb-10 text-center text-headerColor text-3xl">
              SignIn to Shoppit
            </h1>
            <SignInForm errors={errors} register={register} />
            {/* Select */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                defaultValue={false}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember" className="ml-2">
                Remember Me
              </label>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                disabled={isSubmitting}
                type="submit"
                className={`bg-success py-3 px-24 rounded-md  text-white font-medium leading-6 tracking-[0.2px] cursor-pointer ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting && (
                  <span>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white font-extrabold animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                )}
                Login
              </button>
              <Link
                to="/sign-up"
                className="text-secondTextColor underline text-center mt-2 text-sm z-10 "
              >
                Don't have account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
