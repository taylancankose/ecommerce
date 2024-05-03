import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/";

function OrderSuccess() {
  const query = useParams();
  const history = useHistory();
  const order = useSelector((state) => state.shoppingCartReducer.order);

  const dateObject = new Date(order?.order_date).setDate(
    new Date(order?.order_date).getDate() + 3
  );

  var formattedDate = new Date(dateObject);

  var deliveryDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(formattedDate);

  const handleNavigate = () => {
    history.push("/");
  };

  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Payment Successful
        </h2>
        <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Thanks for making a purchase you can check our order summary frm below
        </p>
        <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div class="data">
              <p class="font-semibold text-base leading-7 text-black">
                Order Id:{" "}
                <span class="text-indigo-600 font-medium">
                  #S
                  {query.id}T
                </span>
              </p>
              <p class="font-semibold text-base leading-7 text-black mt-4">
                Order Payment :{" "}
                <span class="text-gray-400 font-medium">
                  {order?.order_date}
                </span>
              </p>
            </div>
            <button
              onClick={handleNavigate}
              class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
            >
              Go Back To Home
            </button>
          </div>
          <div class="w-full px-3 min-[400px]:px-6">
            {order?.products.map((item) => (
              <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                <div class="flex flex-row items-center w-full ">
                  <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div class="flex items-center">
                      <div class="">
                        <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                          {item?.detail}
                        </h2>
                        <div class="flex items-center ">
                          <p class="font-medium text-base leading-7 text-black ">
                            Qty:{" "}
                            <span class="text-gray-500">{item?.count}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-5">
                      <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm leading-7 text-black">
                            Status
                          </p>
                          <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                            Ready for Delivery
                          </p>
                        </div>
                      </div>
                      <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div class="flex gap-3 lg:block">
                          <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                            Expected Delivery Time
                          </p>
                          <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                            {deliveryDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
            <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
              <p class="font-medium text-lg text-gray-900 py-3 max-lg:text-center">
                Paid using Credit Card{" "}
                <span class="text-gray-500">
                  ending with{" "}
                  {order?.card_no.slice(
                    order?.card_no.length - 4,
                    order?.card_no.length
                  )}
                </span>
              </p>
            </div>
            <p class="font-semibold text-lg text-black py-6">
              Total Price: <span class="text-indigo-600"> ${order?.price}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;
