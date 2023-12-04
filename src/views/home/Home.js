import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import { init_pointer } from "../../utils/Utils";

export default function Home() {
  // navigate
  let navigate = useNavigate();
  //location
  const location = useLocation();

  // cursor useEffect
  useEffect(() => {
    init_pointer({});
  }, []);

  return (
    <div className="home">
      <Navbar />

      <div className="outlet-container">
        <Outlet />
      </div>

      {/* // cursor */}
      <div className="cursor rounded"></div>
      <div className="cursor pointed"></div>
    </div>
  );
}
