import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserAPI } from "../services/adminApi";
import WebStorage from "../utils/webStorage";
import { useDispatch } from "react-redux";
import { authReducer } from "../redux/reducers";
const SignUp = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = credentials;
    const response = await createUserAPI({
      name,
      email,
      password,
      confirmPassword,
    });
    const { data } = response;

    if (data?.success) {
      if (password === confirmPassword) {
        dispatch(authReducer.actions.addToken(WebStorage.getAuthToken()));
        navigate("/sign_in");
      } else console.log("response---password not matched ==> ", response);
    } else {
      console.log("response--- not succussful ==> ", response);
    }
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
            <label htmlFor="confirmPassword" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              value={credentials.confirmPassword}
              onChange={onChange}
              id="confirmPassword"
              name="confirmPassword"
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

export default SignUp;
