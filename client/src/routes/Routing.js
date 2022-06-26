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
  useSelector((state) => state.auth.token);

  const HOC = (component) => {
    var userToken = WebStorage.getAuthToken();
    if (userToken) {
      return component;
    } else {
      return <Navigate to={routeNameCONST.sign_in} />;
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
              element={<value.component />}
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
