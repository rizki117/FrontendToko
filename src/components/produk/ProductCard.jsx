// ProductCard.jsx
import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import ProductModal from "./ProductModal";

const ProductCard = ({ title, description, price, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // data produk dikirim ke modal
  const productData = { title, description, price, imageUrl };

  return (
    <>
      <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
        <Card
          className="h-100 shadow-sm border-0"
          style={{ borderRadius: "8px", cursor: "pointer" }}
          onClick={handleShow}
        >
          <Card.Img
            variant="top"
            src={imageUrl}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <Card.Body className="d-flex flex-column p-3">
            <Card.Title
              className="fw-normal mb-2"
              style={{
                fontSize: "14px",
                lineHeight: "1.4",
                color: "#333333",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Card.Title>

            <Card.Text
              className="text-muted flex-grow-1 mb-2"
              style={{
                fontSize: "12px",
                lineHeight: "1.3",
                color: "#757575",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Card.Text>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span
                className="fw-bold"
                style={{
                  fontSize: "16px",
                  color: "#ee4d2d",
                  letterSpacing: "-0.2px",
                  fontWeight: "600",
                }}
              >
                Rp
                {typeof price === "number"
                  ? price.toLocaleString("id-ID")
                  : price}
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal dipanggil di sini */}
      <ProductModal
        show={showModal}
        handleClose={handleClose}
        product={productData}
      />
    </>
  );
};

export default ProductCard;