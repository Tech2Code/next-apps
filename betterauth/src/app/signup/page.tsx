"use client"
import React, { useState } from "react";
import "./signup.css";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import Success from "../signup-succes/Success";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    // Email validation (optional)
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    // Do signup logic here, like sending form data to server

    const { data, error } = await authClient.signUp.email({
      name: form.name, // required
      email: form.email, // required
      password: form.password, // required  
      // callbackURL: "/dashboard"
    }, {
      onRequest: (ctx) => {
        console.log("Signin request:", ctx);
      },
      onSuccess: (ctx) => {
        setSuccess(true);
        // redirect("/dashboard")
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    }
    );
    console.log("Signup submitted:", form);
  };


   if (success) {
    <Success userName={form.name} />
  }
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="input"
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
