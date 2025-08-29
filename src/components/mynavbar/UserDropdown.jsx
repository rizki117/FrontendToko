import React from "react";
import styles from "./OkyakuNavbar.module.css";

const UserDropdown = ({ onLogout, logoutLoading, user }) => {
  return (
    <div className="dropdown">
      <button
        className="btn p-0 border-0 bg-transparent"
        type="button"
        id="userMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={user?.avatar || "/images/default-avatar.png"}
          alt="Profile"
          className={styles.avatar}
        />
      </button>

      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="userMenuButton"
      >
        <li>
          <button
            className="dropdown-item"
            onClick={onLogout}
            disabled={logoutLoading}
          >
            {logoutLoading ? "Logging out..." : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;