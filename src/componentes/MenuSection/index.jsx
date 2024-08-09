import React from 'react';
import MenuCard from '../MenuCards'; // Importa el componente de la tarjeta
import './menuSection.css'; // Importa el archivo CSS
import Button from '../boton';

const MenuSection = () => {
  const menuItems = [
    { imgSrc: '/img/c-carne.jpg', title: 'SELECCIÓN DE CARNES' },
    { imgSrc: '/img/pasta-con-camarones.jpg', title: 'APERITIVOS DEL MAR' },
    { imgSrc: '/img/pasta-con-vegetales.jpg', title: 'SELECCIÓN DE PASTAS' },
    { imgSrc: '/img/e-sopa.jpg', title: 'SELECCIÓN DE ENTRADAS' },
    { imgSrc: '/img/salad-ensalada.jpg', title: 'SELECCIÓN DE ENSALADAS' },
    { imgSrc: '/img/pizza.jpg', title: '“kIDS” OPCIONES' },
    { imgSrc: '/img/postre.jpg', title: 'POSTRES' },
    { imgSrc: '/img/bebidas.jpg', title: 'BEBIDAS' },
  ];

  const handleButtonClick = () => {
    alert('¡Botón clicado!');
  };

  return (
    <section className="menuSection">
      <h2 className="menuTitle">Menú</h2>
      <div className="menuGrid">
        {menuItems.map((item, index) => (
          <MenuCard key={index} imgSrc={item.imgSrc} title={item.title} />
        ))}
      </div>
      <div className="buttonContainer">
        <Button onClick={handleButtonClick}>VER MÁS OPCIONES</Button>
      </div>
    </section>
  );
};

export default MenuSection;
