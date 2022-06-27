import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './containers/NavBar';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
