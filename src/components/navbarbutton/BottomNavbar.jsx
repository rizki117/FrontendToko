import React, { useState } from "react";
import HomeTab from "./HomeTab";
import SearchTab from "./SearchTab";
import WishlistTab from "./WishlistTab";
import OrdersTab from "./OrdersTab";
import ProfileTab from "./ProfileTab";
import  "./Ramping.css";

const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState("beranda");

  return (
    <nav className="bottom-navbar">
      <div className="nav-tabs-container">
        <HomeTab isActive={activeTab === "beranda"} onClick={() => setActiveTab("beranda")} />
        <SearchTab isActive={activeTab === "cari"} onClick={() => setActiveTab("cari")} />
        <WishlistTab isActive={activeTab === "wishlist"} onClick={() => setActiveTab("wishlist")} />
        <OrdersTab isActive={activeTab === "pesanan"} onClick={() => setActiveTab("pesanan")} />
        <ProfileTab isActive={activeTab === "profil"} onClick={() => setActiveTab("profil")} />
      </div>
    </nav>
  );
};

export default BottomNavbar;