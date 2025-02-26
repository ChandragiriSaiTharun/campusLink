import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const CourseAnalytics = ({ performanceData = [] }) => {
  // Calculate average score
  const averageScore =
    performanceData.reduce((sum, data) => sum + data.score, 0) / performanceData.length || 0;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Course Performance</h3>

      {/* Average Score */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-semibold text-blue-800">Average Score: {averageScore.toFixed(2)}%</p>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-64 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Metrics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {performanceData.map((data, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-gray-800">{data.topic}</p>
            <p className="text-sm text-gray-600">Score: {data.score}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAnalytics;