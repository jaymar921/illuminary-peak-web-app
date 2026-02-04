import React from "react";

function Button({ children, className, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#cdad7d] w-fit p-4 text-[#222344] font-bold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
