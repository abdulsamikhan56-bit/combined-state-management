import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";
import "../App.css";

const Dashboard = () => {
  const { user, login, logout } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={`app ${theme}`}>
      <div className="container">

        <h1 className="title">
          Combined State Management
        </h1>

        {/* User Context */}
        <div className="card">
          <h2>User Context</h2>

          {user ? (
            <>
              <p className="info">
                <strong>Welcome:</strong> {user.name}
              </p>

              <p className="info">
                <strong>Email:</strong> {user.email}
              </p>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <p className="info">
                No user is logged in.
              </p>

              <button
                className="login-btn"
                onClick={login}
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Redux Counter */}
        <div className="card">
          <h2>Redux Counter</h2>

          <div className="counter">
            {counter}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              className="increment-btn"
              onClick={() => dispatch(increment())}
            >
              + Increment
            </button>

            <button
              className="decrement-btn"
              onClick={() => dispatch(decrement())}
            >
              - Decrement
            </button>
          </div>
        </div>

        {/* Theme Context */}
        <div className="card">
          <h2>Theme Context</h2>

          <p className="theme-text">
            Current Theme: {theme}
          </p>

          <div style={{ textAlign: "center" }}>
            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              Toggle Theme
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;