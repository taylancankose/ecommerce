import { ToastContainer } from "react-toastify";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Header />
        <PageContent />
        <Footer />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
