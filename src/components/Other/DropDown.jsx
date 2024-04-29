import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../store/actions/productActions";

const Dropdown = ({ optionD, setOptionD, options, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.productReducer.filter);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectValue = async (value) => {
    setIsOpen(false);
    let sortValue = "";
    if (value === "Rating Low To High") {
      sortValue = "rating:asc";
      setOptionD("Rating Low To High");
    } else if (value === "Rating High To Low") {
      sortValue = "rating:desc";
      setOptionD("Rating High To Low");
    } else if (value === "Price Low To High") {
      sortValue = "price:asc";
      setOptionD("Price Low To High");
    } else if (value === "Price High To Low") {
      sortValue = "price:desc";
      setOptionD("Price High To Low");
    }
    dispatch(setSort(sortValue));
  };

  useEffect(() => {
    console.log(sort);
  }, [sort]);
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
        <span>{optionD}</span>
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
