import React from "react";
import { IMGHomepageBG } from "../../assets/images";
import PageHeader from "../header/PageHeader";
import Button from "../buttons/Button";

function HomePage() {
  return (
    <>
      <div className="">
        <PageHeader />

        <div className="lg:p-20 p-10 mb-8">
          <div className="libre-baskerville-bold text-[#cdad7d] font-bold md:text-[70px] sm:text-[45px] text-[38px]">
            <h1>PHILIPPINES</h1>
            <h1>FUTURE</h1>
          </div>

          <div className="mb-8">
            <p className="md:text-2xl md:pt-0 pt-6 text-xl md:w-180">
              We envision our devices becoming essential tools that not only
              inform commuters but also contribute to the overall smart-city
              development of the region.
            </p>
          </div>

          <div className="mb-8">
            <Button className="md:px-10 px-5 lg:text-lg md:text-md text-xs">
              LEARN MORE
            </Button>
          </div>
        </div>
        {/*
            BACKGROUND HERE
        */}
        <div className="absolute top-0 bg-[rgba(6,5,54,0.7)] h-screen w-screen z-[-1]" />
        <div
          className={`absolute left-0 top-0 bg-cover bg-center w-screen h-screen z-[-2]`}
          style={{ backgroundImage: `url('${IMGHomepageBG}')` }}
        />
      </div>
    </>
  );
}

export default HomePage;
