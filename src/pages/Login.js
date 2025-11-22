import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    const result = await loginUser(username, password);

    // ------- SUCCESS CASE (Token Received) --------
    if (result.includes(".")) {
      localStorage.setItem("token", result);
      setIsLoggedIn(true);
      navigate("/home");   // redirect to home
      return;
    }

    // ------- FAILURE CASE --------
    alert("Invalid Credentials");
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        style={styles.input}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
        <p>
        Don't have an account? <a href="/signup">Signup</a>
        </p>

      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "90%",
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};
