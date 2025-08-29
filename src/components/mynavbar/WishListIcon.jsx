import React from "react";
import { Link } from "react-router-dom";
import styles from "./OkyakuNavbar.module.css";

const WishListIcon = ({ count }) => {
  return (
    <Link to="/wishlist" className={styles.iconWrapper}>
      <i className="fas fa-heart"></i>
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </Link>
  );
};

export default WishListIcon;