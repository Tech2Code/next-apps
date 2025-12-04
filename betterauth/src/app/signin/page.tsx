"use client"
import React, { useState } from "react";
import "../signup/signup.css"; // Import the modern CSS styles

interface SigninData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const [form, setForm] = useState<SigninData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Email and password are required");
      return;
    }

    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    // Signin logic here
    console.log("Signin submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="input"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signin;
