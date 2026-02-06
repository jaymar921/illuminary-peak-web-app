import React, { useState } from "react";
import { IMGlogoTransparent } from "../../assets/images";

function PageHeader() {
  const [navStyle, setNavStyle] = useState({ top: -250 });

  const showNav = () => {
    setNavStyle({ top: navStyle.top !== 0 ? 0 : -250 });
  };

  const navigateTo = (link) => {
    location.href = link;
  };

  return (
    <>
      <div className="fixed w-screen h-30 flex place-items-center z-2 bg-[#0c0336]">
        <div
          className="flex place-items-center md:ml-12 ml-6"
          onClick={() => navigateTo("/")}
        >
          <img className="sm:h-32 m-0 h-20" src={IMGlogoTransparent} />
          <h1 className="relative lg:-left-30 md:-left-28 -left-20 md:ml-27 ml-18 libre-baskerville md:w-55 w-45 md:text-lg text-sm">
            ILLUMINARY PEAK, INC.
          </h1>
        </div>

        <div className="libre-baskerville right-0 m-auto mr-12 w-100 place-items-end">
          <ul className="hidden gap-4 md:flex">
            <li
              className="hover:underline hover:text-[#cdad7d] cursor-pointer"
              onClick={() => navigateTo("/about-us")}
            >
              ABOUT
            </li>
            <li
              className="hover:underline hover:text-[#cdad7d] cursor-pointer"
              onClick={() => navigateTo("/projects")}
            >
              PROJECTS
            </li>
            <li
              className="hover:underline hover:text-[#cdad7d] cursor-pointer"
              onClick={() => navigateTo("/contact-us")}
            >
              CONTACT
            </li>
          </ul>
          <div className="text-right md:hidden cursor-pointer">
            <i className="fa-solid fa-bars text-4xl" onClick={showNav}></i>
          </div>
        </div>
      </div>
      <div
        className={`fixed p-4 w-screen bg-[rgba(0,0,0,0.8)] transform transition-all delay-100 duration-500 z-2`}
        style={navStyle}
      >
        <ul className="py-2 text-xl libre-baskerville">
          <li
            className="py-4 hover:underline hover:text-[#cdad7d] cursor-pointer"
            onClick={() => navigateTo("/about-us")}
          >
            ABOUT
          </li>
          <li
            className="py-4 hover:underline hover:text-[#cdad7d] cursor-pointer"
            onClick={() => navigateTo("/projects")}
          >
            PROJECTS
          </li>
          <li
            className="py-4 hover:underline hover:text-[#cdad7d] cursor-pointer"
            onClick={() => navigateTo("/contact-us")}
          >
            CONTACT
          </li>
        </ul>
      </div>
      {navStyle.top === 0 && (
        <div
          className="fixed top-0 w-screen h-screen z-0"
          onClick={showNav}
        ></div>
      )}
    </>
  );
}

export default PageHeader;
