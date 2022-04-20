import React from "react";
import { Breadcrumbs, Contact, EmailHome } from "../components";

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs label="Liên hệ" category="" />
      <Contact />
      <EmailHome />
    </>
  );
};

export default ContactPage;
