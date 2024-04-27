import React, { Suspense, lazy, Fragment, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Loader from "react-loaders";
import { DarkModeProvider } from "./Components/DarkMode/DarkModeProvider";

const Login = lazy(() => import("./Pages/Login/views/Login"));
const Home = lazy(() => import("./Pages/Home/views/Landing"));
const Profile = lazy(() => import("./Pages/Profile/views/Profile"));
const Test = lazy(() => import("./Pages/Test/Test"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const Capsule = lazy(() => import("./Pages/Capsule/Capsule"));
const Feed = lazy(() => import("./Pages/Feed/views/Feed"));

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
    <DarkModeProvider>
      <Fragment>
        <ToastContainer />
        <Suspense fallback={Fallback}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/capsule" element={<Capsule />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={
              <ProtectedComponent />
            } />
          </Routes>
        </Suspense>
      </Fragment>
    </DarkModeProvider>
  );
}

export default App;

const ProtectedComponent = () => {
  return <div>N-ai voie</div>;
}
