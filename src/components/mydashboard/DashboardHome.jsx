import React from "react";
import Cards from "./Cards";
import DataTableCard from "./DataTableCard";
import useGetMe from "../../hooks/useGetMe";

const DashboardHome = () => {
  const { user, loading, error } = useGetMe();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Gagal memuat data user"}</p>;

  // Fungsi untuk menentukan ucapan
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 11) return "Selamat Pagi";
    if (hour >= 11 && hour < 15) return "Selamat Siang";
    if (hour >= 15 && hour < 18) return "Selamat Sore";
    return "Selamat Malam";
  };

  return (
    <>
      <h3 className="mt-2">
        {getGreeting()}, {user?.name ? user.name : "User"}
      </h3>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <Cards />
      <DataTableCard />
    </>
  );
};

export default DashboardHome;