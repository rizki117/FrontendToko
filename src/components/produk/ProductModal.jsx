import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ShoppingCart, CreditCard, MessageCircle } from "lucide-react";

const ProductModal = ({ show, handleClose, product }) => {
  if (!product) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="img-fluid mb-3"
          style={{ borderRadius: "8px" }}
        />
        <p>{product.description}</p>
        <h5 className="text-danger fw-bold">
          Rp
          {typeof product.price === "number"
            ? product.price.toLocaleString("id-ID")
            : product.price}
        </h5>
      </Modal.Body>

      {/* Footer tombol dengan icon */}
      <Modal.Footer className="d-flex justify-content-between w-100">
        <Button variant="primary">
          <ShoppingCart size={16} className="me-1" />
          Add Cart
        </Button>
        <Button variant="success">
          <CreditCard size={16} className="me-1" />
          Beli
        </Button>
        <Button variant="danger">
          <MessageCircle size={16} className="me-1" />
          Chat Penjual
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;