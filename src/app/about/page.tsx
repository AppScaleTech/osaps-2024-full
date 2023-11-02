import React from "react";

const About = () => {
  const commitees = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="bg-[#F2F1E9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-evenly">
          <div className="flex  flex-col justify-center px-10 mt-20 lg:mt-0">
            <h1 className="text-3xl mb-5 lg:mb-5 lg:text-[48px] text-[#234C81] font-bold text-center lg:text-left">
              Harmony in Diversity
            </h1>
            <p className="leading-loose text-justify">
              The Oriental Society of Aesthetic Plastic Surgery (OSAPS) is
              dedicated to advancing the concept of Oriental beauty, offering
              ongoing high-quality education to plastic surgeons regarding the
              latest procedures and ethical patient care. This year's 18th
              international congress, held in collaboration with the Philippine
              Association of Plastic and Reconstructive and Aesthetic Surgeons
              (PAPRAS) during their 11th National Meeting, serves as a valuable
              platform for the global exchange of knowledge in aesthetic
              surgery. The discussions revolve around how Oriental beauty is
              shaping the international standard in aesthetic plastic surgery,
              encapsulated by the theme "Harmony in Diversity."
            </p>
          </div>

          <img
            className="w-[562px] mx-auto object-contain px-5 my-20 "
            src="/assets/images/faceImage.png"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 mt-10">
        <h1 className="text-2xl lg:text-[48px] font-bold text-[#234C81] text-center leading-normal">
          “OSAPS 2024, where innovation meets excellence, we promise a
          transformative experience in the world of aesthetic surgery.”
        </h1>
        <h3 className="text-xl lg:text-[34px] text-[#234C81] text-center">
          -Dr. Monica Lin
        </h3>
        <img className="py-5 pb-20" src="/assets/images/vidpic.png" alt="" />
      </div>

      {/* Commitees */}
      <div className="bg-[#C4D9DF]">
        <h1 className="text-center text-3xl lg:text-[48px] text-[#234C81] font-bold py-20">Meet the organizing Committee</h1>
        <div className="flex pb-10">
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-3 gap-20 gap-x-28">
            {commitees.map((item) => (
              <div key={item}>
                <div className="w-full flex flex-col justify-center text-center">
                  <img
                    className="w-[140px] object-contain mx-auto"
                    src="/assets/images/commiteepic.png"
                    alt=""
                  />
                  <p className="font-bold">Dr. Nyla Tobias</p>
                  <p>Clinical Care Specialist, <br /> Bio Med Science Inc.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
