import React from "react";
import { Sidebar, Navbar, DataTable } from "../../components";

const ListPage = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default ListPage;
