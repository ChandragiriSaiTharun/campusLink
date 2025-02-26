import React from 'react';

const ClassSchedule = ({ classes = [], onJoinClass, onViewMaterials, onTrackAttendance }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Today's Classes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">{cls.name}</span>
                <span className="text-sm text-gray-600">{cls.time}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onJoinClass(cls.link)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Join Class
                </button>
                <button
                  onClick={() => onViewMaterials(cls.materials)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  View Materials
                </button>
                <button
                  onClick={() => onTrackAttendance(cls.id)}
                  className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
                >
                  Track Attendance
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {classes.length === 0 && (
        <p className="text-gray-500 text-center mt-6">No classes scheduled for today.</p>
      )}
    </div>
  );
};

export default ClassSchedule;