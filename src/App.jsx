import React, { useState } from "react";
import Navbar from "./components/Navbar"
import { FaBook, FaUserGraduate, FaChartBar, FaBars } from "react-icons/fa";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import DiscussionForumModerator from "./components/DiscussionForumModerator";
import AnnouncementCreater from "./components/AnnouncementCreator";
import AssignmentGradingHub from "./components/AssignmentGradingHub";
import AtAGlanceMetrics from "./components/AtAGlanceMetrics";
import ClassSchedule from "./components/ClassSchedule";
import CourseAnalytics from "./components/CourseAnalytics";
import ResearchTracker from "./components/ResearchTracke";
import ErrorBoundary from "./components/ErrorBoundary";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`h-screen bg-white shadow-md transition-all duration-300 ${isOpen ? "w-64" : "w-20"} flex flex-col`}>
        {/* Toggle Button */}
        <div className="p-4 flex items-center justify-between">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
            <FaBars />
          </button>
          {isOpen && <h1 className="text-lg font-bold text-gray-800">CampusLink</h1>}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 mt-4 px-4">
          <Link to="/class-schedule" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaBook /> {isOpen && "Class Schedule"}
          </Link>
          <Link to="/at-a-glance-metrics" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaBook /> {isOpen && "At A Glance Metrics"}
          </Link>
          <Link to="/announcement-creator" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaUserGraduate /> {isOpen && "Announcement Creator"}
          </Link>
          <Link to="/assignment-grading-hub" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaChartBar /> {isOpen && "Assignment Grading Hub"}
          </Link>
          <Link to="/course-analytics" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaChartBar /> {isOpen && "Course Analytics"}
          </Link>
          <Link to="/discussion-forum-moderator" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaChartBar /> {isOpen && "Discussion Forum"}
          </Link>
          <Link to="/research-tracker" className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md">
            <FaChartBar /> {isOpen && "Research Tracker"}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

// Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />, // Add an error boundary
    children: [
      { path: "/class-schedule", element: <ClassSchedule /> },
      { path: "/at-a-glance-metrics", element: <AtAGlanceMetrics upcomingClasses={["Math 101", "Physics 202"]} unansweredQueries={5} pendingAnnouncements={2} performanceTrends={75} /> },
      { path: "/announcement-creator", element: <AnnouncementCreater /> },
      { path: "/assignment-grading-hub", element: <AssignmentGradingHub /> },
      { path: "/course-analytics", element: <CourseAnalytics /> },
      {
        path: "/discussion-forum-moderator",
        element: (
          <DiscussionForumModerator
            threads={[
              { id: 1, title: "Thread 1", pinned: false, resolved: false },
              { id: 2, title: "Thread 2", pinned: true, resolved: false },
              { id: 3, title: "Thread 3", pinned: false, resolved: true },
            ]}
            onPinThread={(id) => console.log(`Pinned thread ${id}`)}
            onResolveQuery={(id) => console.log(`Resolved thread ${id}`)}
          />
        ),
      },
      { path: "/research-tracker", element: <ResearchTracker /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
