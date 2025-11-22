import React, { useState } from "react";
import { signupUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    emailAddress: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const result = await signupUser(form);

    if (result === "Signup successful") {
      alert("Signup successful! Please login.");
      navigate("/");
    } else {
      alert(result);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>

      <input name="fullName" placeholder="Full Name" style={styles.input} onChange={handleChange} />
      <input name="username" placeholder="Username" style={styles.input} onChange={handleChange} />
      <input name="emailAddress" placeholder="Email" style={styles.input} onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone" style={styles.input} onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" style={styles.input} onChange={handleChange} />

      <button style={styles.button} onClick={handleSignup}>Signup</button>
      <p> <a href="/">Back</a></p>
    </div>
  );
}

const styles = {
  container: { width: "300px", margin: "100px auto", padding: "20px", textAlign: "center", border: "1px solid #ccc", borderRadius: "10px" },
  input: { width: "90%", margin: "10px 0", padding: "10px" },
  button: { width: "100%", padding: "10px", background: "green", color: "white", border: "none", borderRadius: "5px" }
};
