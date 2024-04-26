import { useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="">
      {loggedIn && <Header />}
      <PageContent loggedIn={loggedIn} />
      {loggedIn && <Footer />}
    </div>
  );
}

export default App;
