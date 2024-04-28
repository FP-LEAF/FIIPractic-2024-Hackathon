import React, { Suspense, lazy, Fragment, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "react-loaders";
import { DarkModeProvider } from "./Components/DarkMode/DarkModeProvider";

import TreeStructure from "./Pages/TreeStructure/TreeStructure";

import CapsuleCreationForm from "./Pages/CreateCapsule/views/CapsuleCreation";
import Marketplace from "./Pages/Marketplace/views/Marketplace";
import Treasurehunt from "./Pages/Treasurehunt/views/Treasurehunt";
// import { Bundle } from "./Pages/Bundle/Bundle";
import Auction from "./Pages/Auction/Marketplace/views/Auction";
import CommentSection from "./Pages/Feed/components/CommentSection";


const Login = lazy(() => import("./Pages/Login/views/Login"));
const Home = lazy(() => import("./Pages/Home/views/Landing"));
const Profile = lazy(() => import("./Pages/Profile/views/Profile"));
const Test = lazy(() => import("./Pages/Test/Test"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const Capsule = lazy(() => import("./Pages/Capsule/Capsule"));
const BundleCreation = lazy(() => import("./Pages/Bundle/BundleCreation"));
const Bundle = lazy(() => import("./Pages/Bundle/Bundle"));

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
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/login");
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
            <Route path="/bundle-creation" element={<BundleCreation />} />
            <Route path="/bundle-view" element={<Bundle />} />
            <Route path="/capsule-creation" element={<CapsuleCreationForm />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/treasurehunt" element={<Treasurehunt />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/capsule" element={<Capsule />} />

            <Route path="/feed" element={<Feed />} />
            <Route path="/tree" element={<TreeStructure />} />
            <Route path="*" element={
              <ProtectedComponent />
            } />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<ProtectedComponent />} />
          </Routes>
        </Suspense>
      </Fragment>
    </DarkModeProvider>
  );
};

export default App;

const ProtectedComponent = () => {
  return <div>N-ai voie</div>;
};
