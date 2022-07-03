import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserAPI } from "../services/adminApi";
import WebStorage from "../utils/webStorage";
import { useDispatch } from "react-redux";
import { authReducer } from "../redux/reducers";
import { routeNameCONST } from "../utils/constants";
const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    var modal = { name, email, password, confirmPassword };
    const response = await createUserAPI(modal);
    const { data } = response;

    if (data?.success) {
      if (modal.password === modal.confirmPassword) {
        dispatch(authReducer.actions.addToken(WebStorage.getAuthToken()));
        navigate(routeNameCONST.default);
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
