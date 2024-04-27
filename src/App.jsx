import { ToastContainer } from "react-toastify";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
