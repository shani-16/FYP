import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../redux/reducers";
import { loginUserAPI } from "../services/adminApi";
import { routeNameCONST } from "../utils/constants";
import WebStorage from "../utils/webStorage";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    var modal = { email, password };
    const response = await loginUserAPI(modal);
    const { data } = response;

    if (data?.success) {
      dispatch(authReducer.actions.addToken(WebStorage.getAuthToken()));
      navigate(routeNameCONST.default);
    } else {
      console.log("login response--- not succussful ==> ", response);
    }
  };

  return (
    <>
      <h1 className="h1 text-center my-1">Sign In</h1>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default SignIn;
