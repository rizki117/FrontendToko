import React from "react";
import { Button, Spinner } from "react-bootstrap";

const FacebookLogin = ({ loading, setLoading }) => {
  const handleFacebookLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    console.log("Facebook login clicked");
  };

  return (
    <div className="d-grid gap-2 mb-3">
      <Button
        onClick={handleFacebookLogin}
        disabled={loading}
        className="d-flex align-items-center justify-content-center gap-2"
        style={{ backgroundColor: "#1877F2", color: "white", border: "none" }}
      >
        {loading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <>
            {/* Inline SVG Facebook */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 
                       12.073c0 5.99 4.388 10.954 10.125 
                       11.854v-8.385H7.078v-3.47h3.047V9.43
                       c0-3.007 1.792-4.669 4.533-4.669 
                       1.312 0 2.686.235 2.686.235v2.953
                       h-1.518c-1.491 0-1.956.925-1.956 
                       1.874v2.25h3.328l-.532 3.47h-2.796
                       v8.385C19.612 23.027 24 18.062 
                       24 12.073z"/>
            </svg>
            <span>Continue with Facebook</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default FacebookLogin;