import React, { useState } from 'react';

const AssignmentGradingHub = ({ assignments = [], onGradeAssignment, onCheckPlagiarism }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'graded', 'ungraded'
  const [sortBy, setSortBy] = useState('progress'); // 'progress', 'name'

  // Filter assignments based on the selected filter
  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === 'graded') return assignment.progress === 100;
    if (filter === 'ungraded') return assignment.progress < 100;
    return true; // 'all'
  });

  // Sort assignments based on the selected sort option
  const sortedAssignments = filteredAssignments.sort((a, b) => {
    if (sortBy === 'progress') return b.progress - a.progress;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Assignments to Grade</h3>

      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('graded')}
            className={`px-4 py-2 rounded-md ${
              filter === 'graded' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Graded
          </button>
          <button
            onClick={() => setFilter('ungraded')}
            className={`px-4 py-2 rounded-md ${
              filter === 'ungraded' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Ungraded
          </button>
        </div>
        <div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            <option value="progress">Sort by Progress</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>

      {/* Assignments List */}
      <ul className="space-y-4">
        {sortedAssignments.map((assignment, index) => (
          <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                {assignment.name} (<span className="font-medium">{assignment.progress}% graded</span>)
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => onGradeAssignment(assignment.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Grade
                </button>
                <button
                  onClick={() => onCheckPlagiarism(assignment.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Check Plagiarism
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {sortedAssignments.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No assignments to grade.</p>
      )}
    </div>
  );
};

export default AssignmentGradingHub;