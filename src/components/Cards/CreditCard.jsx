import React from "react";

function CreditCard() {
  return (
    <div class="my-10">
      <div class="relative cursor-pointer h-48 w-80 rounded-xl bg-gradient-to-r from-gray-500 to-gray-400 text-white shadow-2xl transition-transform sm:h-48/ sm:w-80 sm:hover:scale-105">
        <div class="absolute top-4 w-full px-8 ">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light">Name</p>
              <p class="font-medium tracking-widest">Carter Mullen</p>
            </div>
            <img
              class="h-12 w-12 object-contain"
              src="data:image/png;base64,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"
            />
          </div>
          <div class="pt-1">
            <p class="font-light">Card Number</p>
            <p class="tracking-more-wider font-medium">4312 567 7890 7864</p>
          </div>
          <div class="pt-4 pr-6">
            <div class="flex justify-between">
              <div class="">
                <p class="text-xs font-light">Valid From</p>
                <p class="text-base font-medium tracking-widest">11/15</p>
              </div>
              <div class="">
                <p class="text-xs font-light">Expiry</p>
                <p class="text-base font-medium tracking-widest">03/25</p>
              </div>

              <div class="">
                <p class="text-xs font-light">CVV</p>
                <p class="tracking-more-wider text-sm font-bold">521</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
