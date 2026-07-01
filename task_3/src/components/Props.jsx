import React from "react";

function Props({
  taskTitle,
  setTaskTitle,
  setIsModalOpen,
  handleCreateTask,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          width: "350px",
          borderRadius: "10px",
        }}
      >
        <h2>Create New Task</h2>

        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task title..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              setIsModalOpen(false);
              setTaskTitle("");
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleCreateTask}
            style={{
              background: "blue",
              color: "white",
              border: "none",
              padding: "10px",
            }}
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Props;