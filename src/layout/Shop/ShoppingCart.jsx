import React from "react";
import { useDispatch } from "react-redux";
import { removeCart, setCart } from "../../store/actions/shoppingCartActions";

function ShoppingCart({ item, handleDecrease, handleIncrease }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeCart(item?.product.id));
  };

  const selectItem = (e) => {
    const checked = e.target.checked;
    dispatch(setCart(item.product, item.count, checked)); // Burada item.checked doğrudan değiştiriliyor
  };

  return (
    <div className="border border-borderGray rounded-md mt-5">
      <div className="py-1 bg-bgGray">
        <div className="mx-8">
          <p>Mağaza ID: </p>
        </div>
      </div>
      <div className="md:flex p-2 items-center justify-between">
        <div className="md:flex md:w-2/5 md:gap-x-3 items-center">
          <div className="md:flex lg:w-auto xl:w-auto">
            <input
              onChange={selectItem}
              checked={item.checked}
              type="checkbox"
              className="hidden md:inline"
            />
            <img
              src={item?.product.images[0].url}
              alt="perfume bottle image"
              className="md:h-36 object-cover w-full md:w-auto md:pl-4"
            />
          </div>
          <div className="ml-2">
            <h6 className="font-semibold text-base leading-7 text-black text-center md:text-left mt-2 md:mt-0">
              {item?.product.name}
            </h6>
            <h6 className="font-normal text-base leading-7 text-gray-500 flex items-center justify-center md:justify-start my-1">
              {item?.product.rating}
              <i className="fa-solid fa-star text-xs ml-2 text-yellow mb-[1px]"></i>
            </h6>
            <h6 className="font-medium text-base leading-7 text-gray-600 text-center md:text-left">
              ${item?.product.price}
            </h6>
          </div>
        </div>
        <div className="sm:flex items-center md:w-3/5 justify-evenly md:justify-between md:mx-6">
          <div className="md:w-1/3 text-center flex justify-center items-center mt-2 ">
            <button
              onClick={() => handleDecrease(item)}
              className="bg-lightGray text-xl font-bold border border-borderGray w-12 h-12 rounded-l-lg"
            >
              -
            </button>
            <input
              className="w-12 h-12 text-center bg-white border-borderGray border "
              value={item?.count}
            />
            <button
              onClick={() => handleIncrease(item)}
              className="bg-lightGray text-xl font-bold border-borderGray border w-12 h-12 rounded-r-lg"
            >
              +
            </button>
          </div>
          <p className="font-bold md:w-1/3 text-lg leading-8 text-gray-600 text-center my-4">
            ${(item?.product.price * item?.count).toFixed(2)}
          </p>
          <div className="flex items-center justify-center gap-x-8">
            <i
              onClick={handleRemove}
              className="fa-solid md:text-right text-center justify-center md:justify-end flex md:w-1/3 fa-trash-can cursor-pointer text-secondTextColor text-lg"
            ></i>
            <input
              checked={item.checked}
              onChange={selectItem}
              type="checkbox"
              className="md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
