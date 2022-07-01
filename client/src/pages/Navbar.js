import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WebStorage from "../utils/webStorage";

const Navbar = () => {
  var userToken = WebStorage.getAuthToken();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Outcome Based Education
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="nav-link" to="/course_information">
                      Course Information
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/closinfo">
                      Course Learning Outcomes
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/plosinfo">
                      Program Learning Outcomes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="nav-link" to="/departments">
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/semesters">
                      Semesters
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/assessment_tasks">
                      Assessment Tasks
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/plos">
                      PLOs
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/clos">
                      CLOs
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/questions">
                      Questions
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/qmapclo">
                      Question CLO Mapping
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/enrollment">
                      Students Enrolled
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/results">
                      Results
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mx-2">
              {!userToken ? (
                <>
                  <Link
                    className="btn btn-outline-success mx-1"
                    type="button"
                    to="/sign_in"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="btn btn-outline-success mx-1"
                    type="button"
                    to="/sign_up"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <Link
                  className="btn btn-outline-success mx-1"
                  type="button"
                  to=""
                >
                  Log Out
                </Link>
              )}
            </form>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
