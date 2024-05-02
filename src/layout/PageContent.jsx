import { Switch, Route, Redirect } from "react-router-dom/";
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
import OrderHistory from "../pages/OrderHistory";
import ErrorPage from "../pages/ErrorPage";

function PageContent() {
  const token = JSON.stringify(localStorage.getItem("credentials"));
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
          {token ? <CheckoutPage /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/order-history" exact>
          {token ? <OrderHistory /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
