import React from "react";
import upworkLogo from "../assets/upworkLogo.png";
import { CiSearch } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div>
      {/**nav */}
      <nav className="flex justify-between p-8">
        <div className="flex gap-5 justify-center items-center">
          <div>
            <img src={upworkLogo} className="w-24 h-24" />
          </div>
          <p>find work</p>
          <p>deliver work</p>
          <p>manage finances</p>
          <p>messages</p>
        </div>
        {/**second search */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <input
              className="border border-gray-500 w-full px-5 py-2 rounded-md"
              placeholder="   Search"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
              <CiSearch className="w-5 h-5" />
            </div>
          </div>
          {/** icons */}
        </div>
      </nav>
      {/**main */}
      <main></main>
    </div>
  );
};

export default Dashboard;
