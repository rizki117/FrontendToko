
import React from "react";
import { Outlet } from "react-router-dom";
import OkyakuNavbar from "../components/mynavbar/OkyakuNavbar";
import BottomNavbar from "../components/navbarbutton/BottomNavbar";


const Navbar = () => {
  return (
    <>
      <OkyakuNavbar />
<main style={{ marginTop: "60px" }}> 
        <Outlet />
      </main>
<BottomNavbar />
    </>
  );
};

export default Navbar;
