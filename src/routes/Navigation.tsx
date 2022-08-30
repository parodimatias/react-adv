import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => {
                console.log(route);
                return (
                  <li key={route.to}>
                    <NavLink
                      to={route.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => {
              return (
                <Route key={path} path={path} element={<Component />}></Route>
              );
            })}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
{
}
