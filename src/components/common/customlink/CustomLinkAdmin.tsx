import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const CustomLink = ({ label, to, activeOnlyWhenExact }: any) => {
  let match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

  return (
    <li className={`${match ? "active" : ""}`}>
      <Link to={to} className="link w-100">
        {label}
      </Link>
    </li>
  );
};

export default CustomLink;
