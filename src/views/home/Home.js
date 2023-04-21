import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./Home.css";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}
