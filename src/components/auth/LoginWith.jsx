import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import MetaMaskLogin from "./MetaMaskLogin";   // ✅ Tambahkan
import EmailLoginForm from "./EmailLoginForm";

const LoginWith = () => {
  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const [loadingMetaMask, setLoadingMetaMask] = useState(false); // ✅ state baru

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <Card className="shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h2>Welcome Back</h2>
            <p className="text-muted">Sign in to continue to your account</p>
          </Card.Title>

          {/* Social Login */}
          <GoogleLogin loading={loadingGoogle} setLoading={setLoadingGoogle} />
          <FacebookLogin loading={loadingFacebook} setLoading={setLoadingFacebook} />
          <MetaMaskLogin loading={loadingMetaMask} setLoading={setLoadingMetaMask} /> {/* ✅ Baru */}

          <hr />

          {/* Email Login Form */}
          <EmailLoginForm login={login} loading={loading} error={error} navigate={navigate} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginWith;