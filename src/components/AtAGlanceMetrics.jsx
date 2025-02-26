import React from "react";

const AtAGlanceMetrics = ({ upcomingClasses = [], unansweredQueries, pendingAnnouncements, performanceTrends }) => {
  // Log the prop for debugging
  console.log("upcomingClasses:", upcomingClasses);

  return (
    <div>
      <h2>At a Glance Metrics</h2>
      <div>
        <h3>Upcoming Classes</h3>
        <ul>
          {upcomingClasses.map((className, index) => (
            <li key={index}>{className}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Unanswered Queries</h3>
        <p>{unansweredQueries}</p>
      </div>
      <div>
        <h3>Pending Announcements</h3>
        <p>{pendingAnnouncements}</p>
      </div>
      <div>
        <h3>Performance Trends</h3>
        <p>{performanceTrends}%</p>
      </div>
    </div>
  );
};

export default AtAGlanceMetrics;