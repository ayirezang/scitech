import React from "react";
import upworkLogo from "../assets/upworkLogo.png";
import googleLogo from "../assets/googleLogo.png";
import { FaApple } from "react-icons/fa";
const Login = () => {
  return (
    <div className="bg-white min-h-screen">
      <nav>
        <div className="flex justify-between items-center px-4 py-4">
          {/**upwork logo */}
          <div className="">
            <img src={upworkLogo} alt="upworkLogo" className="w-24" />
          </div>
          {/**text */}
          <div className="flex items-center gap-4">
            <p className="font-medium">Here to hire a talent?</p>
            <p className="text-green-600">Join as a Client</p>
          </div>
        </div>
      </nav>
      {/**main section */}
      <main className="p-8 items-center">
        <div className=" w-full max-w-2xl mx-auto ">
          {/**header */}
          <div>
            <p className="text-center  text-4xl mb-8">
              Sign up to find work you love
            </p>
            {/**buttons */}
            {/**apple icon */}
            <div className="flex gap-4">
              <button className="px-6 py-3 flex-1  border border-black flex items-center  justify-center gap-2 rounded-full">
                <FaApple className="w-6 h-6" />
                Continue with Apple
              </button>
              {/**google icon */}
              <button className="px-8 py-2 flex-1   relative rounded-full bg-blue-500">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full  ">
                  <img
                    src={googleLogo}
                    alt="google"
                    className="w-8  h-8 rounded-full"
                  />
                </div>
                <span className="text-white ">Continue with Google</span>
              </button>
            </div>
            {/**or */}
            <div className="flex items-center gap-4 my-10 ">
              <div className="border-b border-gray-400 flex-1"></div>
              <p className=" ">or</p>
              <div className="border-b border-gray-400 flex-1 "></div>
            </div>
          </div>
          {/**form */}
          <form>
            <div className="flex gap-2 ">
              {/**first name */}
              <div>
                <label for="first name" className="block">
                  First name
                </label>
                <input
                  type="text"
                  name="first name"
                  id="first name"
                  className="border px-5 py-3 rounded-lg w-full outline-none border-gray-600"
                />
              </div>
              {/**last name */}
              <div>
                <label for="first name" className="block">
                  First name
                </label>
                <input
                  type="text"
                  name="first name"
                  id="first name"
                  className="border px-5 py-3 rounded-lg w-full outline-none border-gray-600"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
