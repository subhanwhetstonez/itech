import React from "react";

const CustomFormbutton = (props) => {
  const { buttonText } = props;
  return (
    <div>
      <button
        type="submit"
        className="bg-[#6953D3] hover:bg-[#7c63fc] m-auto py-3 px-6 rounded-lg text-white w-full"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CustomFormbutton;
