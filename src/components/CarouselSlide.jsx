export default function CarouselSlide({
  title,
  subtitle,
  description,
  buttonText,
  background,
  price,
  isAbsolute,
  containerClass,
  secondButtonText,
}) {
  return (
    <div
      className={`h-full flex relative ${containerClass} ${
        isAbsolute ? "overflow-x-hidden" : "flex-wrap "
      }`}
    >
      <div className="p-6 m-auto text-center md:text-left w-5/6  md:flex md:flex-col lg:ml-40 md:justify-around md:h-96 z-10">
        <h5 className=" font-bold leading-6 tracking-[0.1px] mb-4 md:mb-0">
          {title}
        </h5>
        <h1 className=" font-bold  md:text-6xl tracking-[0.2px] leading-[80px] mb-4 md:mb-0 text-4xl">
          {subtitle}
        </h1>
        <h4 className="tracking-[0.2px] leading-8 font-normal text-xl  mb-4 md:mb-0 w-5/6 m-auto md:w-3/6 md:m-0 ">
          {description}
        </h4>
        <div className="flex flex-wrap items-center ">
          {price && (
            <h2 className="m-auto md:m-0 md:mr-4 font-bold text-2xl leading-8 tracking-[0.1px] text-center">
              {price}
            </h2>
          )}
          <button className="bg-success gap-3 py-4 px-10 round rounded-sm  font-bold text-xl leading-8 tracking-[0.1px] m-auto md:m-0 ">
            {buttonText}
          </button>
          {secondButtonText && (
            <button className="border border-success gap-3 py-3.5 px-7 round rounded-sm font-bold text-xl leading-8 tracking-[0.1px] m-auto md:m-0 md:ml-4 mt-4 lg:mt-0">
              {secondButtonText}
            </button>
          )}
        </div>
      </div>
      {background && (
        <img
          src={background}
          className={`${
            isAbsolute
              ? "absolute -right-40 h-full lg:right-0 bottom-0"
              : "md:absolute md:right-12 h-5/6 md:bottom-0 md:h-4/6 lg:h-5/6 "
          }`}
        />
      )}
    </div>
  );
}
