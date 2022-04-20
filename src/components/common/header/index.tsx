import React from "react";
import useScript from "../../../hooks/useScript";
import BottomHeader from "./BottomHeader";
import Menu from "./Menu";
import TopHeader from "./TopHeader";

const Header = () => {
  useScript("./assets/js/header.js");

  return (
    <header>
      <TopHeader />
      <BottomHeader />
      <Menu />
    </header>
  );
};

export default Header;
