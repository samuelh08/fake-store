import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import { getProduct } from '../api/products';

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  async function loadProduct(id) {
    setLoading(true);
    const json = await getProduct({ id });
    setProduct(json);
    setLoading(false);
  }

  useEffect(() => {
    loadProduct(id);
  }, [id]);

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
      <div className="m-3 d-flex justify-content-start">
        <div className="m-1 p-2">
          <img
            src={product.image}
            alt={`Product ${id}`}
            style={{ objectFit: 'contain', width: '300px' }}
          />
        </div>
        <div className="m-1 p-2 d-flex align-self-stretch flex-column justify-content-start flex-shrink-1">
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <p>
            {product.rating?.rate} stars | {product.rating?.count} reviews
          </p>
          <div>
            <p>
              <strong>About this item: </strong>
            </p>
            <p>{product?.description}</p>
          </div>
          <p>
            <strong>Price: </strong>${product.price}
          </p>
        </div>
      </div>
    </>
  );
}
