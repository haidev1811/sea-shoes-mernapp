import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routerUser } from "./router/routerUser";
import { Footer, Header, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <Header />
      <Router>{renderRoutes(routerUser)}</Router>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
