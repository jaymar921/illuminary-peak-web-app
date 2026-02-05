import React from "react";
import Section from "../section/Section";
import SectionGoals from "../section/contents/SectionGoals";
import SectionPartners from "../section/contents/SectionPartners";
import SectionFounders from "../section/contents/SectionFounders";
import SectionMissionVision from "../section/contents/SectionMissionVision";

function AboutPage() {
  return (
    <>
      <div className="top-0">
        <Section
          className={`libre-baskerville text-[#263768] bg-[#F2E4CC] md:py-40 py-25`}
        >
          <SectionGoals />
        </Section>

        <Section
          className={`libre-baskerville text-[#263768] bg-[#F2E4CC] md:py-40 py-25`}
        >
          <SectionMissionVision />
        </Section>

        <Section
          className={`libre-baskerville text-[#263768] bg-[#263768] md:pb-40 py-25`}
        >
          <SectionPartners />
        </Section>

        <Section
          className={`libre-baskerville text-[#263768] bg-[#391973] md:py-40 py-25`}
        >
          <SectionFounders />
        </Section>
      </div>
    </>
  );
}

export default AboutPage;
