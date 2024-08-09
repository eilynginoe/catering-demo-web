import React, { useEffect, useState } from 'react';
import './menuPages.css'; // Asegúrate de que el archivo CSS está importado
import Button from '../../componentes/boton';
import HeroSection from '../../componentes/HeroSection';

function MenuPage() {
    const [categories, setCategories] = useState([]);

    const handleClick = () => {
        alert('¡Botón clicado!');
      };

    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                const grouped = data.productos.reduce((acc, product) => {
                    if (!acc[product.categoria]) {
                        acc[product.categoria] = [];
                    }
                    acc[product.categoria].push(product);
                    return acc;
                }, {});

                setCategories(Object.entries(grouped));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <HeroSection
                imgSrc="./img/c-asado3.jpg"
                imgAlt="Carne asada" // <-- Asegúrate de pasar imgAlt
                title="Explora Nuestro Menu"
                text="Cada celebración merece ser recordada, y en Borcelle House Catering, estamos aquí para que usted se enfoque en lo más importante: disfrutar. Entendemos que planificar un evento puede ser abrumador, y es por eso que nuestro servicio de catering se encarga de todo."
                buttonLink="/menu"
                buttonText="Contáctanos"
                imgPosition="right"
                imgBorderRadius="50%"
            />
        <section className="menuPage">
            {categories.map(([category, products], index) => (
                <div
                    key={category}
                    className={`category-section ${index % 2 === 0 ? 'bg-light' : 'bg-gradient'}`}
                >
                    <h2 className="category-title">{category}</h2>
                    <div className="category-grid">
                        {products.map(product => (
                            <div key={product.id} className="menuCardPages">
                                <img src={`/${product.imagen}`} alt={product.nombre} className="menuCardImg" />
                                <div className="menuCardContent">
                                    <h3 className="menuDimTitle">{product.nombre}</h3>
                                    <p className="menuCardDescription">{product.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='containerBoton'>
                        <Button onClick={handleClick}>CONTÁCTANOS</Button>
                    </div>
                </div>
            ))}
        </section>
        </div>
    );
}

export default MenuPage;
