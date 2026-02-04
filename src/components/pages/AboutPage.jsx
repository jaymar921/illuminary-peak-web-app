import React from "react";
import Section from "../section/Section";
import { STYLE } from "../../configurations/constant";
import {
  IMGHarold,
  IMGHaroldProfile,
  IMGJayharronProfile,
  IMGMartinPhoto,
} from "../../assets/images";
import Button from "../buttons/Button";

function AboutPage() {
  return (
    <>
      <div className="top-0">
        <Section
          className={`libre-baskerville text-[#263768] bg-[#F2E4CC] md:py-40 py-25`}
        >
          <div className="flex place-content-center">
            <div className="md:flex place-items-center md:gap-10 md:mx-10 max-w-220">
              <div className="md:w-[50%] w-[70%] md:pt-0 pt-10 md:hidden mb-4">
                <img className="" src={IMGHarold} />
              </div>
              <div className="md:w-[50%] w-[70%] text-[28px]">
                <h1>WHAT IS OUR GOAL</h1>
                <p className="text-[16px] text-justify">
                  Over the next five years, Illuminary Peak is committed to the
                  continuous advancement of our technological infrastructure to
                  better serve the evolving needs of the public. Our primary
                  goal is to refine and enhance our mobile devices and software
                  capabilities, ensuring that our tracking systems remain
                  accurate, fast, and user-friendly. By investing in superior
                  hardware and more efficient data processing, we aim to provide
                  a seamless digital experience that stays ahead of modern
                  industrial standards.
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
        </Section>
        <Section
          className={`libre-baskerville text-[#263768] bg-[#391973] md:py-40 py-25`}
        >
          <div className="flex place-content-center md:mb-10">
            <div className="place-items-center md:mx-10 max-w-500 text-justify">
              <div className="relative text-[#e8d1ae] md:w-[50%] w-[70%]">
                <div className="text-center">
                  <h1 className="text-[28px] mb-4">About the Founders</h1>
                </div>
                <p className="p-2 text-[#cdad7d]">
                  Illuminary Peak was founded by two brothers, visionary leaders
                  in the industry: Jay Harold Abejar and JayHarron Abejar.
                </p>
                <p className="p-2">
                  This dynamic team possesses a clear vision of success,
                  transforming a startup into a formidable entity. Their
                  youthful entrepreneurial mindset and unwavering passion for
                  achievement drive the company's relentless pursuit of
                  innovation, propelling its continued growth.
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
                  “Years don't define expertise. but the kill does.“
                </h1>
                <p className="text-[#cdad7d] libre-baskerville-bold">
                  Jayharron Mar Abejar <br /> CO-FOUNDER/COO
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section
          className={`libre-baskerville text-[#263768] bg-[#263768] md:pb-40 py-25`}
        >
          <div className="flex place-content-center md:mb-10">
            <div className="place-items-center md:mx-10 max-w-500 text-justify">
              <div className="text-center">
                <h1 className="text-[28px] mb-4 text-[#cdad7d]">
                  Partners and Investors
                </h1>
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
                  - Martin Poa 投资者 (INVESTOR)
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default AboutPage;
