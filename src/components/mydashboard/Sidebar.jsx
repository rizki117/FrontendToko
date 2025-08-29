import React from "react";
import { Link } from "react-router-dom";  // <- import Link

const Sidebar = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>

  <Link className="nav-link" to="/dashboard">  
 <div className="sb-nav-link-icon">
 <i className="fas fa-tachometer-alt"></i>
</div>
 Dashboard
</Link>

<Link className="nav-link" to="/user">  
 <div className="sb-nav-link-icon">
 <i className="fas fa-user-alt"></i>
 </div>
  Users
</Link>

 <Link className="nav-link" to="/">  
 <div className="sb-nav-link-icon">
 <i className="fas fa-home-alt"></i>
 </div>
  Home
</Link>
            
            
{/* Bagian Heading Interface */}
<div className="sb-sidenav-menu-heading">
  Interface
</div>
{/* Akhir Heading Interface*/}


{/* 1. Judul Dropdown Layouts */}
<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts">
<div className="sb-nav-link-icon">
 <i className="fas fa-columns"></i>
 </div>
  Layouts
<div className="sb-sidenav-collapse-arrow">
<i className="fas fa-angle-down">
</i>
</div>
</a>

{/* Akhir Judul Dropdown Layouts .1 */}


{/* 1.1 Isi Untuk Judul Dropdown Layouts  */}

<div className="collapse" id="collapseLayouts">
<nav className="sb-sidenav-menu-nested nav">
<Link className="nav-link" to="/layout-static">Static Navigation</Link>
{/* Akhir Isi Untuk Judul Dropdown Layouts 1.1 */}

{/* 1.2 Isi Untuk Judul Dropdown Layouts  */}

<Link className="nav-link" to="/layout-light">Light Sidenav</Link>
</nav>
</div>
{/* Akhir Isi Untuk Judul Dropdown Layouts 1.2 */}


{/* 2. Judul Dropdown Data Master */}
<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseDataMaster">
<div className="sb-nav-link-icon">
 <i className="fas fa-database"></i>
 </div>
  Data Master
<div className="sb-sidenav-collapse-arrow">
<i className="fas fa-angle-down">
</i>
</div>
</a>
{/* Akhir Judul Dropdown Data Master */}


{/* 1.1 Isi Untuk Judul Dropdown Data Msster  */}
<div className="collapse" id="collapseDataMaster">
<nav className="sb-sidenav-menu-nested nav">
<Link className="nav-link" to="/dashboard/produk">Produk</Link>
{/* Akhir Isi Untuk Judul Dropdown Data Master 1.1  */}


{/* 1.2 Isi Untuk Judul Dropdown Data Msster  */}
<Link className="nav-link" to="/layout-light">Orders</Link>
</nav>
</div>
{/* Akhir Isi Untuk Judul Dropdown Data Master 1.2 */}




<div className="sb-sidenav-menu-heading">
Addons
</div>
<Link className="nav-link" to="/charts">

<div className="sb-nav-link-icon">
<i className="fas fa-chart-area">
</i>
</div>
Charts
</Link>
<Link className="nav-link" to="/tables">
              
<div className="sb-nav-link-icon">
<i className="fas fa-table"></i>
              </div>
              Tables
            </Link>
          </div>
        </div>

        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;