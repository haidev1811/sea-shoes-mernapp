import React, { useState } from "react";

const InputForm = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className="form-item">
      <label htmlFor={inputProps.name}>{inputProps.label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default InputForm;
