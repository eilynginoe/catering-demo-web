import React from 'react';
import './boton.css';

const Button = ({ children, onClick, type = 'button' }) => {
    return (
        <div className='boton-container'>
            <button className="button" onClick={onClick} type={type}>
                {children}
            </button>
        </div>
    );
};

export default Button;
