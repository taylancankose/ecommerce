import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";

function EditorPick() {
  return (
    <div className="w-full pt-20 h-screen">
      {/* Title */}
      <Title />
      {/* Category Cards */}
      <div className="text-center lg:flex w-full lg:h-screen justify-center mt-8 h-full">
        <Card
          className={
            "h-[25%] lg:h-4/6 lg:w-2/6 w-96 bg-cat-men lg:mr-10 lg:ml-60 my-4 lg:mb-0 m-auto lg:m-0"
          }
          containerClass={"w-0 px-16 py-3"}
          title={"MEN"}
        />
        <Card
          className={
            "h-[25%] lg:h-4/6 lg:w-1/6 w-96 bg-cat-women lg:mr-10 mb-4 lg:mb-0 m-auto lg:m-0"
          }
          containerClass={"w-0 px-16 py-3"}
          title={"WOMEN"}
        />
        <div className="h-[25%] lg:h-4/6 lg:w-2/6 w-96 m-auto lg:m-0">
          <Card
            className={
              "h-[calc(50%-8px)] bg-cat-accessories lg:bg-bottom lg:w-1/2 mb-4 lg:mb-0"
            }
            containerClass={"w-0 px-20 py-3"}
            title={"ACCESSORIES"}
          />
          <Card
            className={
              "h-[calc(50%-8px)] bg-cat-kids lg:bg-bottom lg:w-1/2 mt-4 "
            }
            containerClass={"w-0 px-16 py-3"}
            title={"KIDS"}
          />
        </div>
      </div>
    </div>
  );
}

export default EditorPick;
