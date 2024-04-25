import React, { Suspense, lazy, Fragment, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Loader from "react-loaders";

const Login = lazy(() => import("./Pages/Login/Login"));
const Home = lazy(() => import("./Pages/Home/Home"));

const Fallback = (
  <div className="loader-container">
    <div className="loader-container-inner">
      <div className="text-center">
        <Loader type="ball-clip-rotate-multiple" />
      </div>
      <h6 className="mt-3">
        <small>Va rugam asteptati</small>
      </h6>
    </div>
  </div>
);

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Fragment>
      <ToastContainer />
      <Suspense fallback={Fallback}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={
            <ProtectedComponent />
          } />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;

const ProtectedComponent = () => {
  return <div>N-ai voie</div>;
}
