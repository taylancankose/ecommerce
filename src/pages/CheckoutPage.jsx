import React, { useEffect, useState } from "react";
import OrderSummary from "../layout/Shop/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getAddresses,
  postAddresses,
  setReceiptAddress,
  setShippingAddress,
} from "../store/actions/shoppingCartActions";
import Modal from "../layout/Modal";
import AddressContainer from "../layout/Shop/AddressContainer";
import ReceiptAddressContainer from "../layout/Shop/ReceiptAddressContainer";
import AddressCard from "../components/Cards/AddressCard";
import { saveAddresses } from "../fetch/cart";

function CheckoutPage() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("Address");
  const [modal, setModal] = useState(false);
  const [city, setCity] = useState("");
  const [sameAddress, setSameAddress] = useState(true);
  const newAddress = useSelector(
    (state) => state.shoppingCartReducer.newAddress
  );

  const shippingAddress = useSelector(
    (state) => state.shoppingCartReducer.shippingAddress
  );
  const address = useSelector((state) => state.shoppingCartReducer.address);
  const receiptAddress = useSelector(
    (state) => state.shoppingCartReducer.receiptAddress
  );
  const user = useSelector((state) => state.clientReducer.user);
  const onClose = () => setModal(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" });

  const sendForm = async (data) => {
    dispatch(postAddresses(data));
    console.log(data);
    setModal(false);
  };

  useEffect(() => {
    dispatch(getAddresses(user.token));
  }, [newAddress]);

  const handleSelectAddress = (data) => {
    if (sameAddress) {
      dispatch(setShippingAddress(data.shippingAddress));
      dispatch(setReceiptAddress(data.shippingAddress));
    } else {
      dispatch(setShippingAddress(data.shippingAddress));
      dispatch(setReceiptAddress(data.billingAddress));
    }
    console.log(data);
  };
  return (
    <div className="p-6 lg:flex font-montserrat ">
      {/* Left */}
      <div className="w-full lg:w-4/5 xl:w-3/5 m-auto lg:m-0">
        {/* Top Nav */}
        <div className="lg:mx-12">
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
        <div className="lg:mx-12  my-12 border p-4 border-borderGray rounded-md shadow-sm relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold ">{active}</h3>
            <div className="flex items-center justify-center gap-2">
              <input
                onChange={() => setSameAddress(!sameAddress)}
                defaultChecked
                type="checkbox"
                id="receiptAd"
              />
              <label
                className="text-sm font-medium text-secondTextColor"
                htmlFor="receiptAd"
              >
                Send my receipt to same address.
              </label>
            </div>
          </div>
          {active === "Address" ? (
            <>
              <div>
                {/* New Address */}
                <div
                  onClick={() => setModal(!modal)}
                  className="my-8 shadow-sm w-full p-4 h-28 flex flex-col gap-y-2 justify-center items-center text-center bg-lightGray border border-borderGray rounded-md"
                >
                  <i className="fa-solid fa-plus text-alert font-bold text-xl"></i>
                  <h4 className="text-sm font-medium text-headerColor">
                    Add New Address
                  </h4>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(handleSelectAddress)}
                className="flex gap-x-8 flex-wrap lg:flex-nowrap"
              >
                <fieldset className="w-full md:w-6/12">
                  <legend>Shipping Address</legend>
                  {address.map((item) => (
                    <AddressCard
                      register={register}
                      item={item}
                      key={item.id}
                      registerLabel={"shippingAddress"}
                      onChange={() => handleSelectAddress(item.id)}
                    />
                  ))}
                </fieldset>

                {!sameAddress && (
                  <fieldset className="w-full md:w-6/12">
                    <legend>Receipt Address</legend>
                    {address.map((item) => (
                      <AddressCard
                        register={register}
                        registerLabel={"billingAddress"}
                        item={item}
                        key={item.id}
                        onChange={() => handleSelectAddress(item.id)}
                      />
                    ))}
                  </fieldset>
                )}
                <button type="submit">send</button>
              </form>
            </>
          ) : (
            <form></form>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="xl:w-[30%] lg:w-1/5 w-3/4 m-auto">
        <OrderSummary isPaying={true} />
      </div>

      {modal && (
        <Modal
          onClose={onClose}
          register={register}
          sendForm={sendForm}
          setCity={setCity}
          handleSubmit={handleSubmit}
          city={city}
        />
      )}
    </div>
  );
}

export default CheckoutPage;
