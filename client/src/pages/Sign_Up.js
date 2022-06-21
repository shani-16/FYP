import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign_Up = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    const response = await fetch(
      "http://localhost:3001/api/auth/createuser",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      }
    );
    const json = await response.json();
    if (password === cpassword) {
      console.log(json);
      if (json.success) {
        //Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/sign_in");
      }
    } else {
      alert("password doesn't match");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="text-center my-1">Sign Up</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* User Name */}
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Username
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter Username"
              value={credentials.name}
              onChange={onChange}
              id="name"
              name="name"
              required
            />
          </div>
          {/* Email */}
          <div class="mb-3">
            <label htmlFor="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          {/* Password */}
          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              value={credentials.password}
              onChange={onChange}
              id="password"
              name="password"
              required
            />
          </div>
          {/* Confiirm Password */}
          <div class="mb-3">
            <label htmlFor="cpassword" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              value={credentials.cpassword}
              onChange={onChange}
              id="cpassword"
              name="cpassword"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Sign_Up;
