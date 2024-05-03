import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../utils/slugify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/actions/productActions";
import { setCart } from "../../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

function ProductCard({ product, imgClass, includesColor = true }) {
  const params = useParams();
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = params;
  const cart = useSelector((state) => state.shoppingCartReducer.cart);
  const handleSelect = () => {
    dispatch(getSingleProduct(product?.id));
  };

  const handleAddToCart = (product) => {
    console.log("first");
    const checked = true;
    const count = 1;
    const existingItemIndex = cart?.findIndex(
      (item) => item.product.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += 1;
      dispatch(
        setCart(
          updatedCart[existingItemIndex].product,
          updatedCart[existingItemIndex].count,
          updatedCart[existingItemIndex].checked
        )
      );
    } else {
      dispatch(setCart(product, count, checked));
    }
    toast.success("Added to cart successfully");
  };
  return (
    <>
      {product ? (
        <>
          <div
            onClick={handleSelect}
            className={`justify-center items-center md:mr-6 mt-10  shadow-sm bg-white pb-4 ${
              includesColor ? "text-center" : "text-left"
            }`}
          >
            <Link
              to={`/shop/${gender}/${categoryName}/${
                product?.category_id
              }/${slugify(product.name)}/${product?.id}`}
              key={product?.id}
            >
              <img
                src={product?.images[0].url}
                className={`${imgClass} m-auto sm:w-[480px] hover:scale-105 transition ease-in duration-300 md:w-[520px] lg:w-[360px] object-cover`}
              />

              <h5
                className={`font-bold leading-6 tracking-[0.1px]  text-headerColor mt-4 ${
                  !includesColor && "ml-6"
                }`}
              >
                {product?.name}
              </h5>
              <h5
                className={`font-bold leading-6 tracking-[0.2px]  text-secondTextColor mt-3 ${
                  !includesColor && "ml-6"
                }`}
              >
                Mağaza ID: {product?.store_id}
              </h5>

              {/* Price */}
              <div
                className={`flex items-center mt-3 ${
                  includesColor ? "justify-center" : "ml-6"
                }`}
              >
                <h5 className="font-bold leading-6 tracking-[0.1px]  text-secondary ">
                  {product?.price}₺
                </h5>
                <h5 className="font-medium leading-6 tracking-[0.1px]  text-muted ml-1">
                  ({product?.rating})
                </h5>
              </div>
              {/* Colors */}
              {includesColor && (
                <div className="flex items-center justify-center mt-3">
                  <div className="h-4 w-4 rounded-lg mr-2 bg-primary" />
                  <div className="h-4 w-4 rounded-lg mr-2 bg-secondary" />
                  <div className="h-4 w-4 rounded-lg mr-2 bg-alert" />
                  <div className="h-4 w-4 rounded-lg mr-2 bg-headerColor" />
                </div>
              )}
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-6 w-3/5 font-bold text-white text-sm leading-6 tracking-[0.2px] bg-primary py-3 px-5 rounded-md hover:opacity-95"
            >
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default ProductCard;
