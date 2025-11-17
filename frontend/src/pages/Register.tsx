import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const register = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/auth/register/", {
        username,
        password,
      });
      alert(res.data.message || "Registered successfully");
      window.location.href = "/login"; // redirect to login page
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Registration failed");
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="mb-2">
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary w-100" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default Register;
