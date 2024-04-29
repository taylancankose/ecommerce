import React from "react";

function Pagination({ page, handlePaginate, currentPage }) {
  return (
    <div className="flex items-center justify-center gap-x-[.5px]">
      <button
        onClick={() => handlePaginate("first")}
        className="border-borderGray border bg-primary h-16 text-white w-16"
      >
        First
      </button>
      <button
        onClick={() => handlePaginate("prev")}
        className="border-borderGray border bg-primary h-16 text-white w-16"
      >
        Prev
      </button>
      {currentPage > 1 && (
        <button
          onClick={() => handlePaginate(currentPage - 1)}
          className=" bg-lightGray border border-borderGray h-16 text-headerColor w-16"
        >
          {currentPage - 1}
        </button>
      )}
      <button
        onClick={() => handlePaginate(currentPage)}
        className=" bg-primary  border border-borderGray h-16 text-headerColor w-16"
      >
        {currentPage}
      </button>
      {currentPage < page && (
        <button
          onClick={() => handlePaginate(currentPage + 1)}
          className="bg-lightGray border border-borderGray h-16 text-headerColor w-16"
        >
          {currentPage + 1}
        </button>
      )}
      {currentPage === 1 && (
        <button
          onClick={() => handlePaginate(currentPage + 2)}
          className="bg-lightGray border border-borderGray h-16 text-headerColor w-16"
        >
          {currentPage + 2}
        </button>
      )}
      <button
        onClick={() => handlePaginate("next")}
        className="border-borderGray border bg-primary h-16 text-white w-16"
      >
        Next
      </button>
      <button
        onClick={() => handlePaginate("last")}
        className="border-borderGray border bg-primary h-16 text-white w-16"
      >
        Last
      </button>
    </div>
  );
}

export default Pagination;
