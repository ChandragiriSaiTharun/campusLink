import React from 'react';

const DynamicWelcomeWidget = ({ name, tasks = [], }) => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white">
      <div className="flex flex-col space-y-4">
        {/* Greeting */}
        <h2 className="text-3xl font-bold">Good Morning, {name}!</h2>

        {/* Tasks */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-lg font-semibold">Today's Tasks</p>
          <ul className="list-disc list-inside mt-2">
            {tasks.map((task, index) => (
              <li key={index} className="text-sm">{task}</li>
            ))}
          </ul>
          {tasks.length === 0 && (
            <p className="text-sm">No tasks for today. Enjoy your day!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicWelcomeWidget;