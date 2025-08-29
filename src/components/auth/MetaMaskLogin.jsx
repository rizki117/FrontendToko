import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import MetaMaskLogo from "../../assets/mask.png";

const MetaMaskLogin = () => {
  const [loading, setLoading] = useState(false);

  // Deteksi platform
  const getMobileOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) return "android";
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "ios";
    return "other";
  };

  const handleMetaMaskLogin = async () => {
    try {
      setLoading(true);

      if (window.ethereum) {
        // MetaMask di browser
        const accounts = await window.ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        console.log("MetaMask login sukses:", accounts[0]);
        alert(`MetaMask login sukses: ${accounts[0]}`);
      } else {
        // Mobile - perbaikan URL
        const os = getMobileOS();
        
        if (os === "android" || os === "ios") {
          // Alternatif 1: Deep link langsung
          const currentUrl = window.location.href;
          const urlWithoutProtocol = currentUrl.replace(/^https?:\/\//, '');
          const metamaskLink = `https://metamask.app.link/dapp/${urlWithoutProtocol}`;
          
          // Alternatif 2: Jika alternatif 1 gagal, gunakan ini:
          // const metamaskLink = `metamask://dapp/${urlWithoutProtocol}`;
          
          console.log("Redirecting to:", metamaskLink);
          
          // Coba buka MetaMask
          window.location.href = metamaskLink;
          
          // Fallback: buka app store jika MetaMask tidak terpasang
          setTimeout(() => {
            if (os === "android") {
              window.open("https://play.google.com/store/apps/details?id=io.metamask", "_blank");
            } else {
              window.open("https://apps.apple.com/app/metamask/id1438144202", "_blank");
            }
          }, 2000);
        } else {
          // Desktop tapi tidak ada MetaMask
          if (window.confirm("MetaMask tidak terpasang. Install sekarang?")) {
            window.open("https://metamask.io/download.html", "_blank");
          }
        }
      }
    } catch (err) {
      console.error("MetaMask login gagal:", err);
      
      // Handle specific errors
      if (err.code === 4001) {
        alert("Login dibatalkan oleh user.");
      } else if (err.code === -32002) {
        alert("Request sudah pending. Cek MetaMask app.");
      } else {
        alert("Login gagal. Pastikan MetaMask sudah terpasang dan koneksi disetujui.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-grid gap-2 mb-3">
      <Button
        onClick={handleMetaMaskLogin}
        disabled={loading}
        className="d-flex align-items-center justify-content-center gap-2"
        style={{ backgroundColor: "#FFA680", color: "white", border: "none" }}
      >
        {loading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <>
            <img src={MetaMaskLogo} alt="MetaMask" width="25" height="25" />
            <span>Connect with MetaMask</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default MetaMaskLogin;