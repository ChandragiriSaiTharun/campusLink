import React, { useState } from 'react';

const PriorityBadge = ({ priority }) => {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`${colors[priority]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
};

const StatusBadge = ({ status }) => {
  const colors = {
    published: 'bg-blue-100 text-blue-800',
    draft: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`${colors[status]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const AnnouncementCreator = ({ announcements = [] }) => {
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    priority: 'medium',
    department: '',
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Announcement Management</h1>
        <p className="mt-2 text-sm text-gray-600">Create and manage announcements for your institution</p>
      </div>

      {/* Create New Announcement Form */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Create New Announcement</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter announcement title"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter department name"
                value={newAnnouncement.department}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, department: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter announcement content"
              value={newAnnouncement.content}
              onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Priority</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={newAnnouncement.priority}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, priority: e.target.value})}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex-1 flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Announcements List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Recent Announcements</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900">{announcement.title}</h3>
                    <PriorityBadge priority={announcement.priority} />
                    <StatusBadge status={announcement.status} />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{announcement.content}</p>
                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{announcement.department}</span>
                    <span>•</span>
                    <span>{formatDate(announcement.createdAt)}</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCreator;