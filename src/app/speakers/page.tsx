"use client";
import React, { useState } from "react";
import SpeakerModal from "../components/SpeakerModal";

interface SpeakerModalState {
  [key: number]: boolean;
}

const Speakers = () => {
  const [activeButton, setActiveButton] = useState("Day 1: July 4, 2024");

  // const [showSpeakerModal, setShowSpeakerModal] = useState(false);
  const [speakerModals, setSpeakerModals] = useState<SpeakerModalState>({});

  const toggleModal = (speakerId: any) => {
    setSpeakerModals((prevModals) => ({
      ...prevModals,
      [speakerId]: !prevModals[speakerId],
    }));
  };

  const speakers = [
    {
      id: 1,
      name: "Dr. Nikita Ysabelle Tobias",
      profileImage: "/assets/images/speakers/profileimage1.png",
      location: "Hawaii Aesthetic Clinic",
      position: "President - Stark Medical Hospital",
      bio: "Dr. Nikita Ysabelle Tobias is a distinguished aesthetic surgeon, renowned for her exceptional artistry and precision in cosmetic procedures. With a deep commitment to enhancing the natural beauty of her patients, Dr. Tobias combines the latest techniques and a keen eye for detail to achieve stunning, yet subtle, transformations. With a wealth of experience and a dedication to patient care, she is a trusted name in the field of aesthetic surgery, empowering individuals to look and feel their best. Dr. Tobias's unwavering passion for her craft and her patients makes her a sought-after professional for those seeking personalized and transformative cosmetic experiences.",
      contributions: [
        {
          id: 1,
          date: "Day 2: July 5, 2024",
          time: "10:15 AM - 11:00 AM",
          title:
            "Unlocking Innovations: The Future of Non-Invasive Aesthetic Procedures.",
          content:
            " Embark on a journey into the cutting-edge developments in non-invasive aesthetics.",
        },
        {
          id: 2,
          date: "Day 3: July 6, 2024",
          time: "10:15 AM - 11:00 AM",
          title:
            "Unlocking Innovations: The Future of Non-Invasive Aesthetic Procedures.",
          content:
            "Embark on a journey into the cutting-edge developments in non-invasive aesthetics.",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Bruce Wayne",
      profileImage: "/assets/images/speakers/profileimage.png",
      location: "Hawaii Aesthetic Clinic",
      position: "",
      bio: "",
      contributions: [
        {
          id: 1,
          date: "Day 2: July 5, 2024",
          time: "10:15 AM - 11:00 AM",
          title:
            "Unlocking Innovations: The Future of Non-Invasive Aesthetic Procedures.",
          content:
            " Embark on a journey into the cutting-edge developments in non-invasive aesthetics.",
        },
        {
          id: 2,
          date: "Day 3: July 6, 2024",
          time: "10:15 AM - 11:00 AM",
          title:
            "Unlocking Innovations: The Future of Non-Invasive Aesthetic Procedures.",
          content:
            "Embark on a journey into the cutting-edge developments in non-invasive aesthetics.",
        },
      ],
    },
    {
      id: 3,
      name: "Dr. Bruce Wayne",
      profileImage: "/assets/images/speakers/profileimage.png",
      location: "Hawaii Aesthetic Clinic",
      position: "",
      bio: "",
      contributions: [
        {
          id: 1,
          date: "Day 2: July 5, 2024",
          time: "10:15 AM - 11:00 AM",
          title:
            "Unlocking Innovations: The Future of Non-Invasive Aesthetic Procedures.",
          content:
            " Embark on a journey into the cutting-edge developments in non-invasive aesthetics.",
        },
        {
          id: 2,
          date: "Day 3: July 6, 2024",
          time: "10:15 AM - 11:00 AM",
          title:
            "Unlocking Innovations: The Future of Non-Invasive Aesthetic Procedures.",
          content:
            "Embark on a journey into the cutting-edge developments in non-invasive aesthetics.",
        },
      ],
    },
    // {
    //   id: 4,
    //   name: "Dr. Nikita Ysabelle Tobias",
    //   profileImage: "/assets/images/speakers/profileimage.png",
    //   location: "Hawaii Aesthetic Clinic",
    //   position: "",
    //   bio: "Dr. Nikita Ysabelle Tobias is a distinguished aesthetic surgeon, renowned for her exceptional artistry and precision in cosmetic procedures. With a deep commitment to enhancing the natural beauty of her patients, Dr. Tobias combines the latest techniques and a keen eye for detail to achieve stunning, yet subtle, transformations. With a wealth of experience and a dedication to patient care, she is a trusted name in the field of aesthetic surgery, empowering individuals to look and feel their best. Dr. Tobias's unwavering passion for her craft and her patients makes her a sought-after professional for those seeking personalized and transformative cosmetic experiences.",
    // },
  ];

  const buttons = [
    "Day 1: July 4, 2024",
    "Day 2: July 5, 2024",
    "Day 3: July 6, 2024",
  ];
  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="bg-[#F2F1E9] ">
        <div className="max-w-7xl mx-auto bg-[#F2F1E9] px-10">
          <h1 className="text-3xl lg:text-5xl text-[#234C81] font-semibold pt-[80px] ">
            Program & Featured Speakers
          </h1>
          <p className="leading-loose my-10 text-justify">
            Across the diverse spectrum of OSAPS 2024 programs and themes, our
            Featured Speakers empower attendees with insights, leadership, and
            inspiration to navigate the evolving landscape of aesthetic surgery.
          </p>
          <button className="bg-[#FBCE3A] px-5 py-4 rounded-full mb-[50px] font-semibold">
            REGISTER NOW
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 mb-10">
        <div>
          <div className="flex justify-center space-x-5 px-5 lg:px-0">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={
                  activeButton === button
                    ? "bg-[#234C81] px-3 py-2 rounded-full text-white text-xs lg:text-base"
                    : "border px-3 py-2 rounded-full border-[#234C81] text-xs lg:text-base"
                }
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        {activeButton === "Day 1: July 4, 2024" && (
          <>
            <div className="px-5 max-w-7xl  mt-10 border border-[#BCBDC0] rounded-lg mx-5">
              <div className="flex flex-col lg:flex-row space-x-10 py-5">
                <h3 className="text-[24px] flex-[.3] font-bold  py-5 lg:py-0 pl-10 lg:pl-0">
                  8:00 AM - 10:00 AM
                </h3>
                <div className="flex-[1]">
                  <button className="px-4 py-3 bg-[#C4D9DF] rounded-full">
                    Session 1
                  </button>
                  <h3 className="text-[24px] font-bold mt-5">
                    Fillers, toxins, lasers, fat grafting etc
                  </h3>
                  <p className="leading-loose">
                    This Session delves into the transformative potential of
                    fillers, toxins, lasers, and grafting techniques, exploring
                    how these advanced cosmetic procedures can rejuvenate and
                    enhance one's natural beauty. Discover the latest
                    advancements in aesthetic medicine and gain insights into
                    achieving radiant, youthful skin and a refreshed appearance
                    through these innovative approaches.
                  </p>
                  <div className="mt-10">
                    <h3 className="text-[20px] font-bold">Speaker/s:</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {speakers.map((speaker) => (
                        <div
                          key={speaker.id}
                          className="flex  items-center mt-5"
                        >
                          <img
                            className="object-contain h-[106px]"
                            src={speaker.profileImage}
                            alt=""
                          />
                          <div className="space-y-2 ml-5">
                            <p>{speaker.name}</p>
                            <p>{speaker.location}</p>
                            <button
                              onClick={() => toggleModal(speaker.id)}
                              className="border-2 border-[#234C81] text-[#234C81] font-semibold rounded-full px-4 py-2"
                            >
                              VIEW SPEAKER'S BIO
                            </button>
                          </div>
                          {speakerModals[speaker.id] && (
                            <SpeakerModal
                              speaker={speaker}
                              isVisible={speakerModals[speaker.id]}
                              onClose={() => toggleModal(speaker.id)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-[20px] font-bold">Moderator</h3>
                    <div className="flex space-x-5 items-center mt-5">
                      <img
                        src="/assets/images/speakers/profileimage.png"
                        alt=""
                      />
                      <div className="space-y-2">
                        <p>Dr. Bruce Wayne</p>
                        <p>Hawaii Aesthetic Clinic</p>
                        <button className="border-2 border-[#234C81] text-[#234C81] font-semibold rounded-full px-4 py-2">
                          VIEW SPEAKER'S BIO
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 max-w-7xl  mt-10 border border-[#BCBDC0] rounded-lg mx-5">
              <div className="flex flex-col lg:flex-row space-x-10 py-5">
                <h3 className="text-[24px] flex-[.3] font-bold py-5 lg:py-0 pl-10 lg:pl-0">
                  10:15 AM - 11:00 AM
                </h3>
                <div className="flex-[1]">
                  <button className="px-4 py-3 bg-[#C2BEE8] rounded-full">
                    Keynote
                  </button>
                  <h3 className="text-[24px] font-bold mt-5">
                    Unlocking Innovations: The Future of Non-Invasive Aesthetic
                    Procedures.
                  </h3>
                  <p className="leading-loose">
                    Embark on a journey into the cutting-edge developments in
                    non-invasive aesthetics.
                  </p>
                  <div className="mt-10">
                    <h3 className="text-[20px] font-bold">Speaker/s:</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="flex space-x-5 items-center mt-5">
                        <img
                          src="/assets/images/speakers/profileimage.png"
                          alt=""
                        />
                        <div className="space-y-2">
                          <p>Dr. Bruce Wayne</p>
                          <p>Hawaii Aesthetic Clinic</p>
                          <button className="border-2 border-[#234C81] text-[#234C81] font-semibold rounded-full px-4 py-2">
                            VIEW SPEAKER'S BIO
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 max-w-7xl  mt-10 border border-[#BCBDC0] rounded-lg mx-5">
              <div className="flex flex-col lg:flex-row space-x-10 py-5">
                <h3 className=" text-[24px] flex-[.3] font-bold  py-5 lg:py-0 pl-10 lg:pl-0">
                  11:30 AM - 01:30 PM
                </h3>
                <div className="flex-[1]">
                  <button className="px-4 py-3 bg-[#F6C4C7] rounded-full">
                    Lunch Lecture
                  </button>
                  <h3 className="text-[24px] font-bold mt-5">
                    Unlocking Innovations: The Future of Non-Invasive Aesthetic
                    Procedures.
                  </h3>
                  <p className="leading-loose">
                    Embark on a journey into the cutting-edge developments in
                    non-invasive aesthetics.
                  </p>
                  <div className="mt-10">
                    <h3 className="text-[20px] font-bold">Speaker/s:</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="flex space-x-5 items-center mt-5">
                        <img
                          src="/assets/images/speakers/profileimage.png"
                          alt=""
                        />
                        <div className="space-y-2">
                          <p>Dr. Bruce Wayne</p>
                          <p>Hawaii Aesthetic Clinic</p>
                          <button className="border-2 border-[#234C81] text-sm text-[#234C81] font-semibold rounded-full px-4 py-2">
                            VIEW SPEAKER'S BIO
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <h3 className="text-[20px] font-bold">Sponsored by:</h3>
                      <img src="/assets/images/advisemedia.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 max-w-7xl  mt-10 border border-[#BCBDC0] rounded-lg mx-5">
              <div className="flex flex-col lg:flex-row space-x-10 py-5">
                <h3 className="text-[24px] flex-[.3] font-bold  py-5 lg:py-0 pl-10 lg:pl-0">
                  02:00 PM - 03:00 PM
                </h3>
                <div className="flex-[1]">
                  <button className="px-4 py-3 bg-[#C4D9DF] rounded-full">
                    Session 2
                  </button>
                  <h3 className="text-[24px] font-bold mt-5">
                    Fillers, toxins, lasers, fat grafting etc
                  </h3>
                  <p className="leading-loose">
                    This Session delves into the transformative potential of
                    fillers, toxins, lasers, and grafting techniques, exploring
                    how these advanced cosmetic procedures can rejuvenate and
                    enhance one's natural beauty. Discover the latest
                    advancements in aesthetic medicine and gain insights into
                    achieving radiant, youthful skin and a refreshed appearance
                    through these innovative approaches.
                  </p>
                  <div className="mt-10">
                    <h3 className="text-[20px] font-bold">Speaker/s:</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {speakers.map((speaker) => (
                        <div className="flex space-x-5 items-center mt-5">
                          <img
                            src="/assets/images/speakers/profileimage.png"
                            alt=""
                          />
                          <div className="space-y-2">
                            <p>{speaker.name}</p>
                            <p>{speaker.location}</p>
                            <button className="border-2 border-[#234C81] text-[#234C81] font-semibold rounded-full px-4 py-2">
                              VIEW SPEAKER'S BIO
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-[20px] font-bold">Moderator</h3>
                    <div className="flex space-x-5 items-center mt-5">
                      <img
                        src="/assets/images/speakers/profileimage.png"
                        alt=""
                      />
                      <div className="space-y-2">
                        <p>Dr. Bruce Wayne</p>
                        <p>Hawaii Aesthetic Clinic</p>
                        <button className="border-2 border-[#234C81] text-[#234C81] font-semibold rounded-full px-4 py-2">
                          VIEW SPEAKER'S BIO
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeButton === "Day 3: July 6, 2024" && (
          <>
            <div className="text-[#234C81] text-center mt-20 space-y-3 ">
              <h1 className="text-center text-3xl lg:text-5xl font-bold ">
                Coming Soon
              </h1>
              <h2 className="text-[34px]">
                Get ready for an illuminating experience! We're hard at work on
                our program and speakers, and they're just around the corner.
              </h2>
            </div>
          </>
        )}

        {activeButton === "Day 2: July 5, 2024" && (
          <>
            <div className="text-[#234C81] text-center mt-20 space-y-3 ">
              <h1 className="text-center text-3xl lg:text-5xl font-bold ">
                Coming Soon
              </h1>
              <h2 className="text-[34px]">
                Get ready for an illuminating experience! We're hard at work on
                our program and speakers, and they're just around the corner.
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Speakers;
