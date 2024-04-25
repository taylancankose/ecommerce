import { Switch, Route } from "react-router-dom/";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
