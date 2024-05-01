import React from "react";
import { useLocation } from "react-router-dom";

function Table() {
  const location = useLocation();
  const { totalPrice, shippingPrice, discountPrice } = location.state;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-black uppercase bg-borderGray">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-4 py-3">
              Payment Plan
            </th>
            <th scope="col" className="px-4 py-3">
              $/month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-bgGray border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-headerColor"
            >
              Cash
            </th>
            <td className="px-6 py-4">
              {(totalPrice + shippingPrice - discountPrice).toFixed(2)}
            </td>
          </tr>
          <tr className="bg-bgGray border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-headerColor"
            >
              3 Months
            </th>
            <td className="px-6 py-4">
              {((totalPrice + shippingPrice - discountPrice) / 3).toFixed(2)}
            </td>
          </tr>
          <tr className="bg-bgGray border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-headerColor"
            >
              3 Months
            </th>
            <td className="px-6 py-4">
              {((totalPrice + shippingPrice - discountPrice) / 9).toFixed(2)}
            </td>
          </tr>
          <tr className="bg-bgGray border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-headerColor"
            >
              3 Months
            </th>
            <td className="px-6 py-4">
              {((totalPrice + shippingPrice - discountPrice) / 6).toFixed(2)}
            </td>
          </tr>
          <tr className="bg-bgGray border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-headerColor"
            >
              12 Months
            </th>
            <td className="px-6 py-4">
              {((totalPrice + shippingPrice - discountPrice) / 12).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
