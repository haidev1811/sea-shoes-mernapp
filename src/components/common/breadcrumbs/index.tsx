import React from "react";

interface Prop {
  label: any;
  category: any;
}

const Breadcrumbs = (prop: Prop) => {
  return (
    <div className="breadcrumbs">
      <div className="container-ct">
        <div className="row-ct">
          <h3 className="text-center">{prop.label}</h3>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            {prop.category !== "" && (
              <>
                <li>/</li>
                <li>
                  <span className="cat-label">{prop.category}</span>
                </li>
              </>
            )}
            <li>/</li>
            <li>
              <span>{prop.label}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
