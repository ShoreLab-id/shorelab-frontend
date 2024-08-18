"use client";

import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-br from-primary-dark to-black">
      <div className="flex items-center justify-center gap-10">
        <div className="w-48 h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Profile Image</span>
        </div>
        <div className="">
          <div className="text-4xl font-extrabold text-absolute-white">
            Agent Codename: Ghostblade
          </div>
          <div className="text-2xl font-bold text-absolute-white">
            Last Location: Bangladesh
          </div>
          <div className="text-absolute-white text-xl font-semibold">
            Status:{" "}
            <span className="text-red-600 font-semibold animate-pulse">
              Presumed MIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
