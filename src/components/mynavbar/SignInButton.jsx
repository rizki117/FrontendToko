import React from "react";
import styles from "./OkyakuNavbar.module.css";

const SignInButton = ({ onClick }) => (
  <button className={styles["signin-btn"]} onClick={onClick}>
    <span className={styles["signin-text"]}>Masuk</span>
  </button>
);

export default SignInButton;