import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadProducts() {
    setLoading(true);
    const json = await getProducts();
    setProducts(json);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function onClick(event, id) {
    event.stopPropagation();
    navigate(`/detail/${id}`);
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: '50%',
          left: '50%',
          /* bring your own prefixes */
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
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
