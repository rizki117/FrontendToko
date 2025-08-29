import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Sneakers Keren",
    description: "Sneakers nyaman untuk aktivitas sehari-hari",
    price: 79.99,
    imageUrl: "/images/sepatu.jpeg",
  },
  {
    title: "Tas Ransel Stylish",
    description: "Tas ransel multifungsi dan tahan lama",
    price: 49.99,
    imageUrl: "/images/tas.jpeg",
  },
  {
    title: "Jam Tangan Elegan",
    description: "Jam tangan modern dan elegan untuk semua acara",
    price: 129.99,
    imageUrl: "/images/jam.jpeg",
  },
  {
    title: "Headphone Wireless",
    description: "Suara jernih dan nyaman dipakai lama",
    price: 99.99,
    imageUrl: "/images/henset.jpeg",
  },
];

const ProductList = () => {
  const handleAddToCart = (title) => {
    alert(`Produk "${title}" ditambahkan ke keranjang!`);
  };

  return (
    <Container className="py-4">
      <Row>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={() => handleAddToCart(product.title)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;