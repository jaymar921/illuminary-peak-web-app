import React from "react";
import { IMGlogoTransparent } from "../../assets/images";

function Logo() {
  return (
    <div
      className="flex place-items-center w-fit"
      onClick={() => (location.href = "/")}
    >
      <img className="sm:h-32 m-0 h-20" src={IMGlogoTransparent} />
      <h1 className="relative libre-baskerville w-65 md:text-lg text-sm">
        ILLUMINARY PEAK, INC.
      </h1>
    </div>
  );
}

export default Logo;
