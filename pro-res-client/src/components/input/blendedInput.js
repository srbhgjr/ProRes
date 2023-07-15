import React from "react";
import "./input.css";

export function BlendedInput(props) {
  const {
    placeholder,
    defaultValue,
    type,
    inputType,
    classVariant,
    styles,
    value
  } = props;

  const handleInputChange = (e) => {
    props.onChange({
      type: inputType,
      value: e.target.value
    })
  }

  const handleKeyDown = () => {
    const handleKeyDown = (e) => {
      switch (e.keyCode || e.which) {
        case 13:
          e.preventDefault();
  
          // to be added...
      }
    }
  }

  return (
    <div>
      <input
        className={classVariant}
        style={{...styles}}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type === "password" ? "password" : "text"}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}