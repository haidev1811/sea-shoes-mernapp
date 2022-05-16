import React from "react";
import { renderRoutes } from "react-router-config";
import { Sidebar } from "../../../components";

const OrderAdminPage = ({ route }: any) => {
  return (
    <div className="list-admin">
      <Sidebar />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default OrderAdminPage;
