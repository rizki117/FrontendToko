import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./OkyakuNavbar.module.css";

import CartIcon from "./CartIcon";
import WishListIcon from "./WishListIcon";
import OrderIcon from "./OrderIcon";  // ✅ tambahkan import

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignInButton from "./SignInButton";
import UserDropdown from "./UserDropdown";

import useGetMe from "../../hooks/useGetMe";

const OkyakuNavbar = () => {
  const navigate = useNavigate();
  const { user, loading } = useGetMe();

  const [logoutLoading, setLogoutLoading] = React.useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      localStorage.removeItem("accessToken");
      window.location.reload();
    } finally {
      setLogoutLoading(false);
    }
  };

  const handleSignIn = () => navigate("/login");

  return (
    <nav className={styles["custom-navbar"]}>
      <Link to="/" className={styles["navbar-brand"]}>
        <Logo />
      </Link>

      <SearchBar />

      {loading ? null : user ? (
        <div className={styles.navActions}>
          <WishListIcon count={2} />   {/* dari API */}
          <CartIcon count={5} />       {/* dari API */}
          <OrderIcon count={3} />      {/* ✅ tambahkan di sini */}
          <UserDropdown
            user={user}
            onLogout={handleLogout}
            logoutLoading={logoutLoading}
          />
        </div>
      ) : (
        <SignInButton onClick={handleSignIn} />
      )}
    </nav>
  );
};

export default OkyakuNavbar;