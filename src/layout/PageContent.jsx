import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";

function PageContent({ loggedIn }) {
  return (
    <div>
      {loggedIn ? (
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
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/about-us">
            <AboutPage />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default PageContent;
