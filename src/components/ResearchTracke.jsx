import React, { useState } from "react";

const ResearchTracker = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "AI Research",
      deadline: "2023-12-15",
      description: "Research on artificial intelligence and machine learning.",
    },
    {
      id: 2,
      name: "Quantum Computing",
      deadline: "2023-11-30",
      description: "Exploring quantum algorithms and their applications.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [newProjectName, setNewProjectName] = useState(""); // State for new project name
  const [newProjectDeadline, setNewProjectDeadline] = useState(""); // State for new project deadline
  const [newProjectDescription, setNewProjectDescription] = useState(""); // State for new project description
  const [selectedProject, setSelectedProject] = useState(null); // State to store the selected project for details

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewProjectName(""); // Reset form fields
    setNewProjectDeadline("");
    setNewProjectDescription("");
  };

  // Handle form submission
  const handleAddProject = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!newProjectName || !newProjectDeadline || !newProjectDescription) {
      alert("Please fill in all fields.");
      return;
    }

    const newProject = {
      id: projects.length + 1,
      name: newProjectName,
      deadline: newProjectDeadline,
      description: newProjectDescription,
    };

    setProjects([...projects, newProject]); // Add the new project
    closeModal(); // Close the modal
  };

  // Handle project deletion
  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };

  // Handle viewing project details
  const handleViewDetails = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  // Close the project details modal
  const closeDetailsModal = () => {
    setSelectedProject(null);
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
              <div className="flex space-x-2 mt-2 sm:mt-0">
                <button
                  onClick={() => handleViewDetails(project.id)}
                  className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Add New Project Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={openModal}
          className="px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-95"
        >
          ➕ Add New Project
        </button>
      </div>

      {/* Modal for Adding New Project */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Project</h3>
            <form onSubmit={handleAddProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Deadline</label>
                <input
                  type="date"
                  value={newProjectDeadline}
                  onChange={(e) => setNewProjectDeadline(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newProjectDescription}
                  onChange={(e) => setNewProjectDescription(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800">{selectedProject.name}</p>
              <p className="text-sm text-gray-600">📅 Deadline: {selectedProject.deadline}</p>
              <p className="text-sm text-gray-600">📝 Description: {selectedProject.description}</p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeDetailsModal}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchTracker;