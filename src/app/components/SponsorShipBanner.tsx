import React from "react";
import { Nunito_Sans } from "next/font/google";

const nonitosans = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

const SponsorShipBanner = () => {
  return (
    <div className={nonitosans.className}>
      <div className="bg-[#F2F1E9] ">
        <div className="max-w-7xl mx-auto bg-[#F2F1E9] px-10">
          <h1 className="text-3xl lg:text-5xl text-[#234C81] font-semibold pt-[80px] ">
            Sponsorship / Exhibition
          </h1>
          <p className="leading-loose my-10 text-justify">
            Pharmaceutical companies, corporations and other service firms are
            invited to promote their brand by obtaining a specially designed
            Platinum, Gold and Silver Partnership Package. PAPRAS will
            collaborate with corporate sponsors to customize distinctive
            sponsorship opportunities that are aimed to optimize each sponsor's
            specific marketing, sales and branding objectives.
          </p>
          <button className="bg-[#FBCE3A] px-5 py-4 rounded-full mb-[50px] font-semibold">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorShipBanner;
