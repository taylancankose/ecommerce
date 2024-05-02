import { getCategories, getProducts } from "./store/actions/productActions";
import { setUser } from "./store/actions/clientActions";
import { verifyToken } from "./fetch/verifyToken";
import { ToastContainer } from "react-toastify";
import PageContent from "./layout/PageContent";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useEffect } from "react";
import {
  getAddresses,
  getOrderHistory,
} from "./store/actions/shoppingCartActions";

function App() {
  const user = useSelector((state) => state.clientReducer.user);
  console.log(user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.token) {
      verifyToken()
        .then((res) => {
          if (res?.name) {
            dispatch(setUser(res));
            localStorage.setItem("credentials", JSON.stringify(res?.token));
          }
        })
        .catch((err) => {
          localStorage.removeItem("credentials");
          console.error("Token verification failed:", err);
        });
      if (!user?.name) localStorage.removeItem("credentials");
    }
  }, []);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getOrderHistory());
    dispatch(getAddresses());
  }, []);

  return (
    <div className="">
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
