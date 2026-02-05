import React from "react";
import { IMGHaroldProfile, IMGJayharronProfile } from "../../../assets/images";

function SectionFounders() {
  return (
    <div>
      <div className="flex place-content-center md:mb-10">
        <div className="place-items-center md:mx-10 max-w-500 text-justify">
          <div className="relative text-[#e8d1ae] md:w-[50%] w-[70%]">
            <div className="text-center">
              <h1 className="text-[28px] mb-4">About the Founders</h1>
            </div>
            <p className="p-2 text-[#cdad7d]">
              Illuminary Peak was founded by two brothers, visionary leaders in
              the industry: Jay Harold Abejar and JayHarron Abejar.
            </p>
            <p className="p-2">
              This dynamic team possesses a clear vision of success,
              transforming a startup into a formidable entity. Their youthful
              entrepreneurial mindset and unwavering passion for achievement
              drive the company's relentless pursuit of innovation, propelling
              its continued growth.
            </p>
          </div>
        </div>
      </div>
      <div className="flex place-content-center">
        <div className="md:w-[70%] max-w-200 w-[80%] md:flex gap-8 text-white font-bold">
          <div
            className="shadow-xl bg-[rgba(48,20,99,0.3)] hover:bg-[rgba(48,20,99,0.5)] rounded-xl  md:w-1/2 md:my-0 my-4 w-full p-8 text-center cursor-pointer"
            onClick={() => {
              location.href = "https://jayharoldabejar.vercel.app/";
            }}
          >
            <div className="rounded-xl md:w-42 overflow-hidden m-auto mb-8">
              <img className="w-full" src={IMGHaroldProfile} />
            </div>
            <h1 className="italic mb-4">
              “Your imagination is the best vision to success.”
            </h1>
            <p className="text-[#cdad7d] libre-baskerville-bold">
              Jay Harold Mars Abejar <br /> FOUNDER/CEO
            </p>
          </div>

          <div
            className="shadow-xl bg-[rgba(48,20,99,0.3)] hover:bg-[rgba(48,20,99,0.5)] rounded-xl  md:w-1/2 md:my-0 my-4 w-full p-8 text-center cursor-pointer"
            onClick={() => {
              location.href = "https://jayharronabejar.vercel.app";
            }}
          >
            <div className="rounded-xl md:w-42 overflow-hidden m-auto mb-8">
              <img src={IMGJayharronProfile} />
            </div>
            <h1 className="italic mb-4">
              “Years don't define expertise. but the skill does.“
            </h1>
            <p className="text-[#cdad7d] libre-baskerville-bold">
              Jayharron Mar Abejar <br /> CO-FOUNDER/COO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFounders;
