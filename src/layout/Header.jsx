import React, { useState } from "react";
import Logo from "../assets/logo-no-bg.png";
import { Link } from "react-router-dom/";
import { useSelector } from "react-redux";
import Avatar from "../components/Other/Avatar";
import slugify from "../utils/slugify";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const categories = useSelector((state) => state.productReducer.categories);
  const user = useSelector((state) => state.clientReducer.user);
  const cart = useSelector((state) => state.shoppingCartReducer.cart);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Slogan */}
      <div className="hidden lg:flex items-center bg-headerColor py-6 justify-evenly">
        <div className="flex items-center">
          {/* Phone */}
          <div className="flex items-center">
            <i className="fa fa-phone fa-sharp text-white lg:mr-2 mr-1 xl:text-[16px]  2xl:text-lg text-sm"></i>
            <p className="font-bold text-white tracking-widest font-montserrat text-xs 2xl:text-lg xl:text-[16px] ">
              (225) 555-0118
            </p>
          </div>
          {/* Email */}
          <div className="flex items-center ml-3 lg:ml-6">
            <i className="fa-regular fa-envelope text-white lg:mr-2 mr-1"></i>
            <p className="font-bold text-white tracking-widest font-montserrat text-xs 2xl:text-lg xl:text-[16px] ">
              michelle.rivera@example.com
            </p>
          </div>
        </div>
        {/* Discount */}
        <div>
          <p className="font-bold text-white tracking-widest font-montserrat text-xs xl:text-[16px] 2xl:text-lg">
            Follow Us and get a chance to win 80% off
          </p>
        </div>
        {/* Social */}
        <div className="mr-4 flex items-center justify-end">
          <p className="font-bold text-white tracking-widest font-montserrat text-xs mr-2 lg:mr-4 xl:text-[16px]   2xl:text-lg">
            Follow Us:
          </p>
          <i className="fa fa-brands fa-instagram text-white mr-2 lg:mr-4 xl:text-[16px]  2xl:text-lg text-sm"></i>
          <i className="fa fa-brands fa-youtube text-white mr-2 lg:mr-4 xl:text-[16px]  2xl:text-lg text-sm"></i>
          <i className="fa fa-brands fa-facebook text-white mr-2 lg:mr-4 xl:text-[16px]  2xl:text-lg text-sm"></i>
          <i className="fa fa-brands fa-twitter text-white mr-2 lg:mr-4 xl:text-[16px]  2xl:text-lg text-sm"></i>
        </div>
      </div>
      {/* Navbar */}
      <nav className="w-full z-20 top-18 start-0 flex md:inline items-center justify-center z-100">
        <div className="max-w-full flex flex-wrap items-center justify-between p-6 ml-0  xl:mx-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10" alt="Shoppit Logo" />
          </Link>
          {/* Cart */}
          <div className="flex lg:w-7/12 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex lg:mr-8 mr-0 w-full justify-end items-center text-black lg:text-primary tracking-widest">
              <div className="hidden lg:flex items-center lg:mr-6 mr-4">
                {user?.email ? (
                  <>
                    <Avatar />
                    <p className="font-bold">{user?.name}</p>
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-user mr-2"></i>
                    <Link to="/sign-in" className="font-bold ">
                      Login
                    </Link>
                    <p className="font-bold mx-1">/</p>
                    <Link to="/sign-up" className="font-bold">
                      Register
                    </Link>
                  </>
                )}
              </div>
              <i className="fa-solid fa-magnifying-glass mr-4 lg:mr-6"></i>
              <div
                onClick={() => setCartOpen(!cartOpen)}
                className=" lg:mr-6 flex items-center md:mr-4 relative "
              >
                <i className="fa fa-light fa-cart-shopping mr-2"></i>
                <p>{cart.length}</p>
                {cartOpen && (
                  <div className="text-center flex justify-center absolute top-6 z-[100] -right-20 w-80 md:right-4 lg:right-10 md:h-auto mt-2  lg:w-96 bg-white border rounded-md shadow-lg ">
                    <div className="py-2 ">
                      {cart?.length > 0 ? (
                        <div>
                          {cart?.map(({ product, count }) => {
                            const category = categories?.find(
                              (item) => item.id === product.category_id
                            );
                            return (
                              <>
                                <Link
                                  key={product?.id}
                                  onClick={() => setIsOpen(false)}
                                  to={{
                                    pathname: `/shop/kadin/${category?.title.toLowerCase()}/${
                                      category.id
                                    }/${slugify(product?.name)}/${product?.id}`,
                                    state: product?.gender,
                                  }}
                                  className="block py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                >
                                  <div>
                                    <div className="flex items-center px-4 ">
                                      <img
                                        src={product.images[0].url}
                                        alt={product.name}
                                        className="w-1/4 aspect-square object-cover border-2 rounded-md"
                                      />
                                      <div className="text-left flex flex-col ml-4 md:w-[55%]">
                                        <p className="text-headerColor font-semibold text-">
                                          {product?.name}
                                        </p>
                                        <div className="flex items-center justify-between ">
                                          <p className="text-sm mt-1 text-secondTextColor font-me">
                                            {product?.price}
                                          </p>
                                          <p className="text-sm mt-1 text-secondTextColor font-me">
                                            Amount: {count}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <div className="border-borderGray m-4 border-b-2 " />
                              </>
                            );
                          })}
                          <div className="flex items-center justify-between mx-4 gap-x-2 pb-3">
                            <Link
                              to="/cart"
                              className="w-36 h-10 rounded-md border-borderGray text-xs bg-lightGray text-headerColor font-bold flex items-center justify-center"
                            >
                              Sepete Git
                            </Link>
                            <button className="w-36 h-10 rounded-md text-white font-bold text-xs bg-success">
                              Siparişi Tamamla
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-headerColor py-4">
                          <p>Cart is empty...</p>
                          <Link to="/">
                            <p className="my-4 bg-primary text-white font-medium py-3 rounded-md">
                              Go Shopping
                            </p>
                          </Link>
                          <Link to="">
                            <p className="text-sm text-secondTextColor">
                              View Shopping Cart
                            </p>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="items-center hidden lg:flex">
                <i className="fa-regular fa-heart mr-2"></i>
                <p>4</p>
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* List */}
          <div className="w-full md:w-8/12 md:flex lg:w-4/12 md:order-1 ">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-4 xl:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-center">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded text-gray-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* Shop Dropdown */}
              <li className="z-20">
                <div className="block py-2 px-3 text-gray-900 rounded ">
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className=" text-gray-700 font-semibold bg-transparent inline-flex items-center"
                    >
                      <span>Shop</span>
                      <i className="fa-solid fa-chevron-down ml-2"></i>
                    </button>
                    {isOpen && (
                      <div className="text-left flex justify-between absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg">
                        <div className="py-2 px-8">
                          <p className="border-b mb">Kadın</p>
                          {categories?.map(
                            (category) =>
                              category.gender === "k" && (
                                <Link
                                  key={category.id}
                                  onClick={() => setIsOpen(false)}
                                  to={{
                                    pathname: `/shop/kadin/${category?.title?.toLowerCase()}/${
                                      category.id
                                    }`,
                                    state: category?.gender,
                                  }}
                                  className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {category.title}
                                </Link>
                              )
                          )}
                        </div>
                        <div className="py-2 px-8">
                          <p className="border-b ">Erkek</p>
                          {categories?.map(
                            (category) =>
                              category.gender === "e" && (
                                <Link
                                  onClick={() => setIsOpen(false)}
                                  key={category.id}
                                  to={{
                                    pathname: `/shop/erkek/${category.title.toLowerCase()}/${
                                      category.id
                                    }`,
                                    state: category?.gender,
                                  }}
                                  className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {category.title}
                                </Link>
                              )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              {/* About */}
              <li>
                <Link
                  to="/about-us"
                  className="block py-2 px-3 text-gray-900 rounded "
                >
                  About
                </Link>
              </li>
              {/* Blog */}
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded ">
                  Blog
                </a>
              </li>
              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded "
                >
                  Contact
                </Link>
              </li>
              {/* Team */}
              <li>
                <Link
                  to="/team"
                  className="block py-2 px-3 text-gray-900 rounded "
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
