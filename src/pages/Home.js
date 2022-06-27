import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const json = await getProducts();
    setProducts(json);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function onClick(event, id) {
    event.stopPropagation();
    navigate(`/detail/${id}`);
  }

  return (
    <>
      <h1
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        Products
      </h1>
      <div className="d-flex flex-wrap align-content-stretch justify-content-around">
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard
              title={item.title}
              image={item.image}
              onClick={function (event) {
                onClick(event, item.id);
              }}
            ></ProductCard>
          </div>
        ))}
      </div>
    </>
  );
}
