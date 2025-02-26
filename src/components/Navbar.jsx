import React from "react";

const Navbar = ({ userName = "User", userEmail = "user@example.com" }) => {
  return (
    <div className="bg-white shadow-md h-16 flex justify-between items-center px-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-800">CampusLink</h1>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">{userName || "User"}</p>
          <p className="text-xs text-gray-500">{userEmail || "user@example.com"}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold">
          {userName?.charAt(0).toUpperCase() || "U"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
