import React from "react";
import upworkLogo from "../assets/upworkLogo.png";
import googleLogo2 from "../assets/googleLogo2.webp";
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
        <div className="max-w-lg mx-auto ">
          {/**header */}
          <div>
            <p className="text-center font-black text-4xl mb-4">
              Sign up to find work you love
            </p>
            {/**buttons */}
            <div className="flex gap-4">
              <button className="  px-9 py-2 flex-1  border border-black flex items-center  justify-center gap-2 rounded-full">
                <FaApple className="w-6 h-6" />
                Continue with Apple
              </button>
              <button className="  px-10 py-2 flex-1    border border-black flex justify-center  gap-2 rounded-full bg-blue-500">
                {" "}
                <img
                  src={googleLogo2}
                  alt="googleLogo"
                  className="w-8  h-8 rounded-full"
                />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
