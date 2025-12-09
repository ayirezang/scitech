import React from "react";
import upworkLogo from "../assets/upworkLogo.png";
import googleLogo from "../assets/googleLogo.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { FaUpwork } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-white min-h-screen justify-center md:justify-between  flex flex-col">
      {/**navbar */}
      <nav className="px-4 md:px-8 py-3 md:py-4 ">
        <div className="flex flex-col   md:flex-row  justify-between items-center px-4 py-2 md:px-6 md:py-3">
          {/**upwork logo */}
          <div>
            <img src={upworkLogo} alt="upworkLogo" className=" w-24 md:w-24" />
          </div>
          {/**text */}
          <div className="text-center md:flex items-center gap-4">
            <p className="font-medium cursor-pointer">Here to hire a talent?</p>
            <Link to="/verify-mail" className="text-green-600  cursor-pointer">
              Join as a Client
            </Link>
          </div>
        </div>
      </nav>
      {/**main section */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-xl mx-auto">
          {/**header */}
          <div>
            <p className="text-center text-2xl md:text-3xl  lg:text-4xl  mb-4">
              Sign up to find work you love
            </p>
            {/**buttons */}
            {/**apple icon */}
            <div className="flex flex-col md:flex-row  gap-4">
              <button className="px-4 py-2 md:px-6 md:py-3 flex-1 border border-black flex items-center  justify-center gap-2 rounded-full cursor-pointer">
                <FaApple className=" w-5 h-5 md:w-6 md:h-6" />
                Continue with Apple
              </button>
              {/**google icon */}
              <button className="px-6 py-3 md:px-8 md:py-3 flex-1 relative rounded-full bg-blue-500 cursor-pointer">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-full  ">
                  <img
                    src={googleLogo}
                    alt="google"
                    className=" w-6 h-6 md:w-8  md:h-8  rounded-full"
                  />
                </div>
                <span className=" text-sm md:text-base  text-white ml-8">
                  Continue with Google
                </span>
              </button>
            </div>
            {/**or */}
            <div className="flex items-center gap-4 my-5 md:my-6">
              <div className="border-b border-gray-300 flex-1"></div>
              <p className=" ">or</p>
              <div className="border-b border-gray-300 flex-1 "></div>
            </div>
          </div>
          {/**form */}
          <form>
            <div className="flex gap-5 md:gap-5 ">
              {/**first name */}
              <div className="flex-1 ">
                <label
                  htmlFor="first name"
                  for="first name"
                  className="block mb-1"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first name"
                  id="first name"
                  className="border px-5 py-3 rounded-lg w-full outline-black  border-gray-600 hover:border-black"
                  placeholder="Leonard"
                />
              </div>
              {/**last name */}
              <div className="flex-1">
                <label htmlFor="first name" className="block mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="first name"
                  id="first name"
                  className="border px-5 py-3 rounded-lg w-full outline-black border-gray-600  text-black"
                  placeholder="Kim"
                />
              </div>
            </div>
            {/**email */}
            <div className="mt-4">
              <label for="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border px-5 py-3 rounded-lg w-full outline-black border-gray-600 text-black"
                placeholder="pat@gmail.com"
              />
            </div>
            <div className="mt-4">
              <label for="password" className="block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border px-5 py-3 rounded-lg w-full outline-black border-gray-600 text-black"
                  placeholder="********"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                  <FaEyeSlash />
                </div>
              </div>
            </div>
            {/**country */}
            <div className="mt-4">
              <label htmlFor="country" className="block mb-1">
                Country
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="border px-5 py-3 rounded-lg w-full outline-black border-gray-600"
                  placeholder="United States"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                  <IoChevronDown />
                </div>
              </div>
            </div>
            {/**checkbox 1 */}
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex items-start gap-1">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="w-6 h-6 text-green-600"
                />
                <label htmlFor="terms" className="ml-2 cursor-pointer">
                  Send me helpful emails to find rewarding work and job leads
                </label>
              </div>

              {/**checkbox 2 */}
              <div className="flex items-start gap-1">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms2"
                  className="w-6 h-6 text-green-600 flex shrink-0"
                />
                <label htmlFor="terms" className="ml-2 cursor-pointer">
                  Yes, I understand and agree to the{" "}
                  <span className="text-green-600 underline">
                    Upwork Terms of Service,
                  </span>{" "}
                  including the{" "}
                  <span className="text-green-600 underline">
                    User Agreement
                  </span>{" "}
                  and{" "}
                  <span className="text-green-600 underline">
                    Privacy Policy
                  </span>
                  .
                </label>
              </div>
            </div>

            {/**create account button */}
          </form>
        </div>
      </main>
      <footer className="p-5">
        <div className="mt-10 flex justify-center">
          <button className="bg-green-600 text-white w-full px-10 py-2  md:w-auto md:px-10 md:py-2 rounded-lg cursor-pointer">
            Create my account
          </button>
        </div>
        <div className="mt-5  justify-center items-center">
          <p className="text-center ">
            Already have an account?{"  "}
            <span className="text-green-600 cursor-pointer">Log In</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
