import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const CustomLink = ({ label, to, activeOnlyWhenExact, props }: any) => {
  let match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

  return (
    <li className={`mlist__item ${match ? "mlist__item--select" : ""}`}>
      <Link to={to} className="link">
        {label}
      </Link>
      {props}
    </li>
  );
};

export default CustomLink;
