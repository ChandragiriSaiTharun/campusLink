import React, { useState } from "react";

const ResearchTracker = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "AI Research",
      deadline: "2023-12-15",
    },
    {
      id: 2,
      name: "Quantum Computing",
      deadline: "2023-11-30",
    },
  ]);

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `New Project ${projects.length + 1}`,
      deadline: "2023-12-31", // Default deadline
    };
    setProjects([...projects, newProject]);
  };

  const handleViewDeadlines = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    alert(`Viewing deadlines for: ${project.name}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">📚 Research Projects</h3>

      {/* Projects List */}
      <ul className="space-y-4">
        {projects.map((project) => {
          const deadlineDate = new Date(project.deadline);
          const today = new Date();
          const isOverdue = deadlineDate < today;
          const isUpcoming =
            deadlineDate > today &&
            (deadlineDate - today) / (1000 * 60 * 60 * 24) < 7;

          return (
            <li
              key={project.id}
              className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">{project.name}</p>
                <p
                  className={`text-sm mt-1 ${
                    isOverdue
                      ? "text-red-600 font-semibold"
                      : isUpcoming
                      ? "text-orange-600 font-semibold"
                      : "text-blue-600 font-semibold"
                  }`}
                >
                  📅 Deadline: {project.deadline}{" "}
                  {isOverdue ? "⚠️ Overdue" : isUpcoming ? "⏳ Upcoming" : "✅ On Time"}
                </p>
              </div>
              <button
                onClick={() => handleViewDeadlines(project.id)}
                className="mt-2 sm:mt-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300"
              >
                View Deadlines
              </button>
            </li>
          );
        })}
      </ul>

      {/* Add New Project Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleAddProject}
          className="px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-95"
        >
          ➕ Add New Project
        </button>
      </div>
    </div>
  );
};

export default ResearchTracker;