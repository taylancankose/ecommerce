import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/actions/shoppingCartActions";
import { useParams } from "react-router-dom/";
import { getSingleProduct } from "../../store/actions/productActions";

function ProductDetailsCard({ selectedProduct }) {
  const dispatch = useDispatch();
  const params = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { productId } = params;
  const cart = useSelector((state) => state.shoppingCartReducer.cart);
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [productId]);
  console.log(cart);

  const handleAddToCart = (product) => {
    const checked = true;
    const count = 1;
    dispatch(setCart(product, count, checked));
  };

  return (
    <div className=" mx-4 md:mx-0">
      <div className="lg:flex md:justify-left">
        <div className="lg:w-8/12 xl:w-5/12 w-full md:mr-4 xl:mr-0 ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
          >
            {selectedProduct?.images?.map((img) => (
              <SwiperSlide key={img.index}>
                <img src={img.url} className="aspect-square object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full mt-4 lg:mt-0">
            <Swiper
              className="lg:mt-4"
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {selectedProduct?.images?.map((img) => (
                <SwiperSlide key={img.index}>
                  <img src={img.url} className="aspect-square object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 w-full xl:w-5/12 lg:mb-48 xl:ml-28 lg:ml-16 ">
          <h4 className="font-medium text-xl text-headerColor tracking-[0.2px]  lg:w-full ">
            {selectedProduct?.name}
          </h4>
          {/* Stars */}
          <div className="mt-3  lg:w-full ">
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-regular fa-star text-yellow text-2xl"></i>
          </div>
          <h2 className="text-headerColor font-bold text-2xl mt-5  lg:w-full ">
            $ {selectedProduct?.price}
          </h2>
          <div className="flex items-center mt-3  lg:w-full ">
            <h6 className="text-secondTextColor text-sm font-bold tracking-[0.2px] mr-2">
              Availability :
            </h6>
            <h6 className="text-primary text-sm font-bold tracking-[0.2px]">
              {selectedProduct?.stock > 0 ? "In Stock" : "Out of Stock"}
            </h6>
          </div>
          <p className="font-normal text-sm tracking-[0.2px] text-lightSecontTextColor mt-8  lg:w-full ">
            {selectedProduct?.description}
          </p>
          <div className="border-t mt-5 border-1 border-muted  lg:w-full " />
          {/* Colors */}
          <div className="flex items-center mt-8 ">
            <div className="h-8 w-8 rounded-2xl mr-4 bg-primary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-secondary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-alert" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-headerColor" />
          </div>
          {/* BTN container */}
          <div className="mt-8 lg:mt-20 flex items-center ">
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="mr-3 font-bold text-white text-sm leading-6 tracking-[0.2px] bg-primary py-3 px-5 rounded-md hover:opacity-95"
            >
              Add to Cart
            </button>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className=" fa-regular fa-heart text-headerColor text-lg font-medium"></i>
            </div>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className="fa-regular fa-credit-card text-headerColor text-lg "></i>
            </div>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className="fa-solid fa-eye text-headerColor text-lg font-medium"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
