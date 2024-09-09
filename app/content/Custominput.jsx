import React from "react";

function Custominput(props) {
  const { label, placeholder, ...rest } = props;
  return (
    <div>
      <div className="grid gap-4">
        <label className="font-bold">{label} </label>
        <input {...rest} placeholder={placeholder} className="p-3 rounded-lg" />
      </div>
    </div>
  );
}

export default Custominput;
