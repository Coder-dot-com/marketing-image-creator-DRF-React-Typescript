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
      const res = await axios.post("/api/auth/register/", { username, password });
      alert(res.data.message || "Registered successfully");
      window.location.href = "/login";
    } catch (err: any) {
      if (err.response?.data) {
        setError(err.response.data.error || "Registration failed");
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Register</h3>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={register}>
          Register
        </button>

        <p className="text-center mb-0">
          Already have an account?{" "}
          <a href="/login" className="text-primary">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
