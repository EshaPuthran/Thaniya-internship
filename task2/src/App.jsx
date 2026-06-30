import React from "react";

// 1. Data Source (Mock API response)

const issueData = [
  { id: 1, title: "Initialize Vite App", priority: "High", status: "Done" },
  { id: 2, title: "Build Sidebar Component", priority: "Medium", status: "In Progress" },
  { id: 3, title: "Deploy to Vercel", priority: "Low", status: "Pending" }
];

// 2. The Child Component (TaskCard.jsx)

// Introduce destructuring here so they see how clean professional code looks.

function TaskCard({ title, priority, status }) {
  return (
    <div
      className="task-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px 0"
      }}>
        <h3>{title}</h3>
        <p><strong>Priority:</strong> {priority}</p>
        <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

// 3. The Parent Component (App.jsx)

function App() {
  return (
    <div
      className="dashboard"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <h2>IssueFlow Dashboard</h2>

      

      {issueData.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default App;