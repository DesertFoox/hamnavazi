import React from "react";
import { Input } from "reactstrap";

const Inputs = ({ classname, type, name, placeholder,onChange }) => {
  return (
    <>
      <Input
        className={classname}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Inputs;
