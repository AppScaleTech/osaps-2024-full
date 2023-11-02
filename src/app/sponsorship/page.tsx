import React from "react";
import Banner from "../components/SponsorShipBanner";
import Link from "next/link";

const Sponsorship = () => {
  return (
    <div className="">
      <Banner />
      <div className="max-w-7xl mx-auto mt-20 px-10">
        <h2 className="text-2xl lg:text-[32px] text-[#234C81] font-semibold">
          Sponsorship / Exhibition Opportunities
        </h2>

        {/* Packages */}
        <div className="mt-10 grid grid-cols-1  lg:grid-cols-2 gap-5 mb-10">
          {/* card 1 */}
          <div className="text-center space-y-2 border-2 border-[#BCBDC0] rounded-md shadow-md px-5 py-5">
            <h2 className="text-2xl lg:text-[32px] font-semibold">Platinum Package</h2>
            <p>US $11,000</p>
            <p>inc. GST</p>
            <button className="bg-[#C4D9DF] px-3 py-2 rounded-full">
              (1) Available
            </button>
            <p>
              Elevate your visibility at OSAPS 2024 with our exclusive Platinum
              Partner package for lasting recognition and strong connections.
            </p>
            <Link href={"/sponsorship/platinum"} className="text-[#234C81]">
              <p className="mt-10 mb-5 font-semibold">More info</p>
            </Link>
          </div>
          {/* card 2 */}
          <div className="text-center space-y-2 border-2 border-[#BCBDC0] rounded-md shadow-md px-5 py-5">
            <h2 className="text-2xl lg:text-[32px] font-semibold">Gold Package</h2>
            <p>US $8,000</p>
            <p>inc. GST</p>
            <button className="bg-[#F6C4C7] px-3 py-2 rounded-full">
              Sold out
            </button>
            <p>
              Elevate your visibility at OSAPS 2024 with our exclusive Platinum
              Partner package for lasting recognition and strong connections.
            </p>
            <Link href={"/sponsorship/gold"} className="text-[#234C81]">
              <p className="mt-10 mb-5 font-semibold">More info</p>
            </Link>
          </div>

          {/* card 3 */}
          <div className="text-center space-y-2 border-2 border-[#BCBDC0] rounded-md shadow-md px-5 py-5">
            <h2 className="text-2xl lg:text-[32px] font-semibold">Silver Package</h2>
            <p>US $11,000</p>
            <p>inc. GST</p>
            <button className="bg-[#C4D9DF] px-3 py-2 rounded-full">
              (10) Available
            </button>
            <p>
              Elevate your visibility at OSAPS 2024 with our exclusive Platinum
              Partner package for lasting recognition and strong connections.
            </p>
            <Link href={"/sponsorship/silver"} className="text-[#234C81]">
              <p className="mt-10 mb-5 font-semibold">More info</p>
            </Link>
          </div>

          {/* card 4 */}
          <div className="text-center space-y-2 border-2 border-[#BCBDC0] rounded-md shadow-md px-5 py-5">
            <h2 className="text-2xl lg:text-[32px] font-semibold">Exhibition Package</h2>
            <p>US $11,000</p>
            <p>inc. GST</p>
            <button className="bg-[#C4D9DF] px-3 py-2 rounded-full">
              (10) Available
            </button>
            <p>
              Elevate your visibility at OSAPS 2024 with our exclusive Platinum
              Partner package for lasting recognition and strong connections.
            </p>
            <Link href={"/sponsorship/exhibitionhall"} className="text-[#234C81]">
              <p className="mt-10 mb-5 font-semibold">More info</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#C4D9DF] pb-20">
        <h1 className="text-2xl lg:text-[48px] text-center pt-20 font-semibold text-[#234C81]">
          Why sponsor or exhibit at OSAPS 2024?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-15 gap-y-5 max-w-7xl mx-auto mt-10">
          {/* first globe */}
          <div className="flex flex-col text-center px-10 w-full">
            <img
              className="h-[80px] object-contain"
              src="/assets/images/earth-outline.png"
              alt=""
            />
            <p className="font-semibold text-[20px]">
              Get unmatched exposure on our <br /> exhibition floor
            </p>
            <p className="">
              OSAPS 2024 anticipates over 400 attendees, with a majority <br />
              comprising influential decision-makers who play a vital role{" "}
              <br /> in recommending aesthetic products.
            </p>
          </div>
          {/* second globe */}
          <div className="flex flex-col text-center px-10">
            <img
              className="h-[80px] object-contain"
              src="/assets/images/earth-outline.png"
              alt=""
            />
            <p className="font-semibold text-[20px]">Make long-term contracts</p>
            <br />
            <p>
              Forge connections and collaborations with key industry <br />{" "}
              stakeholders, which can lead to business growth and <br />{" "}
              development.
            </p>
          </div>
        </div>
        {/* third globe */}
        <div className="flex flex-col text-center px-10 mt-5 lg:mt-10 max-w-3xl mx-auto">
          <img
            className="h-[80px] object-contain"
            src="/assets/images/earth-outline.png"
            alt=""
          />
          <p className="font-semibold text-[20px]">
            Get unmatched exposure on our exhibition floor
          </p>
          <p>
            Enhance your brand's reputation and position it as a leader in{" "}
            <br /> the field of aesthetic products and services, solidifying
            trust <br /> and credibility among potential customers and partners.
          </p>
        </div>
      </div>

      {/* sponsors */}

      <div className=" max-w-7xl mx-auto mt-20 mb-20">
        <h1 className="text-2xl lg:text-[48px] text-center text-[#234C81] font-semibold">Our Sponsors</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10">
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
            <img
              className="py-20"
              src="/assets/images/advisemedia.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
