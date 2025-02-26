// import React, { useState } from "react";
// import { FaBook, FaUserGraduate, FaChartBar, FaBars } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`h-screen bg-white shadow-md transition-all duration-300 ${isOpen ? "w-64" : "w-20"} flex flex-col`}>
//       {/* Toggle Button */}
//       <div className="p-4 flex items-center justify-between">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
//           <FaBars />
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex flex-col gap-4 mt-4 px-4">
//         <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
//           <FaBook /> {isOpen && "ClassSchedule"}
//         </a>
//         <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
//           <FaBook /> {isOpen && "AtAGlanceMetrics"}
//         </a>
//         <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
//           <FaUserGraduate /> {isOpen && "AnnouncementCreater"}
//         </a>
//         <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
//           <FaChartBar /> {isOpen && "AssignmentGradingHub"}
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
