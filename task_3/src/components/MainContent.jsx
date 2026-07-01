import React from "react";

function MainContent({ tasks }) {
  return (
    <main
      style={{
        marginTop: "20px",
        textAlign: "left",
      }}
    >
      {tasks.length === 0 ? (
        <p>Your tasks will appear here...</p>
      ) : (
        <ul
          style={{
            paddingLeft: "20px",
            margin: 0,
          }}
        >
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                marginBottom: "10px",
                fontSize: "18px",
              }}
            >
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default MainContent;