import React from "react";
import "./input.css";

export function BlendedInput(props) {
  const {
    placeholder,
    defaultValue,
    type
  } = props;

  const handleInputChange = (e) => {
    console.log('input', e.target.value);
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
        className="search-field-blended"
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type === "password" ? "password" : "text"}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}