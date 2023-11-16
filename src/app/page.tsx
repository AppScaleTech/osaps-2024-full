"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showDetailsQ1, setShowDetailsQ1] = useState(false);
  const [showDetailsQ2, setShowDetailsQ2] = useState(false);
  const [showDetailsQ3, setShowDetailsQ3] = useState(false);
  const [showDetailsQ4, setShowDetailsQ4] = useState(false);

  const toggleDetailsQ1 = () => {
    setShowDetailsQ1(!showDetailsQ1);
  };
  const toggleDetailsQ2 = () => {
    setShowDetailsQ2(!showDetailsQ2);
  };
  const toggleDetailsQ3 = () => {
    setShowDetailsQ3(!showDetailsQ3);
  };
  const toggleDetailsQ4 = () => {
    setShowDetailsQ4(!showDetailsQ4);
  };

  const commitees = [1, 2, 3, 4, 5, 6];

  return (
    <main>
      <div className="bg-[#C4D9DF]">
        <div className="relative h-[650px] max-w-7xl mx-auto bg-[#C4D9DF] lg:bg-[url('/assets/images/home/bannerimage.png')] bg-no-repeat bg-cover px-10">
          <div className="pt-20 flex justify-center lg:justify-normal px-10">
            <img src="/assets/images/home/harmony.png" alt="" />
          </div>
          <div className="flex flex-col mt-20 lg:mt-0 lg:absolute top-[350px] ml-0 lg:ml-20 ">
            <h3 className="text-center text-[22px] text-[#234C81] font-bold">
              July 4-6, 2024{" "}
            </h3>
            <h3 className="text-center text-[22px] text-[#234C81] font-bold">
              Shangri-la Mactan, Cebu , Philippines
            </h3>
            <h3 className="text-center text-[20px] text-[#234C81] mt-14 ">
              Early bird rate ends on 12/31/2023
            </h3>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 my-20 gap-y-10">
        <div>
          <h1 className="text-2xl lg:text-5xl text-[#234C81] font-bold text-center px-10 lg:pl-20">
            Be part of the global exchange of knowledge shaping oriental beauty
            in the world of aesthetics!
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center text-lg lg:text-[24px] ">
          <div className="flex space-x-5 items-center ">
            <img src="/assets/images/home/img1.png" alt="" />
            <div className="leading-[1.2]">
              <p>18th International Congress</p>
              <p className="font-bold">
                Oriental Society of <br /> Aesthetic Plastic Surgeons
              </p>
            </div>
          </div>
          <div className="flex space-x-5 items-center text-lg lg:text-[24px] mt-14">
            <img
              className="-mx-[22px]"
              src="/assets/images/home/img2.png"
              alt=""
            />
            <div className="leading-[1.2]">
              <p>18th International Congress</p>
              <p className="font-bold">
                Oriental Society of <br /> Aesthetic Plastic Surgeons
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F1E9]">
        <div className="max-w-7xl mx-auto py-20">
          <h1 className="text-2xl lg:text-5xl text-[#234C81] font-bold text-center px-10">
            Gain insights from global aesthetic experts
          </h1>
          <div className="max-w-5xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-3 gap-20 mt-20 ">
            {commitees.map((item) => (
              <div key={item}>
                <div className="w-full flex flex-col justify-center text-center">
                  <img
                    className="w-[140px] object-contain mx-auto"
                    src="/assets/images/commiteepic.png"
                    alt=""
                  />
                  <p className="font-bold">Dr. Nyla Tobias</p>
                  <p>
                    Clinical Care Specialist, <br /> Bio Med Science Inc.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/images/home/bgimg1.png')] bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center lg:text-start">
              <h1 className="text-2xl lg:text-5xl">
                INDULGE YOURSELF IN A LUXURIOUS LEARNING
              </h1>
              <p className="mt-5">
                Experience the epitome of luxurious learning at OSAPS 2024 Cebu,
                hosted in the stunning Shangri-La Mactan Cebu. This prestigious
                event offers attendees an upscale and comfortable educational
                experience. Immerse yourself in a setting where knowledge and
                opulence converge, making OSAPS 2024 an unforgettable journey
                into the world of aesthetic surgery.
              </p>
              <div className="flex flex-col lg:flex-row my-10 space-y-2 lg:space-y-0 lg:space-x-2">
                <Link href={'/register'}>
                <button className="bg-[#FBCE3A] rounded-full px-4 py-2 text-[#234C81]">
                  REGISTER NOW
                </button>
                </Link>
                <Link href={'/explore-cebu'}>
                <button className="border border-[#FBCE3A] px-4 py-2 rounded-full text-[#FBCE3A]">
                  EXPLORE CEBU
                </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/assets/images/home/img3.png"
                alt=""
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-center text-2xl lg:text-5xl font-bold text-[#234C81]">
          Why you should attend Harmony in Diversity?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 mt-20">
          <div className="flex flex-col justify-center items-center">
            <img
              className="object-contain"
              src="/assets/images/earth-outline.png"
              alt=""
            />
            <p className="text-center">
              <span className="font-bold">Gain a global perspective</span> on
              the evolving landscape of <br /> aesthetic plastic surgery.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="object-contain"
              src="/assets/images/bulbicon.png"
              alt=""
            />
            <p className="text-center">
              <span className="font-bold">Learn and network</span> with
              globally-renowned leaders in the <br /> field of aesthetic surgery
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="object-contain"
              src="/assets/images/staricon.png"
              alt=""
            />
            <p className="text-center">
              <span className="font-bold">Uncover cutting-edge knowledge </span>
              and emerging trends to <br /> keep you at the forefront of the
              ever-evolving field of <br /> aesthetic surgery.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="object-contain"
              src="/assets/images/peopleicon.png"
              alt=""
            />
            <p className="text-center">
              <span className="font-bold">
                Connect with fellow professionals{" "}
              </span>{" "}
              who share <br /> your goals and aspirations in the field of <br />{" "}
              aesthetic surgery.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#FBCE3A] rounded-full px-4 py-2 text-[#234C81]">
            REGISTER NOW
          </button>
        </div>
      </div>

      <div className="bg-[#F2F1E9] relative">
        <div className="max-w-7xl mx-auto py-20 px-5">
          <div className="m-20 mx-auto py-10 px-10 bg-white lg:w-[680px] rounded-md shadow-lg border border-gray-300">
            <h1 className="text-center text-2xl lg:text-5xl text-[#234C81] font-bold">
              Sponsors & Exhibitors
            </h1>
            <p className="mt-10 text-center leading-10">
              OSAPS 2024 in Cebu is open for Sponsorship and Exhibitors. Send us
              an inquiry for further details about sponsorship and exhibition
              package.
            </p>
            <div className="flex justify-center mt-5">
              <Link href={'/sponsorship'}>
              <button className="bg-[#FBCE3A] rounded-full px-4 py-2 text-[#234C81]">
                LEARN MORE
              </button>
              </Link>
            </div>
          </div>
          <img
            className="absolute bottom-0 left-0 hidden lg:block"
            src="/assets/images/home/leftleaf.png"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 hidden lg:block"
            src="/assets/images/home/rightleaf.png"
            alt=""
          />
        </div>
      </div>

      {/* sponsors */}

      <div className=" max-w-7xl mx-auto mt-20 mb-20">
        <h1 className="text-2xl lg:text-5xl text-center text-[#234C81] font-semibold">
          Our Sponsors
        </h1>
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

      <div className="bg-[#C4D9DF]">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-2xl lg:text-5xl text-center text-[#234C81] font-semibold">
            Frequently Asked Questions
          </h1>

          <div className="mt-10 px-5">
            <div
              className="flex justify-between bg-white px-5 py-3 font-bold cursor-pointer"
              onClick={toggleDetailsQ1}
            >
              <p>When and where is the OSAPS 2024 going to be held?</p>
              {showDetailsQ1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </div>
            {showDetailsQ1 && (
              <p className="bg-white px-5 py-3 mt-1">
                OSAPS 2024 will happen on July 4-6, 2024 at Shangri-la, Mactan
                Cebu Philippines. For more information about how to get there
                and accommodations, click here
              </p>
            )}

            <div
              className="flex justify-between bg-white px-5 py-3 font-bold cursor-pointer mt-3"
              onClick={toggleDetailsQ2}
            >
              <p>How much is the registration and How do I pay?</p>
              {showDetailsQ2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </div>
            {showDetailsQ2 && (
              <p className="bg-white px-5 py-3 mt-1">
                OSAPS 2024 will happen on July 4-6, 2024 at Shangri-la, Mactan
                Cebu Philippines. For more information about how to get there
                and accommodations, click here
              </p>
            )}

            <div
              className="flex justify-between bg-white px-5 py-3 font-bold cursor-pointer mt-3"
              onClick={toggleDetailsQ3}
            >
              <p>If I want to cancel my attendance, can I make a refund?</p>
              {showDetailsQ3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </div>
            {showDetailsQ3 && (
              <p className="bg-white px-5 py-3 mt-1">
                OSAPS 2024 will happen on July 4-6, 2024 at Shangri-la, Mactan
                Cebu Philippines. For more information about how to get there
                and accommodations, click here
              </p>
            )}

            <div
              className="flex justify-between bg-white px-5 py-3 font-bold cursor-pointer mt-3"
              onClick={toggleDetailsQ4}
            >
              <p>How do I become a sponsor?</p>
              {showDetailsQ4 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </div>
            {showDetailsQ4 && (
              <p className="bg-white px-5 py-3 mt-1">
                OSAPS 2024 will happen on July 4-6, 2024 at Shangri-la, Mactan
                Cebu Philippines. For more information about how to get there
                and accommodations, click here
              </p>
            )}
          </div>
          <div className="flex justify-center mt-14">
              <button className="bg-[#FBCE3A] rounded-full px-4 py-2 text-[#234C81]">
              VIEW MORE FAQ
              </button>
            </div>
        </div>
      </div>
    </main>
  );
}
