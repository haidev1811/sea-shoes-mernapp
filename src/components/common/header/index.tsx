import React from "react";
import { useLocation } from "react-router-dom";
import BottomHeader from "./BottomHeader";
import Menu from "./Menu";
import TopHeader from "./TopHeader";

const Header = () => {
  const checkRoleAdmin = useLocation().pathname.includes("admin");

  return (
    <header className={`${checkRoleAdmin ? "d-none" : ""}`}>
      <TopHeader />
      <BottomHeader />
      <Menu />
    </header>
  );
};

export default Header;
