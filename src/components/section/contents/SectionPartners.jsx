import React from "react";
import { IMGMartinPhoto } from "../../../assets/images";

function SectionPartners() {
  return (
    <div>
      <div className="flex place-content-center md:mb-10">
        <div className="place-items-center md:mx-10 max-w-500 text-justify">
          <div className="text-center md:w-[50%] w-[70%]">
            <h1 className="text-[28px] mb-4 text-[#cdad7d]">
              Partners and Investors
            </h1>
            <p className="p-2 text-[#cdad7d]  text-justify">
              At Illuminary Peak Inc., we recognize that our journey would not
              be possible without the unwavering support of our partners and
              investors. Your trust and commitment have transformed a vision
              into reality, and for that, we extend our deepest gratitude.
              Together, we are not only building a company, but also shaping a
              dream into lasting impact. Thank you for believing in us and for
              making this milestone achievable.
            </p>
          </div>
        </div>
      </div>
      <div className="flex place-content-center">
        <div className="md:w-[70%] max-w-200 w-[80%] md:flex gap-8 text-white font-bold">
          <div className="shadow-xl bg-[rgba(48,20,99,0.3)] hover:bg-[rgba(48,20,99,0.5)] rounded-xl m-auto md:w-1/2 md:my-0 my-4 w-full p-8 text-center">
            <div className="rounded-xl md:w-42 w-full overflow-hidden m-auto mb-8 bg-cover">
              <img className="w-full" src={IMGMartinPhoto} />
            </div>
            <h1 className="italic mb-4">1st Singaporean Investor</h1>
            <p className="text-[#cdad7d] libre-baskerville-bold">
              - Martin Poa <br /> 投资者 (INVESTOR)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPartners;
