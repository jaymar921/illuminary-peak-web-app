import React from "react";
import { IMGlogoTransparent } from "../../assets/images";

function PageHeader() {
  return (
    <>
      <div className="w-screen h-37.5 flex place-items-center">
        <div className="flex place-items-center md:ml-12 ml-6">
          <img className="sm:h-32 m-0 h-20" src={IMGlogoTransparent} />
          <h1 className="absolute md:ml-27 ml-18 libre-baskerville md:w-55 w-45 md:text-lg text-sm">
            ILLUMINARY PEAK, INC.
          </h1>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
