import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const DashboardAdmin = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
    document.body.classList.toggle("sb-sidenav-toggled");
  };

  return (
    <div className={`sb-nav-fixed ${sidebarToggle ? "sb-sidenav-toggled" : ""}`}>
      <Navbar handleSidebarToggle={handleSidebarToggle} />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <Outlet /> {/* Konten dinamis akan muncul di sini */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;