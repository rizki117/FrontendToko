import React from "react";
import { Home } from "lucide-react";

const HomeTab = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-tab-item ${isActive ? 'active beranda' : ''}`}
    aria-label="Beranda"
  >
    <Home className="nav-tab-icon" />
    <span className="nav-tab-label">Beranda</span>
    <div className="nav-tab-indicator"></div>
  </button>
);

export default HomeTab;