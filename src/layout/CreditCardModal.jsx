import React from "react";
import Input from "../components/Inputs/Input";

function CreditCardModal({ handleSubmit, sendForm, onClose, register }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-2/6">
        <button onClick={onClose}>Kapat</button>
        <form onSubmit={handleSubmit(sendForm)}>
          {/* Name & Surname */}
          <div className="items-center justify-around my-4">
            {/* Name */}
            <Input
              labelTitle={"Full Name"}
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
          {/* Phone & Title */}
          <div className="items-center justify-around my-4">
            {/* Phone */}
            <Input
              labelTitle={"Card Number"}
              label="card"
              register={register}
              rules={{
                required: "You have to enter a card number",
                maxLength: 16,
              }}
              placeholder="XXXX XXX XXXX"
              type={"number"}
              className={"h-10 px-8"}
            />
          </div>
          {/* City & Distinct */}
          <div className="flex gap-4 my-4">
            <div className="w-full">
              <Input
                labelTitle={"MM"}
                label="card"
                register={register}
                rules={{
                  required: true,
                  maxLength: 2,
                }}
                placeholder="MM"
                type={"number"}
                className={"h-10 px-8"}
              />
            </div>
            <div className="w-full">
              <Input
                labelTitle={"YYYY"}
                label="card"
                register={register}
                rules={{
                  required: true,
                  maxLength: 4,
                }}
                placeholder="YYYY"
                type={"number"}
                className={"h-10 px-8"}
              />
            </div>
            <div className="w-full">
              <Input
                labelTitle={"CVV"}
                label="card"
                register={register}
                rules={{
                  required: true,
                  maxLength: 3,
                }}
                placeholder="XX"
                type={"number"}
                className={"h-10 px-8"}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-alert w-full py-3 rounded-md text-white font-medium hover:opacity-90 "
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreditCardModal;
