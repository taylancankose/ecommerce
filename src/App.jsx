import { Switch, Route } from "react-router-dom/";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
