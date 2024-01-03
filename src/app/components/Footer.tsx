import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#234C81]">
      <div className="max-w-5xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between">
          <img className="h-[47px] object-contain" src="/assets/images/logo.png" alt="" />
          <div className="space-x-5 mx-auto mt-5 lg:mt-0 lg:mx-0">
            <input className="lg:w-[382px] w-auto h-[43px] rounded-md px-3" type="text" placeholder="Enter your e-mail to subscribe to our Mailing list"/>
            <button className="bg-[#FBCE3A] px-3 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center space-y-2 lg:space-y-0 lg:justify-between flex-wrap-reverse ">
          <p className="text-white mt-3 lg:mt-0 text-sm lg:text-base">OSAPS 2024 Cebu. All rights reserved.</p>
          <div>
            <ul className="flex text-white space-x-5 lg:space-x-10 text-sm lg:text-base">
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
