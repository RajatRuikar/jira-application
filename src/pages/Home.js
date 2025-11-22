import React from "react";

export default function Home({ setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Jira Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
