import React from "react";

const Platinum = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-20 px-5 lg:px-10">
        <div className="border-2 border-[#71737A] lg:pl-20 pt-14 pb-5 rounded-t-md ">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="space-y-5 lg:pr-20">
              <h1 className="text-[32px] font-bold">Silver</h1>
              <p>US $ 5,000</p>
              <button className="bg-[#C4D9DF] px-3 py-2 rounded-full">
                (1) Available
              </button>
            </div>
            <div className="lg:border-l-2 border-black flex items-center mt-5 lg:mt-0 py-5">
              <p className="lg:pl-5 text-center lg:text-left lg:text-[20px]">
                Unlock Exclusive Platinum Sponsor Privileges: Showcase your
                brand at prime booth <br /> locations, interact in style with a
                dedicated Hospitality Suite, and feature a speaker <br /> for
                product endorsement. Enjoy free admissions, live acknowledgment,
                and <br />
                unparalleled visibility across all event materials.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="text-[#234C81] font-semibold bg-[#FBCE3A] px-5 py-4 rounded-full">
              SEND AN INQUIRY
            </button>
          </div>
        </div>
        <div className=" border-x-2 border-b-2 border-[#71737A] rounded-b-md pb-5 mb-20">
          <h1 className="text-[24px] text-[#234C81] p-6 lg:pl-10 pt-5">
            Sponsorship Entitlements
          </h1>
          <ul className="space-y-10 px-10 leading-loose ">
            <li>
              &#x2022; One booth space allocation along the hallway leading to
              Main Convention Hall for the duration of the succeeding 2 days of
              the conference (July 5 to 6, 2024)
            </li>
            <li>
              &#x2022; 3-minute airtime for promotional activity to be conducted
              on stage during the morning or afternoon coffee break
              <br />
              Note: Choice of airtime slot will be on a “first come, first
              served basis”.
            </li>
            <li>
              &#x2022; Free admission for one (1) conference participants (local
              or foreign) in all scientific sessions, social programs and
              banquet meals for the duration of the 3-day conference
            </li>

            <li>
              &#x2022; Free admission for two (2) conference participants to the
              Gala Dinner
            </li>

            <li>
              &#x2022; Live acknowledgment as Silver Sponsor during morning and
              afternoon coffee breaks and lunch break for the duration of the
              3-day conference
            </li>

            <li>
              &#x2022; Prominent positioning of the sponsor’s company logo in
              all event collaterals (website, social media, print invitations
              and posters, participants’ IDs, souvenir packet, souvenir program,
              photo walls located in different areas of the convention)
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F2F1E9] flex flex-col lg:flex-row justify-center lg:space-x-10 items-center pb-20">
        <div className="mt-20 lg:mt-40 ">
          <h1 className="font-bold text-2xl lg:text-[34px] leading-10 text-[#234C81]">
            Contact us for Sponsorship / <br /> Exhibition opportunities
          </h1>
          <div className="flex space-x-3 mt-20">
            <img src={"/assets/images/mailimage.png"} alt="" />
            <p>osaps2024@gmail.com</p>
          </div>
          <div className="flex space-x-3 mt-10">
            <img src={"/assets/images/phoneImage.png"} alt="" />
            <p>+632-84561238</p>
          </div>
        </div>

        {/* Form */}
        <form className=" w-fit lg:w-[710px] p-5 ml-5 mr-5 bg-white mt-20 rounded-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Enter text here"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter text here"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-[60%] px-3 mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-first-name"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Enter text here"
              />
            </div>
            <div className="w-full md:w-[40%] px-3">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-last-name"
              >
                Mobile number
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter text here"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-first-name"
              >
                Organization
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Enter text here"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-last-name"
              >
                Designation
              </label>
              <select
                id="countries"
                className=" border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded  focus:outline-none block w-full p-2.5   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              >
                <option selected>Select from lists</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700  font-bold mb-2"
                // for="grid-first-name"
              >
                Sponsorship Type
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Inquiry for Platinum Sponsorship"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                // for="message"
                className="block  tracking-wide text-gray-700  font-bold mb-2"
              >
                Type your Message here
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end space-x-5">
            <button>CANCEL</button>
            <button className="bg-[#E2E2E3] px-4 py-3 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Platinum;
