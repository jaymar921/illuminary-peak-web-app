import React from "react";
import NotFoundPage from "./NotFoundPage";
import Section from "../section/Section";
import Button from "../buttons/Button";
import {
  IMGlogoTransparent,
  IMGMobileAppPhotoProject,
} from "../../assets/images";

function ProjectPage() {
  return (
    <div>
      <Section
        className={`libre-baskerville text-black bg-[#F2E4CC] md:py-40 py-50`}
      >
        <div className="px-10 text-left max-w-220 m-auto mb-4">
          <h1 className="text-[28px]">Projects</h1>
        </div>
        <div className="md:flex place-items-center md:gap-10 m-auto md:px-10 max-w-220">
          <div className="md:w-[50%] w-[70%] pb-6 rounded-2xl bg-[rgba(205,191,167,0.1)] shadow-md">
            <div className="md:flex p-4">
              <div className="flex place-items-center w-auto mr-4 ml-2">
                <div className="md:block hidden w-12 h-12 m-auto border border-[rgba(205,191,167,0.1)] shadow-sm rounded-md">
                  <img src={IMGlogoTransparent} />
                </div>
              </div>
              <div className="text-center w-full">
                <h1 className="text-2xl">Wander Philippines</h1>
                <p>Software Service</p>
              </div>
              <div className="flex place-items-center w-auto mr-4 ml-2">
                <div className="md:hidden block w-12 h-12 m-auto border mt-4 border-[rgba(205,191,167,0.1)] shadow-sm rounded-md">
                  <img src={IMGlogoTransparent} />
                </div>
              </div>
            </div>

            <p className="px-10 py-2 text-justify w-full text-[#886839] md:text-sm text-xs">
              Wander Philippines is a mobile-first solution designed to
              transform the daily commute experience. By providing real-time bus
              tracking, the app empowers commuters with accurate arrival times,
              route visibility, and live updates, eliminating uncertainty, and
              wasted time at bus stops. Currently operating in Cebu.
            </p>
            <div className="flex place-items-center w-full mt-2">
              <div className="md:w-1/3 w-2/3 m-auto">
                <img
                  className="md:rounded-[25px] rounded-[27px]"
                  src={IMGMobileAppPhotoProject}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ProjectPage;
