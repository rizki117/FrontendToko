
import React from "react";
import useGenerikFetch from "../../hooks/useGenerikFetch";
import { getAllProduk } from "../../services/produkService";

const ProdukList = () => {
  // Fetch data produk menggunakan React Query
  const { data, isLoading, error } = useGenerikFetch("produk", getAllProduk);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="produk-list">
      {data.length === 0 ? (
        <p>Belum ada produk</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map((produk) => (
            <li
              key={produk.uuid}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "12px",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* Gambar produk */}
              <img
                src={
                  produk.gambar.startsWith("http")
                    ? produk.gambar
                    : `http://localhost:5000/images/${produk.gambar}`
                }
                alt={produk.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />

              {/* Info produk */}
              <div>
                <h3>{produk.name}</h3>
                <p>Harga: Rp {produk.price}</p>
                <p>{produk.description}</p>
                <p>
                  Penjual: {produk.User.name} ({produk.User.email})
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProdukList;