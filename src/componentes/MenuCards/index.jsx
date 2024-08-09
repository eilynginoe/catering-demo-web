import React from 'react';
import '../MenuSection/menuSection.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const MenuCard = ({ imgSrc, title }) => {
  return (
    <Link to={`/products/${encodeURIComponent(title)}`} className="menuCard">
      <img src={imgSrc} alt={title} />
      <div className="menuCardTitle">{title}</div>
    </Link>
  );
};

export default MenuCard;
