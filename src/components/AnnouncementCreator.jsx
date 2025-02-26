import React from 'react';

const AssignmentGradingHub = ({ assignments = [], onGradeAssignment, onCheckPlagiarism }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Assignments to Grade</h3>
      <ul className="space-y-4">
        {assignments.map((assignment, index) => (
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
      {assignments.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No assignments to grade.</p>
      )}
    </div>
  );
};

export default AssignmentGradingHub;