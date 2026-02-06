import React from "react";
import NotFoundPage from "./NotFoundPage";
import Section from "../section/Section";
import Logo from "../header/Logo";

function ContactPage() {
  return (
    <div>
      <Section className="libre-baskerville text-[#263768] bg-[#F4F1EC] md:py-40 pt-37 pb-10">
        <div className="px-10 text-left max-w-220 m-auto mb-4">
          <h1 className="text-[28px]">Contact us</h1>
        </div>
        <div className="px-10 text-left max-w-220 m-auto mb-4">
          <div className="flex place-items-center gap-4 py-1">
            <i className="fa-solid fa-location-dot text-2xl"></i>
            <p className="max-w-100 text-justify">
              At present, as we do not have an office, we work independently
              from our homes.
            </p>
          </div>
          <div className="flex place-items-center gap-4 py-1">
            <i className="fa-solid fa-phone text-2xl"></i>
            <p className="max-w-100">(+63) 927-386-5959</p>
          </div>
          <div className="flex place-items-center gap-4 py-2">
            <i className="fa-solid fa-envelope text-2xl"></i>
            <p className="max-w-100">illuminarypeak@gmail.com</p>
          </div>
        </div>

        <div className="px-10 text-left max-w-220 m-auto mb-4 pt-10">
          <h1 className="text-[28px]">Office Hours</h1>
        </div>
        <div className="px-10 text-left max-w-220 m-auto mb-4">
          <div className="py-1">
            <h4 className="text-[#886839] font-bold">Monday to Friday</h4>
            <p>9:00 am to 10:00 pm</p>
          </div>
          <div className="py-1">
            <h4 className="text-[#886839] font-bold">Saturday</h4>
            <p>9:00 am to 9:00 pm</p>
          </div>
          <div className="py-1">
            <h4 className="text-[#886839] font-bold">Sunday</h4>
            <p>Closed</p>
          </div>
        </div>

        <div className="px-10 text-left max-w-220 m-auto mb-4 pt-10">
          <h1 className="text-[28px]">Follow us online</h1>
        </div>
        <div className="px-10 text-left max-w-220 m-auto mb-4 md:flex">
          <div className="flex place-items-center gap-4 py-2">
            <i className="fa-brands fa-facebook text-2xl"></i>
            <p className="max-w-250 text-justify">
              This is an accessible workplace. Persons with disabilities are
              welcome to apply.{" "}
            </p>
          </div>
          <div className="flex md:place-items-end place-items-center w-full">
            <Logo />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ContactPage;
