import { Switch, Route } from "react-router-dom/";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
