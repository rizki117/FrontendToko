import React from "react";
import { Heart } from "lucide-react";

const WishlistTab = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-tab-item ${isActive ? 'active wishlist' : ''}`}
    aria-label="Wishlist"
  >
    <Heart className="nav-tab-icon" />
    <span className="nav-tab-label">Wishlist</span>
    <div className="nav-tab-indicator"></div>
  </button>
);

export default WishlistTab;