import HeroSection from '../../componentes/HeroSection';
import "./aboutUs.css"

function AboutUs() {
    return (
        <div>
            <HeroSection
                imgSrc="/img/mesa-entradas-2.jpg"
                imgAlt="Mesa de entradas y aperitivos" // <-- Asegúrate de pasar imgAlt
                title="Delicias en Casa"
                text="Cada celebración merece ser recordada, y en Borcelle House Catering, estamos aquí para que usted se enfoque en lo más importante: disfrutar. Entendemos que planificar un evento puede ser abrumador, y es por eso que nuestro servicio de catering se encarga de todo."
                buttonLink="/nosotros"
                buttonText="Contáctanos"
                imgPosition="right"
                imgBorderRadius="50%"
            />
            <section className='sectionAbout'>
                <div className="about-us-container">
                    <h1 className="about-us-title">Sobre Nosotros</h1>
                    <p className="about-us-description">
                        En <strong>Delicias en Casa</strong>, nos apasiona llevar la mejor experiencia culinaria a la comodidad de tu hogar. Con más de 10 años de experiencia en el sector de catering, nos especializamos en ofrecer menús personalizados, preparados con ingredientes frescos y de alta calidad.
                    </p>
                    <p className="about-us-description">
                        Nuestro equipo está compuesto por chefs expertos que entienden la importancia de cada detalle, desde la selección de los ingredientes hasta la presentación final de cada plato. Nos esforzamos por crear momentos inolvidables a través de la comida, adaptándonos a las necesidades y gustos de cada cliente.
                    </p>
                    <p className="about-us-description">
                        Ya sea para una cena íntima, una celebración familiar, o un gran evento, estamos aquí para hacer que cada ocasión sea especial. Creemos que la buena comida une a las personas, y en <strong>Delicias en Casa</strong>, nos enorgullece ser parte de tus momentos más preciados.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;