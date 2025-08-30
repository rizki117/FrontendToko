import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import produk from "./produk";   // ✅ import dari file terpisah

const ProductList = () => {
  return (
    <Container className="py-4">
      <Row>
        {produk.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;