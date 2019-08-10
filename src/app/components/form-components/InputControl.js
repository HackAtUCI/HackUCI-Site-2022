import React from "react";

import Form from "react-bootstrap/Form";

export default function InputControl(props) {
  const { name, error, value, handleChange, type, placeholder } = props;

  return (
    <div>
      {handleChange ? (
        <div>
          <Form.Control
            name={name}
            className={"form-control" + (error ? " error" : "")}
            onChange={handleChange}
            placeholder={placeholder}
            value={value || ""}
            type={type}
          />
          <div>
            <p className="red">{error}</p>
          </div>
        </div>
      ) : (
        <Form.Control
          disabled
          name={name}
          className={"form-control"}
          value={value}
          type={type}
        />
      )}
    </div>
  );
}
