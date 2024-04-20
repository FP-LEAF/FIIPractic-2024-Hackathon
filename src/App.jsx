import React, { Suspense, lazy, Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "react-loaders";
import logo from './logo.svg';
import './Styles/App.css';

const Login = lazy(() => import("./Pages/Login/Login"));

const Fallback = (
  <div className="loader-container">
    <div className="loader-container-inner">
      <div className="text-center">
        <Loader type="ball-scale-ripple" />
      </div>
      <h6 className="mt-3">
        <small>Va rugam asteptati</small>
      </h6>
    </div>
  </div>
);

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={Fallback}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
