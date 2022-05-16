import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import { renderRoutes } from "react-router-config";
import { routerUser } from "./router/routerUser";
import { routerAdmin } from "./router/routerAdmin";
import { routerStaff } from "./router/routerStaff";
import { Footer, Header, ScrollToTop } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { authState } from "./redux/reducers/auth/auth.reducer";

function App() {
  const auth = useSelector<RootState, authState>((state) => state.authLogin);
  const { authInfo } = auth;

  return (
    <>
      <ReactNotifications />
      <Router>
        {authInfo?.user?.role[0] === "admin" ? (
          <>
            <Header />
            {renderRoutes(routerAdmin)}
            <Footer />
            <ScrollToTop />
          </>
        ) : authInfo?.user?.role[0] === "staff" ? (
          <>
            <Header />
            {renderRoutes(routerStaff)}
            <Footer />
            <ScrollToTop />
          </>
        ) : (
          <>
            <Header />
            {renderRoutes(routerUser)}
            <Footer />
            <ScrollToTop />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
