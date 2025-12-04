import React from "react";
import { CgProfile } from "react-icons/cg";
import email from "../assets/email.png";
import upworkLogo from "../assets/upworkLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import { FaUpwork } from "react-icons/fa6";

const VerifyMail = () => {
  return (
    <div className="min-h-screen">
      {/**navbar */}
      <nav className="flex justify-between items-center pl-4 pr-4">
        {/**upwork logo */}
        <div>
          <img src={upworkLogo} alt="upworkLogo" className="w-24" />
        </div>
        {/*profile*/}
        <div>
          <CgProfile className="w-8 h-8" />
        </div>
      </nav>
      {/**main section */}
      <main>
        <div className="flex flex-col justify-center items-center ">
          <div className="">
            <img src={email} alt="email" />
          </div>
          <p className="mt-4 text-3xl text-black font-bold">
            Verify your email to continue
          </p>
          <p className="mt-4 text-center text-gray-500">
            We sent an email to address:jsmith.mobbin@gmail.com
            <br /> Please check your inbox and click on the link to verify your
            email address.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="border border-green-800 px-6 py-2 rounded-md text-green-800 font-bold cursor-pointer">
              Send again
            </button>
            <button className="border bg-green-800 border-green-700 px-6 py-2 rounded-md text-white cursor-pointer">
              Go to Gmail inbox
            </button>
          </div>
          <span className="text-green-800 underline mt-8 cursor-pointer">
            Didnt receive email?
          </span>
        </div>
      </main>
      {/*footer*/}
      <footer className="mt-10 p-10 ">
        <div className="bg-black text-white w-full py-10 rounded-md">
          <div className="flex justify-evenly p-5 gap-6 text-sm text-gray-300">
            <div className="flex flex-col gap-3 text-gray-200">
              <p>About Us</p>
              <p>Feedback</p>
              <p>Trust, Safety & Security</p>
            </div>

            <div className=" flex flex-col gap-3 cursor-pointer">
              <p>Help & Support</p>
              <p>Upwork Foundation</p>
              <p>Terms of Service</p>
            </div>

            <div className="flex flex-col gap-3 cursor-pointer">
              <p>Privacy Policy</p>
              <p>CA Notice at Collection</p>
              <p>Cookie Settings</p>
            </div>

            <div className="flex flex-col gap-3 cursor-pointer">
              <p>Community</p>
              <p>Desktop App</p>
              <p>Cookie Policy</p>
              <p>Enterprise Policy</p>
            </div>
          </div>
          <div className="flex justify-between p-4 mt-10">
            <div className="flex gap-4 ">
              <p className="text-gray-400">Follow Us</p>
              <div className="flex gap-4 bg-white rounded-full items-center w-6 h-6 justify-center">
                <FaFacebookF className="w-4 h-4 text-black " />
              </div>
              <div className="flex gap-4 bg-white rounded-md items-center w-6 h-6 justify-center">
                <FaLinkedinIn className="w-4 h-4 text-black " />
              </div>
              <div className="flex gap-4  items-center w-6 h-6 justify-center">
                <FaXTwitter className="w-4 h-4 text-white " />
              </div>
              <div className="flex gap-4   items-center w-6 h-6 justify-center">
                <FaYoutube className="w-4 h-4 text-white " />
              </div>
              <div className="flex gap-4   items-center w-6 h-6 justify-center">
                <FiInstagram className="w-4 h-4 text-white " />
              </div>
            </div>
            <div className="flex gap-4   ">
              <p className="text-gray-400">Mobile app</p>
              <div className="flex gap-4  rounded-md items-center w-6 h-6 justify-center">
                <FaApple className="w-4 h-4 text-white " />
              </div>
              <div className="flex gap-4  rounded-md items-center w-6 h-6 justify-center">
                <TbRobot className="w-4 h-4 text-white " />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-5">
            <div className="border-t border-gray-100 mt-5  "></div>
          </div>
          <p className="text-center mt-5 text-gray-200">
            @ 2015-2025 Upwork Global Inc
          </p>
        </div>
      </footer>
      <div className="bg-gray-600 w-full flex justify-between px-10 py-5 ">
        {/**upwork */}
        <div className="flex gap-2">
          <div className="bg-white rounded-md flex justify-center items-center w-8  h-7 ">
            <FaUpwork />
          </div>
          <p className="text-white">Upwork</p>
        </div>
        {/** */}
        <div>
          <p className="text-white ">
            curated by
            <span className="font-bold text-2xl"> Mobbin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
