import React from 'react';
import { Link } from 'react-router-dom';

const GradeCard = ({ subject, grade, percentage, status }) => {
  const colors = {
    excellent: 'bg-green-100 text-green-800 border-green-200',
    good: 'bg-blue-100 text-blue-800 border-blue-200',
    average: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{subject}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]} mt-1`}>
            {grade}
          </span>
        </div>
        <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
      </div>
    </div>
  );
};

const ExamCard = ({ subject, date, time, venue, type }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{subject}</h3>
        <p className="text-sm text-gray-500 mt-1">{venue}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">{new Date(date).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
    <div className="mt-2">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
        {type}
      </span>
    </div>
  </div>
);

const Home = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Student Info Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{data.studentInfo.name}</h1>
              <p className="text-gray-500">ID: {data.studentInfo.id} | {data.studentInfo.course}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Semester</p>
              <p className="text-lg font-medium text-gray-900">{data.studentInfo.semester}</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Exams */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Exams</h2>
              <div className="space-y-4">
                {data.upcomingExams.map(exam => (
                  <ExamCard key={exam.id} {...exam} />
                ))}
              </div>
            </div>

            {/* Recent Grades */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Grades</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.recentGrades.map(grade => (
                  <GradeCard key={grade.id} {...grade} />
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {data.events.map(event => (
                  <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                        <span className="text-sm text-gray-500">{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Attendance Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Attendance Overview</h2>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Present
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {data.attendance.present}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div style={{ width: `${data.attendance.present}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
            </div>

            {/* Fee Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Fee Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Due</span>
                  <span className="text-lg font-medium text-gray-900">${data.feeStatus.currentDue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Due Date</span>
                  <span className="text-sm text-gray-900">{new Date(data.feeStatus.nextDueDate).toLocaleDateString()}</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Pay Now
                </button>
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Announcements</h2>
              <div className="space-y-4">
                {data.announcements.map(announcement => (
                  <div key={announcement.id} className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{announcement.message}</p>
                    <p className="text-xs text-gray-400 mt-2">{new Date(announcement.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;