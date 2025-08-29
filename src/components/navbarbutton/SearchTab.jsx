import React from "react";
import { Search } from "lucide-react";

const SearchTab = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-tab-item ${isActive ? 'active cari' : ''}`}
    aria-label="Cari"
  >
    <Search className="nav-tab-icon" />
    <span className="nav-tab-label">Cari</span>
    <div className="nav-tab-indicator"></div>
  </button>
);

export default SearchTab;