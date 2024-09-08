import React from "react";

function Custominput(props) {
  const { label, placeholder } = props;
  return (
    <div>
      <label className="font-bold">{label} </label>
      <input {...props} placeholder={placeholder} className="p-3 rounded-lg" />
    </div>
  );
}

export default Custominput;
