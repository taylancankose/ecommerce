import React, { useState } from "react";
import OrderSummary from "../layout/Shop/OrderSummary";
import { useSelector } from "react-redux";
import Input from "../components/Inputs/Input";
import { useForm } from "react-hook-form";

function CheckoutPage() {
  const [active, setActive] = useState("Address");
  const [modal, setModal] = useState(false);
  const address = useSelector((state) => state.shoppingCartReducer.address);
  const payment = useSelector((state) => state.shoppingCartReducer.payment);

  console.log(address);
  const onClose = () => setModal(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" });

  return (
    <div className="p-6 lg:flex flex-wrap font-montserrat ">
      {/* Left */}
      <div className="md:w-3/5 w-full m-auto lg:m-0">
        {/* Top Nav */}
        <div className="lg:mx-16">
          <div className="flex items-center lg:justify-between w-full lg:w-4/5 ">
            <div
              onClick={() => setActive("Address")}
              className={`border border-borderGray flex h-24 items-center  w-1/2 rounded-l-lg shadow-md cursor-pointer ${
                active === "Address" ? "bg-white" : "bg-bgGray"
              }`}
            >
              <div className="pl-4">
                <h3 className="font-bold text-lg text-headerColor">
                  Address Info
                </h3>
                <h4 className="mt-1 text-sm hidden md:inline">
                  1671/1 sk. no: 10 daire: 4 Çiçek Apt
                </h4>
              </div>
            </div>
            <div
              onClick={() => setActive("Cards")}
              className={`w-1/2 border border-borderGray h-24 items-center flex rounded-r-lg shadow-md cursor-pointer ${
                active === "Cards" ? "bg-white" : "bg-bgGray"
              }`}
            >
              <div className="pl-4">
                <h3 className="font-bold text-lg text-headerColor">Payment</h3>
                <h4 className="mt-1 text-sm hidden md:inline">
                  Choose your credit cart
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:mx-16 my-12 border p-4 border-borderGray rounded-md shadow-sm relative">
          <h3 className="text-xl font-bold mb-2">{active}</h3>
          {active === "Address" ? (
            <div className="flex flex-wrap gap-6 ">
              {/* New Address */}
              <div
                onClick={() => setModal(!modal)}
                className="mt-8 shadow-sm w-96 p-4 h-28 flex flex-col gap-y-2 justify-center items-center text-center bg-lightGray border border-borderGray rounded-md"
              >
                <i className="fa-solid fa-plus text-alert font-bold text-xl"></i>
                <h4 className="text-sm font-medium text-headerColor">
                  Add New Address
                </h4>
              </div>
              {/* Address Cart */}
              <div className="w-96 ">
                <div className="flex justify-between mb-2">
                  <div>
                    <input id="address" type="radio" />
                    <label
                      htmlFor="address"
                      className="ml-2 font-medium text-sm"
                    >
                      Ev
                    </label>
                  </div>
                  <p className="text-sm underline"> Edit</p>
                </div>
                <div className="shadow-sm p-4 md:h-28 flex flex-col gap-y-2 justify-center bg-lightGray border border-borderGray rounded-md font-medium ">
                  <div className="md:flex items-center justify-between w-full text-sm mb-2">
                    <div className="my-2 md:my-0 flex items-center gap-x-2">
                      <i class="fa-solid fa-user text-alert"></i>
                      <p>Username</p>
                    </div>
                    <div className="flex items-center gap-x-2 text-sm">
                      <i class="fa-solid fa-mobile-screen-button"></i>
                      <p>(534) *** ** 26</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <p>1671/1 sk. no: 10 daire: 4 Çiçek Apt</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form></form>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="xl:w-[30%] lg:w-1/5 w-3/4 m-auto">
        <OrderSummary />
      </div>

      {modal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-2/6">
            <button onClick={onClose}>Kapat</button>
            <form>
              <div className="flex items-center justify-around my-4">
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
                  />
                </div>
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
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
