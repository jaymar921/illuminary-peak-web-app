import React from "react";
import Button from "../../buttons/Button";
import { IMGHarold } from "../../../assets/images";

function SectionGoals() {
  return (
    <div className="flex place-content-center">
      <div className="md:flex place-items-center md:gap-10 md:mx-10 max-w-220">
        <div className="md:w-[50%] w-[70%] md:pt-0 pt-10 md:hidden mb-8">
          <img className="" src={IMGHarold} />
        </div>
        <div className="md:w-[50%] w-[70%] text-[28px]">
          <h1 className="mb-4">WHAT IS OUR GOAL</h1>
          <p className="text-[16px] text-justify">
            Over the next five years, Illuminary Peak is committed to the
            continuous advancement of our technological infrastructure to better
            serve the evolving needs of the public. Our primary goal is to
            refine and enhance our mobile devices and software capabilities,
            ensuring that our tracking systems remain accurate, fast, and
            user-friendly. By investing in superior hardware and more efficient
            data processing, we aim to provide a seamless digital experience
            that stays ahead of modern industrial standards.
          </p>
          <div className="text-center pt-4">
            <Button className={"text-[12px]"}>GET IN TOUCH</Button>
          </div>
        </div>
        <div className="w-[50%] md:pt-0 pt-10 hidden md:block">
          <img className="" src={IMGHarold} />
        </div>
      </div>
    </div>
  );
}

export default SectionGoals;
