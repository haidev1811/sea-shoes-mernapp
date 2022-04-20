import React from "react";

interface Prop {
  path: string;
  label: string;
}

const Title = (props: Prop) => {
  return (
    <div className="container-ct">
      <p className="h2-home">
        <a href={props.path} className="link">
          {props.label}
        </a>
      </p>
    </div>
  );
};

export default Title;
