import React from "react";
import "./input.css";

export function LightInput(props) {
  const {
    placeholder,
    defaultValue,
    type,
    inputType
  } = props;

  const handleInputChange = (e) => {
    props.onChange({
      type: inputType,
      value: e.target.value
    })
  }

  const handleKeyDown = (e) => {
    switch (e.keyCode || e.which) {
      case 13:
        e.preventDefault();

      // to be added...
    }
  }

  return (
    <div>
      <input
        className="search-field-light"
        placeholder={placeholder}
        type={type === "password" ? "password" : "text"}
        defaultValue={defaultValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}