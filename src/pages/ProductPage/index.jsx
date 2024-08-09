import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./productPage.css"
import HeroSection from '../../componentes/HeroSection';

function ProductPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.productos.filter(product => product.categoria === category);
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div>
      <HeroSection
        imgSrc="/img/c-carne-menu.jpg"
        imgAlt="Carne con papas a la francesa" // <-- Asegúrate de pasar imgAlt
        title="Nuestros Servicios y Mejores Productos"
        text="Cada celebración merece ser recordada, y en Borcelle House Catering, estamos aquí para que usted se enfoque en lo más importante: disfrutar. Entendemos que planificar un evento puede ser abrumador, y es por eso que nuestro servicio de catering se encarga de todo."
        buttonLink="/products/:category"
        buttonText="Contáctanos"
        imgPosition="right"
        imgBorderRadius="50%"
      />

      <section className='menuCategorias'>
        <h2 className='tituloCategorias'>{category}</h2>
        <div className="product-grid">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="product-card">
                <img src={`/${product.imagen}`} alt={product.nombre} />
                <h3>{product.nombre}</h3>
                <p>{product.descripcion}</p>
              </div>
            ))
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;


