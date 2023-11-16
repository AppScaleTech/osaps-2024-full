import Image from "next/image";

export default function Home() {
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
          <h1 className="text-3xl lg:text-5xl text-[#234C81] font-bold text-center px-10 lg:pl-20">
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
          <h1 className="text-3xl lg:text-5xl text-[#234C81] font-bold text-center px-10">
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
              <h1 className="text-3xl lg:text-5xl">
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
                <button className="bg-[#FBCE3A] rounded-full px-4 py-2 text-[#234C81]">
                  REGISTER NOW
                </button>
                <button className="border border-[#FBCE3A] px-4 py-2 rounded-full text-[#FBCE3A]">
                  EXPLORE CEBU
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/home/img3.png"
                alt=""
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
