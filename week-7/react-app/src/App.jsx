import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { RecoilRoot } from "recoil";

import React, { Suspense, lazy } from "react";

import "./App.css";
const Home = lazy(() => import("./components/Home"));
const User = lazy(() => import("./components/User"));

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <AppBar />
        <Routes>
          <Route
            path="/users"
            element={
              <Suspense fallback="Loading...">
                <User />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="Loading">
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );

  function AppBar() {
    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/users")}>Users</button>
      </div>
    );
  }
}

export default App;
