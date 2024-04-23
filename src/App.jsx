import { Switch, Route } from "react-router-dom/";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
