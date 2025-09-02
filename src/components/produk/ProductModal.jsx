import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ShoppingCart, CreditCard, MessageCircle } from "lucide-react";
import { getAbsoluteUrl } from './getAbsoluteUrl'; // import util

const ProductModal = ({ show, handleClose, product, onAddCart, onBuy }) => {
  if (!product) return null;

  const openWhatsApp = (phone, product) => {
    let rawNumber = String(phone || '').replace(/[^0-9]/g, '');
    if (rawNumber.startsWith('0')) rawNumber = '62' + rawNumber.slice(1);
    if (!rawNumber.startsWith('62')) {
      alert('Nomor HP tidak valid.');
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: '2-digit' });
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });

    // buat URL absolut untuk gambar
    const imageUrl = getAbsoluteUrl(product.imageUrl);

    const message = `
[ Pesan Otomatis: Tanggal ${date} | Waktu ${time} ]

Saya tertarik dengan produk berikut:

🔖 *Nama:* ${product.title}
📝 *Detail:* ${product.description || '-'}

📷 Lihat gambarnya: ${imageUrl}

Mohon info lebih lanjut mengenai ketersediaan dan pemesanan. Terima kasih!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${rawNumber}?text=${encodedMessage}`;
    window.open(waLink, '_blank');
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={getAbsoluteUrl(product.imageUrl)} // juga bisa pakai URL absolut di modal
          alt={product.title}
          className="img-fluid mb-3"
          style={{ borderRadius: "8px" }}
        />
        <p>{product.description}</p>
        <h5 className="text-danger fw-bold">
          Rp {typeof product.price === "number"
            ? product.price.toLocaleString("id-ID")
            : product.price}
        </h5>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-between w-100">
        <Button variant="primary" onClick={() => onAddCart && onAddCart(product)}>
          <ShoppingCart size={16} className="me-1" /> Add Cart
        </Button>

        <Button variant="success" onClick={() => onBuy && onBuy(product)}>
          <CreditCard size={16} className="me-1" /> Beli
        </Button>

        <Button variant="danger" onClick={() => openWhatsApp(product.sellerPhone, product)}>
          <MessageCircle size={16} className="me-1" /> Chat Penjual
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;