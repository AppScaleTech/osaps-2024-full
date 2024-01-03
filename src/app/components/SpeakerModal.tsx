"use client";
import React from "react";

const SpeakerModal = ({ isVisible, onClose, speaker }: any) => {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[1034px] px-5 flex flex-col relative">
        {/* <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
        >
          X
        </button> */}

        <svg
          onClick={() => onClose()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-7 h-7 absolute right-14 top-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="bg-white h-[80vh]  rounded  overflow-auto flex flex-col justify-between">
          <div className="pt-20 px-10">
            <div className="flex items-center">
              <img className="mr-10" src={speaker.profileImage} alt="" />
              <div>
                <h1 className="text-5xl text-[#234C81] font-bold">
                  {speaker.name}
                </h1>
                <h1 className="text-4xl text-[#234C81] font-bold">
                  {speaker.position}
                </h1>
              </div>
            </div>
            <div className="mt-5">
              <p className="leading-loose">{speaker.bio}</p>
            </div>
            <p className="font-bold text-[20px] mt-5">
              Explore this speaker's contributions in additional discussions:
            </p>

            {speaker.contributions.map((item: any) => (
              <div key={item.id} className="p-5 border border-[#BCBDC0] mt-5">
                <p>{item.date}</p>
                <p className="font-bold">{item.time}</p>
                <p className="mt-5 font-bold">{item.title}</p>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          {/* <div className="p-3">
            <button
              onClick={() => onClose()}
              className="bg-[#EF4029] text-white py-3 w-full rounded-lg"
            >
              Confirm
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
