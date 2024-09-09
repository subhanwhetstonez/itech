import React from "react";

function Custominput(props) {
  const { label, placeholder, ...rest } = props;
  return (
    <div>
      <label className="font-bold">{label} </label>
      <input placeholder={placeholder} className="p-3 rounded-lg" {...rest} />
    </div>
  );
}

export default Custominput;
