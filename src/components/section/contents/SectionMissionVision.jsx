import React from "react";

function SectionMissionVision() {
  return (
    <div>
      <h1 className="text-center text-[28px] pb-10">VISION & MISSION</h1>
      <div className="flex place-content-center">
        <div className="md:flex place-items-center md:mx-10 max-w-220">
          <div className="md:w-[50%] w-[70%] bg-[#e8d1ae] p-6">
            <h3 className="text-2xl mb-4">Vision</h3>
            <div className="md:h-80 h-40 md:block flex place-items-center">
              <p className="md:text-[16px] text-sm text-justify">
                Our mission is to fill the void between the complexity of
                engineering and its application, ensuring that the technological
                revolution becomes the bridge behind global prosperity.
              </p>
            </div>
          </div>
          <div className="md:w-[50%] w-[70%] bg-[#dbbf94] p-6">
            <h3 className="text-2xl mb-4">Mission</h3>
            <div className="md:h-80 h-50 md:block flex place-items-center">
              <p className="md:text-[16px] text-sm text-justify">
                We extend an invitation to all investors from diverse
                backgrounds to join us on this journey, as we firmly believe
                that our path is poised to unlock immense opportunities and
                long-term value for our stakeholders.
              </p>
            </div>
          </div>
          <div className="md:w-[50%] w-[70%] bg-[#cdad7d] p-6">
            <h3 className="text-2xl mb-4">Values</h3>
            <div className="md:h-80 h-60 md:block flex place-items-center">
              <p className="md:text-[16px] text-sm text-justify">
                At the heart of our business, Illuminary Peak is dedicated to
                the seamless setting. We are committed to a future where
                technology is no longer an distraction to the work-field, but an
                integral part of it, multiplying productivity and strengthening
                the resilience of the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionMissionVision;
