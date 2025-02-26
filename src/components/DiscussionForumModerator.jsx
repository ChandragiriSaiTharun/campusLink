import React from "react";

const DiscussionForumModerator = ({ threads = [], onPinThread, onResolveQuery }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <h3 className="text-xl font-semibold text-center mb-4">Discussion Forum</h3>
      <ul className="space-y-4">
        {threads.map((thread) => (
          <li
            key={thread.id}
            className="p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between shadow-md"
          >
            <div className="flex flex-col">
              <span className="text-lg font-medium">{thread.title}</span>
              <span
                className={`text-sm mt-1 ${
                  thread.pinned
                    ? "text-yellow-600 font-semibold"
                    : thread.resolved
                    ? "text-green-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {thread.pinned ? "📌 Pinned" : thread.resolved ? "✅ Resolved" : "📝 Active"}
              </span>
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button
                onClick={() => onPinThread(thread.id)}
                className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md"
              >
                Pin
              </button>
              <button
                onClick={() => onResolveQuery(thread.id)}
                className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md"
              >
                Resolve
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionForumModerator;