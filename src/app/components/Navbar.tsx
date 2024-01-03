import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#234C81] py-5 px-5 flex justify-between items-center">
        <Link href={'/'}>
        <Image
        src={"/assets/images/logo.png"}
        alt="logo"
        width={120}
        height={40}
      />
        </Link>
  
      <div>
        <ul className="lg:flex hidden text-white text-base space-x-10">
            <Link href={'/speakers'}>Speakers</Link>
            <li>Abstract</li>
            <Link href={'/sponsorship'}>Sponsors</Link>
            <Link href={'/explore-cebu'}>Explore Cebu</Link>
            <Link href={'/about'}>About</Link>
        </ul>
      </div>
      <button className="text-[#234C81] font-semibold bg-[#FBCE3A] px-5 py-4 rounded-full">Register</button>
    </nav>
  );
};

export default Navbar;
