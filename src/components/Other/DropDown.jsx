import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByFilter,
  setFilter,
} from "../../store/actions/productActions";

const Dropdown = ({ title, options, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.productReducer.filter);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectValue = async (value) => {
    setIsOpen(false);
    let filterValue = "";
    console.log(value);
    if (value === "Rating Low To High") {
      filterValue = "rating:asc";
    } else if (value === "Rating High To Low") {
      filterValue = "rating:desc";
    } else if (value === "Price Low To High") {
      filterValue = "price:asc";
    } else if (value === "Price High To Low") {
      filterValue = "price:desc";
    }
    dispatch(setFilter(filterValue));
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div
      className={`relative ${
        type === "ghost"
          ? ""
          : "border w-60 p-2 h-14 rounded-md border-borderGray bg-dropDownGray flex items-center"
      }`}
    >
      <button
        onClick={toggleDropdown}
        className="text-gray-700 font-semibold bg-transparent inline-flex items-center hover:ease-in justify-between w-full"
      >
        <span>{filter}</span>
        <i className="fa-solid fa-chevron-down mr-2"></i>
      </button>
      <div
        className={`absolute right-0 top-9 mt-2 w-56 bg-white border rounded-md shadow-lg 
        )} ${isOpen ? "ease-in" : "hidden"} transition-opacity duration-1000`}
      >
        <div className="py-1">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => selectValue(option)}
              className="w-full text-left block p-2 text-sm text-gray-700 hover:bg-gray-100"
              value={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
