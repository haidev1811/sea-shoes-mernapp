import React from "react";
import { renderRoutes } from "react-router-config";

const AdminPage = ({ route }: any) => {
  return <>{renderRoutes(route.routes)}</>;
};

export default AdminPage;
