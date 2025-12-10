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
import { Link } from "react-router-dom";

const VerifyMail = () => {
  return (
    <div className="min-h-screen ">
      {/**navbar */}
      <nav className="flex justify-between items-center pl-4 pr-4">
        {/**upwork logo */}
        <Link to="/">
          <img src={upworkLogo} alt="upworkLogo" className="w-24" />
        </Link>
        {/*profile*/}
        <Link to="/dashboard">
          <CgProfile className="w-8 h-8" />
        </Link>
      </nav>
      {/**main section */}
      <main>
        <div className="flex flex-col justify-center items-center ">
          <div className="relative">
            <div className="">
              <img src={email} alt="email" />
            </div>
            <div className="absolute -top-1 -right-2 w-8 h-8 bg-pink-400 rounded-full"></div>
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
      <footer className="bg-gray-950 text-white mt-10 ">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <p className="text-gray-300 hover:text-white cursor-pointer">
                About Us
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Feedback
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Trust, Safety & Security
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Help & Support
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Upwork Foundation
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Terms of Service
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                CA Notice at Collection
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Cookie Settings
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Community
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Desktop App
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Cookie Policy
              </p>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Enterprise Policy
              </p>
            </div>
          </div>

          {/* Social and Mobile icons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow Us</span>
              <div className="flex gap-3">
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-200 cursor-pointer transition">
                  <FaFacebookF className="w-4 h-4 text-black" />
                </div>
                <div className="bg-white rounded w-6 h-6 flex items-center justify-center hover:bg-gray-200 cursor-pointer transition">
                  <FaLinkedinIn className="w-4 h-4 text-black" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center hover:text-gray-300 cursor-pointer transition">
                  <FaXTwitter className="w-5 h-5 text-white" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center hover:text-gray-300 cursor-pointer transition">
                  <FaYoutube className="w-5 h-5 text-white" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center hover:text-gray-300 cursor-pointer transition">
                  <FiInstagram className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400">Mobile app</span>
              <div className="flex gap-3">
                <div className="w-8 h-8 flex items-center justify-center hover:text-gray-300 cursor-pointer transition">
                  <FaApple className="w-5 h-5 text-white" />
                </div>
                <div className="w-8 h-8 flex items-center justify-center hover:text-gray-300 cursor-pointer transition">
                  <TbRobot className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-400 text-sm mt-8">
            @2015-2025 Upwork@ Global Inc.
          </p>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-neutral-800 w-full flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-md flex justify-center items-center w-8 h-8 shadow-sm">
            <FaUpwork className="text-black" />
          </div>
          <span className="font-semibold text-white">Upwork</span>
        </div>

        <div className="text-white text-sm">
          curated by <span className="font-bold text-2xl ">Mobbin</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
