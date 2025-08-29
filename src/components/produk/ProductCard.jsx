import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ProductCard = ({ title, description, price, imageUrl, onAddToCart }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100 shadow-sm border-0">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-bold text-primary">Rp{price.toFixed(2)}</span>
            <Button variant="primary" onClick={onAddToCart}>
              Tambah
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;