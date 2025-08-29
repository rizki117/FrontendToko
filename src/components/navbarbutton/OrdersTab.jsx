import React from "react";
import { ShoppingBag } from "lucide-react";

const OrdersTab = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-tab-item ${isActive ? 'active pesanan' : ''}`}
    aria-label="Pesanan"
  >
    <ShoppingBag className="nav-tab-icon" />
    <span className="nav-tab-label">Pesanan</span>
    <div className="nav-tab-indicator"></div>
  </button>
);

export default OrdersTab;