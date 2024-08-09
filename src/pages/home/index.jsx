import HeroSection from '../../componentes/HeroSection';
import IntroSection from '../../componentes/Intro';
import MenuSection from '../../componentes/MenuSection';
import Galeria from '../../componentes/Galeria';

function Home() {
    return (
        <div>
            <HeroSection
                imgSrc="/img/pasta-sarten.webp"
                imgAlt="Descripción de la imagen" // <-- Asegúrate de pasar imgAlt
                title="Momentos Inolvidables"
                text="Cada celebración merece ser recordada, y en Borcelle House Catering, estamos aquí para que usted se enfoque en lo más importante: disfrutar. Entendemos que planificar un evento puede ser abrumador, y es por eso que nuestro servicio de catering se encarga de todo."
                buttonLink="/contacto"
                buttonText="Contáctanos"
                imgPosition="right"
                imgBorderRadius="10px"
            />
            <IntroSection />
            <MenuSection />
            <Galeria />

            {/* Resto del contenido de la página */}
        </div>
    )
}

export default Home;