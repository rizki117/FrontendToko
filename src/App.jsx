
import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "./routes/PublicRoute";
{/* Public Router */}
import LoginPage from "./pages/LoginPage";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
{/* Akhir Public Router */}


import PrivateRoute from "./routes/PrivateRoute";
{/* Private Router */}
import DashboardAdmin from "./components/mydashboard/DashboardAdmin";

import DashboardHome from "./components/mydashboard/DashboardHome";

import Myproduk from "./pages/Myproduk";
{/* Akhir Private Router */}




const App = () => {
  return (
    <Routes>
        
  {/* Semua halaman yang punya navbar */}
<Route element={<Navbar />}>
   <Route path="/" element={<Home />} />
   <Route path="/produk" element={<Produk />} />  
</Route>        

<Route element={<PublicRoute />}>
<Route path="/login" element={<LoginPage />} />
</Route>

<Route element={<PrivateRoute />}> 
<Route path="/dashboard" element={<DashboardAdmin />} >
          
    <Route index element={<DashboardHome />} />
        
 <Route path="produk" element={<Myproduk />} />
     
</Route> 
</Route> 
  
  
</Routes>
  );
};

export default App;
