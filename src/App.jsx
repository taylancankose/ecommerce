import { ToastContainer } from "react-toastify";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import "react-toastify/dist/ReactToastify.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import { verifyToken } from "./fetch/verifyToken";
import { setUser } from "./store/actions/clientActions";
import { getCategories } from "./store/actions/productActions";

function App() {
  const token = JSON.parse(localStorage.getItem("credentials"));
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      verifyToken()
        .then((res) => {
          if (res.name) {
            dispatch(setUser(res));
            localStorage.setItem("credentials", JSON.stringify(res.token));
          }
        })
        .catch((err) => {
          localStorage.removeItem("credentials");
          console.error("Token verification failed:", err);
        });
    }
  }, []);
  useEffect(() => {
    dispatch(getCategories());
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
