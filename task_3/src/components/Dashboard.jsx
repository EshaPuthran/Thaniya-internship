import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Props from "./Props";

function Dashboard() {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to track current input
  const [taskTitle, setTaskTitle] = useState("");

  // Function to handle task creation
  const handleCreateTask = () => {
    if (!taskTitle.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
      },
    ]);

    setTaskTitle("");
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        minHeight: "100vh",
      }}
    >
      <Header setIsModalOpen={setIsModalOpen} />

      <MainContent tasks={tasks} />

      {isModalOpen && (
        <Props
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          setIsModalOpen={setIsModalOpen}
          handleCreateTask={handleCreateTask}
        />
      )}
    </div>
  );
}

export default Dashboard;