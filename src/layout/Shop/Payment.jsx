import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import CreditCard from "../../components/Cards/CreditCard";
import CreditCardModal from "../Modals/CreditCardModal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getPayment,
  savePayment,
} from "../../store/actions/shoppingCartActions";
import CardForm from "./CardForm";
import { useLocation } from "react-router-dom/";

function Payment({ setPaySavedCard, paySavedCard }) {
  const [modal, setModal] = useState(false);
  const { handleSubmit, register } = useForm({ mode: "all" });
  const location = useLocation();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shoppingCartReducer.payment);
  useEffect(() => {
    dispatch(getPayment());
  }, []);

  const handleAddCard = (data) => {
    dispatch(savePayment(data));
    setModal(false);
  };

  return (
    <div className="font-montserrat">
      <div className="flex flex-wrap items-start xl:justify-between">
        {paySavedCard ? (
          <div className="lg:mt-0 w-11/12 2xl:w-7/12 flex justify-between flex-wrap">
            {/* Add New Card */}
            <div className="my-10">
              <div
                onClick={() => setModal(true)}
                className=" cursor-pointer h-48 w-80 rounded-xl bg-gradient-to-r from-gray-500 to-gray-400 text-white shadow-2xl transition-transform sm:h-48/ sm:w-80 sm:hover:scale-105"
              >
                <div className="flex flex-col gap-y-4 justify-center items-center w-full h-full">
                  <i className="fa-solid fa-plus font-bold text-xl"></i>
                  <p className="font-semibold">Add New Credit Card</p>
                </div>
              </div>
            </div>
            {cards.map((card, i) => (
              <CreditCard key={i} card={card} />
            ))}
          </div>
        ) : (
          <CardForm />
        )}

        <Table />
      </div>
      {modal && (
        <CreditCardModal
          onClose={() => setModal(false)}
          handleSubmit={handleSubmit}
          register={register}
          sendForm={handleAddCard}
        />
      )}
    </div>
  );
}

export default Payment;
