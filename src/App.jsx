import { useState } from "react";
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

// ... existing imports ...

const assignmentData = {
  assignments: [
    {
      id: 1,
      name: "Advanced Algorithms Project",
      progress: 75,
      dueDate: "2024-04-01",
      course: "CS401",
      totalSubmissions: 45,
      gradedCount: 34,
      status: "in-progress",
      priority: "high",
      lastGraded: "2024-03-20T15:30:00"
    },
    {
      id: 2,
      name: "Database Design Final",
      progress: 100,
      dueDate: "2024-03-15",
      course: "CS302",
      totalSubmissions: 38,
      gradedCount: 38,
      status: "completed",
      priority: "medium",
      lastGraded: "2024-03-19T11:20:00"
    },
    {
      id: 3,
      name: "Machine Learning Midterm",
      progress: 0,
      dueDate: "2024-04-10",
      course: "CS405",
      totalSubmissions: 52,
      gradedCount: 0,
      status: "pending",
      priority: "high",
      lastGraded: null
    },
    {
      id: 4,
      name: "Web Development Project",
      progress: 60,
      dueDate: "2024-03-25",
      course: "CS304",
      totalSubmissions: 41,
      gradedCount: 25,
      status: "in-progress",
      priority: "medium",
      lastGraded: "2024-03-20T09:45:00"
    }
  ]
};

const analyticsData = {
  overview: {
    totalStudents: 450,
    averageGrade: 87.5,
    courseCompletion: 92,
    activeEngagement: 78
  },
  performanceTrends: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    grades: [85, 88, 82, 89, 91, 86],
    attendance: [92, 88, 95, 85, 88, 90],
    participation: [75, 82, 78, 88, 84, 80]
  },
  courseStats: [
    {
      id: 1,
      name: "Advanced Mathematics",
      code: "MATH401",
      students: 45,
      averageGrade: 88,
      attendance: 94,
      improvement: 5.2
    },
    {
      id: 2,
      name: "Data Structures",
      code: "CS301",
      students: 38,
      averageGrade: 85,
      attendance: 91,
      improvement: 3.8
    },
    {
      id: 3,
      name: "Physics for Engineers",
      code: "PHY202",
      students: 42,
      averageGrade: 83,
      attendance: 89,
      improvement: -2.1
    },
    {
      id: 4,
      name: "Database Systems",
      code: "CS402",
      students: 35,
      averageGrade: 90,
      attendance: 96,
      improvement: 6.5
    }
  ],
  studentEngagement: {
    discussions: [45, 52, 38, 65, 48, 55],
    submissions: [88, 92, 85, 95, 88, 90],
    resources: [65, 72, 58, 75, 68, 70]
  },
  topPerformers: [
    {
      id: 1,
      name: "Emma Thompson",
      course: "MATH401",
      grade: 98,
      attendance: 100,
      participation: 95
    },
    {
      id: 2,
      name: "James Wilson",
      course: "CS301",
      grade: 96,
      attendance: 98,
      participation: 92
    },
    {
      id: 3,
      name: "Sarah Chen",
      course: "PHY202",
      grade: 95,
      attendance: 96,
      participation: 94
    }
  ],
  assessmentDistribution: {
    'A': 25,
    'B': 35,
    'C': 28,
    'D': 10,
    'F': 2
  }
};


// In your Router:


// Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />, // Add an error boundary
    children: [
      // ... existing code ...
      { path: "/class-schedule", element: <ClassSchedule 
        schedules={[
          {
            id: 1,
            className: "Advanced Mathematics 401",
            instructor: "Dr. Sarah Chen",
            time: "Mon/Wed 10:00 AM - 11:30 AM",
            location: "Science Building 305",
            enrollmentCount: 45
          },
          {
            id: 2,
            className: "Physics for Engineers 202",
            instructor: "Prof. James Wilson",
            time: "Tue/Thu 2:00 PM - 3:30 PM",
            location: "Engineering Hall 205",
            enrollmentCount: 32
          },
          {
            id: 3,
            className: "Computer Science Fundamentals 101",
            instructor: "Dr. Michael Rodriguez",
            time: "Mon/Wed/Fri 1:00 PM - 2:00 PM",
            location: "Tech Center 405",
            enrollmentCount: 60
          },
          {
            id: 4,
            className: "Data Structures 301",
            instructor: "Prof. Emily Thompson",
            time: "Tue/Thu 9:30 AM - 11:00 AM",
            location: "Computer Science Building 105",
            enrollmentCount: 28
          }
        ]}
      /> },
// ... existing code ...,
      { path: "/at-a-glance-metrics", element: <AtAGlanceMetrics upcomingClasses={["Math 101", "Physics 202"]} unansweredQueries={5} pendingAnnouncements={2} performanceTrends={75} /> },
      // ... existing code ...
{ 
  path: "/announcement-creator", 
  element: <AnnouncementCreater 
    announcements={[
      {
        id: 1,
        title: "Final Exam Schedule Update",
        content: "The final examination for CS401 has been rescheduled to December 15th, 2024",
        priority: "high",
        department: "Computer Science",
        createdAt: "2024-03-20T10:00:00",
        status: "published"
      },
      {
        id: 2,
        title: "Guest Lecture Series",
        content: "Join us for a special lecture by Dr. Jane Smith on Artificial Intelligence",
        priority: "medium",
        department: "Computer Science",
        createdAt: "2024-03-19T15:30:00",
        status: "draft"
      },
      {
        id: 3,
        title: "Library Hours Extended",
        content: "The university library will remain open 24/7 during finals week",
        priority: "low",
        department: "Campus Services",
        createdAt: "2024-03-18T09:15:00",
        status: "published"
      }
    ]}
  /> 
},
// ... existing code ...,
      { path: "/assignment-grading-hub", element: <AssignmentGradingHub assignments={assignmentData.assignments} /> },
      { path: "/course-analytics", element: <CourseAnalytics data={analyticsData} /> },
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
