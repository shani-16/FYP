import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteNames } from "./index";
import { Navbar } from "../pages";
import { routeNameCONST } from "../utils/constants";
import WebStorage from "../utils/webStorage";
const Routing = () => {
  const { publicRoutes, protectedRoutes } = RouteNames;
  console.log(
    "useSelector Routing",
    useSelector((state) => state.auth.token)
  );
  useSelector((state) => state.auth.token);
  var userToken = WebStorage.getAuthToken();
  const HOC = (component) => {
    if (userToken) {
      return component;
    } else {
      return <Navigate to={routeNameCONST.sign_in} />;
    }
  };
  const checkAuth = (component) => {
    if (!userToken) {
      return component;
    } else {
      return <Navigate to={routeNameCONST.default} />;
    }
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {publicRoutes.map((value, index) => (
            <Route
              path={value.route}
              element={checkAuth(<value.component />)}
              key={index}
            />
          ))}
          {protectedRoutes.map((value, index) => (
            <Route
              path={value.route}
              element={HOC(<value.component />)}
              key={index}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
