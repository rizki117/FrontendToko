import React, { useState, useEffect } from "react";
import styles from "./OkyakuNavbar.module.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Cari produk, toko, atau kategori...");

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth <= 480) setPlaceholder("Cari produk...");
      else if (window.innerWidth <= 600) setPlaceholder("Cari produk, toko...");
      else setPlaceholder("Cari produk, toko, atau kategori...");
    };
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) alert(`Mencari: ${searchQuery}`);
    else alert("Silakan masukkan kata kunci pencarian");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        className={styles["search-input"]}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className={styles["search-btn"]} onClick={handleSearch}>
        Cari
      </button>
    </div>
  );
};

export default SearchBar;