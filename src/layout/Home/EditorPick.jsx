import React from "react";
import Card from "../../components/Cards/Card";

function EditorPick() {
  return (
    <div className="w-full h-screen bg-bgGray pt-10">
      {/* Title */}
      <div className=" flex flex-col justify-center items-center">
        <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-headerColor">
          Editor's Pick
        </h3>
        <p className="tracking-[0.2px] leading-5 font-normal text-secondTextColor mt-3">
          Problems trying to resolve the conflict between
        </p>
      </div>
      {/* Category Cards */}
      <div className="text-center lg:flex w-full lg:h-screen justify-center mt-8 h-full">
        <Card
          className={
            "h-[25%] lg:h-4/6 lg:w-2/6 w-96 lg:mr-10 lg:ml-60 my-4 lg:mb-0 m-auto lg:m-0"
          }
          containerClass={"w-0 px-16 py-3"}
          title={"MEN"}
          src={"/src/assets/cat-men.png"}
        />
        <Card
          className={
            "h-[25%] lg:h-4/6 lg:w-1/6 w-96 lg:mr-10 mb-4 lg:mb-0 m-auto lg:m-0"
          }
          containerClass={"w-0 px-16 py-3"}
          title={"WOMEN"}
          src={"/src/assets/cat-women.png"}
        />
        <div className="h-[25%] lg:h-4/6 lg:w-2/6 w-96 m-auto lg:m-0">
          <Card
            className={"h-[calc(50%-8px)]  lg:bg-bottom lg:w-1/2 mb-4 lg:mb-0"}
            containerClass={"w-0 px-20 py-3"}
            title={"ACCESSORIES"}
            src={"/src/assets/cat-accessories.png"}
          />
          <Card
            className={"h-[calc(50%-8px)] lg:bg-bottom lg:w-1/2 mt-4 "}
            containerClass={"w-0 px-16 py-3"}
            title={"KIDS"}
            src={"/src/assets/cat-kids.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default EditorPick;
