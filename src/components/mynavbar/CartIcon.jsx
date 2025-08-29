import React from "react";
import { Link } from "react-router-dom";
import styles from "./OkyakuNavbar.module.css";

const CartIcon = ({ count }) => {
  return (
    <Link to="/cart" className={styles.iconWrapper}>
      <i className="fas fa-shopping-cart"></i>
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </Link>
  );
};

export default CartIcon;