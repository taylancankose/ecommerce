import { Switch, Route } from "react-router-dom/";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/product/:id">
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
