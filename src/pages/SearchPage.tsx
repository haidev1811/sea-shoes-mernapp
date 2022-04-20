import React from "react";
import { Breadcrumbs, EmailHome, Search } from "../components";

const SearchPage = () => {
  return (
    <>
      <Breadcrumbs label="Tìm kiếm" category="" />
      <Search />
      <EmailHome />
    </>
  );
};

export default SearchPage;
