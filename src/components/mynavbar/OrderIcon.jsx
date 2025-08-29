import React from "react";
import { Link } from "react-router-dom";
import styles from "./OkyakuNavbar.module.css";

const OrderIcon = ({ count }) => {
  return (
    <Link to="/orders" className={styles.iconWrapper}>
      <i className={`fas fa-box ${styles.icon}`}></i>
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </Link>
  );
};

export default OrderIcon;