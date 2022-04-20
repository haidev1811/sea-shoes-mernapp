import React from "react";
import { Breadcrumbs, Cart, EmailHome } from "../components";

const CartPage = () => {
  return (
    <>
      <Breadcrumbs label="Giỏ hàng" category="" />
      <Cart />
      <EmailHome />
    </>
  );
};

export default CartPage;
