import React from "react";
import { renderRoutes } from "react-router-config";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmode/darkModeContext";

const AdminPage = ({ route }: any) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default AdminPage;
