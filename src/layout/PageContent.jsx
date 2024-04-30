import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId" exact>
          <ShopPage />
        </Route>
        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          exact
        >
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/cart/checkout/:id">
          <CheckoutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
