import React from "react";

function Header({ setIsModalOpen }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid lightgray",
        paddingBottom: "15px",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "32px",
        }}
      >
        IssueFlow Dashboard
      </h1>

      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "black",
          color: "white",
          border: "none",
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        + New Task
      </button>
    </header>
  );
}

export default Header;