// routes.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from './pages/paginaBase';
import Home from './pages/home';
import ProductPage from './pages/ProductPage';
import MenuPage from './pages/menuPages';
import AboutUs from './pages/about-us';
import ContactPage from './pages/contacto';
import TerminosLegales from './pages/legalTerms';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<MenuPage />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/legal" element={<TerminosLegales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

