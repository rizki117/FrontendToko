import React from "react";
import { Button, Spinner } from "react-bootstrap";

const GoogleLogin = ({ loading, setLoading }) => {
  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    console.log("Google login clicked");
  };

  return (
    <div className="d-grid gap-2 mb-3">
      <Button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="d-flex align-items-center justify-content-center gap-2"
        style={{ backgroundColor: "white", color: "#555", border: "1px solid #ddd" }}
      >
        {loading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <>
            {/* Inline SVG Google */}
            <svg width="20" height="20" viewBox="0 0 533.5 544.3">
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-18.6-1.5-36.5-4.3-53.8H272v101.8h146.9
                   c-6.3 33.9-25.1 62.7-53.4 82v68h86.2c50.4-46.4 
                   79.8-114.8 79.8-198z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c72.9 0 134.1-24.1 178.8-65.5l-86.2-68
                   c-24 16.1-55 25.7-92.6 25.7-71.3 0-131.8-48.1
                   -153.5-112.7H32.5v70.9C77 482.5 168.6 544.3 
                   272 544.3z"
              />
              <path
                fill="#FBBC05"
                d="M118.5 322.8c-5.4-16-8.5-33-8.5-50.4s3.1-34.4
                   8.5-50.4V151H32.5C11.7 191.8 0 233.4 0 
                   278.4s11.7 86.6 32.5 127.4l86-83z"
              />
              <path
                fill="#EA4335"
                d="M272 107.4c39.6 0 75.1 13.6 103 40.2l77.1-77.1
                   C407.6 24.1 346.4 0 272 0 168.6 0 77 61.8 
                   32.5 151l86 70.9c21.7-64.6 82.2-112.5 
                   153.5-112.5z"
              />
            </svg>
            <span>Continue with Google</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default GoogleLogin;