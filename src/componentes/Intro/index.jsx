
import React from 'react';
import './IntroSection.css'; // Asegúrate de importar el archivo CSS
import Button from '../boton';

function IntroSection() {
    const handleClick = () => {
        alert('¡Botón clicado!');
    };

    return (
        <section className="introSection">
            <div className='introContainer'>
                <div className="imageColumn">
                    <img src="/img/chef-sirviendo.jpg" alt="Chef preparando un platillo" className="introImage" />
                </div>
                <div className="textColumn">
                    <h1 className="introTitle">Lorem Ipsum</h1>
                    <p className="introText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="introText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="introText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className='containerBoton'>
                        <Button onClick={handleClick}>CONTÁCTANOS</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;


