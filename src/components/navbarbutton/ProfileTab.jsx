import React from "react";
import { User } from "lucide-react";

const ProfileTab = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-tab-item ${isActive ? 'active profil' : ''}`}
    aria-label="Profil"
  >
    <User className="nav-tab-icon" />
    <span className="nav-tab-label">Profil</span>
    <div className="nav-tab-indicator"></div>
  </button>
);

export default ProfileTab;