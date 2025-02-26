import React from "react";

const MetricCard = ({ title, value, icon, trend, color }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className="mt-2 flex items-baseline">
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          {trend && (
            <span className={`ml-2 text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
        </div>
      </div>
      <div className={`${color} bg-opacity-10 p-3 rounded-lg`}>
        {icon}
      </div>
    </div>
  </div>
);

const AtAGlanceMetrics = ({ 
  upcomingClasses = [], 
  unansweredQueries, 
  pendingAnnouncements, 
  performanceTrends 
}) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">Your academic metrics at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Upcoming Classes Card */}
        <MetricCard
          title="Upcoming Classes"
          value={`${upcomingClasses.length} Classes`}
          color="text-blue-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        {/* Unanswered Queries Card */}
        <MetricCard
          title="Unanswered Queries"
          value={unansweredQueries}
          color="text-amber-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        {/* Pending Announcements Card */}
        <MetricCard
          title="Pending Announcements"
          value={pendingAnnouncements}
          color="text-purple-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          }
        />

        {/* Performance Trends Card */}
        <MetricCard
          title="Performance Trends"
          value={`${performanceTrends}%`}
          trend={performanceTrends - 85}
          color="text-emerald-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
      </div>

      {/* Upcoming Classes Detail Section */}
      {upcomingClasses.length > 0 && (
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {upcomingClasses.map((className, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{className}</p>
                  <p className="text-sm text-gray-500">Upcoming in 30 minutes</p>
                </div>
                <button className="ml-auto bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors duration-200">
                  Join Class
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AtAGlanceMetrics;