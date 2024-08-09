import HeroSection from '../../componentes/HeroSection';
import "./contacto.css"


function ContactPage() {
    return (
        <div>
            <HeroSection
                imgSrc="/img/chef-cocinando.jpg"
                imgAlt="Chef Cocinando" // <-- Asegúrate de pasar imgAlt
                title="Momentos Inolvidables"
                text="Cada celebración merece ser recordada, y en Borcelle House Catering, estamos aquí para que usted se enfoque en lo más importante: disfrutar. Entendemos que planificar un evento puede ser abrumador, y es por eso que nuestro servicio de catering se encarga de todo."
                buttonLink="/contacto"
                buttonText="Contáctanos"
                imgPosition="right"
                imgBorderRadius="50%"
            />
            <section className='sectionContacto'>
                <div className="contact-page-container">
                    <h1 className="contact-page-title">Contáctanos</h1>

                    <p className="contact-page-description">
                        En <strong>Delicias en Casa</strong>, estamos comprometidos en ofrecerte la mejor experiencia culinaria para cualquier ocasión. Ya sea que estés planificando un evento grande o necesites un servicio de comidas personalizado en tu hogar, estamos aquí para ayudarte.
                    </p>
                    <p className="contact-page-description">
                        Completa el formulario a continuación para solicitar una cotización, hacer una consulta o simplemente para decir hola. Nos encanta conocer a nuestros clientes y entender exactamente lo que necesitan para que su evento o comida sea perfecto.
                    </p>
                    <p className="contact-page-description">
                        Si tienes alguna pregunta rápida, revisa nuestras preguntas frecuentes más abajo. ¡Puede que encuentres la respuesta que estás buscando!
                    </p>

                    <p className="contact-page-description">
                        Dirección: Calle Ejemplo 123, Ciudad, País<br />

                        Teléfono: +123 456 7890<br />

                        Email: contacto@ejemplo.com <br />
                        
                        No dudes en preguntar! Estamos para servirte!
                    </p>

                    <div className="faq-section">
                        <h2 className="faq-title">Preguntas Frecuentes</h2>

                        <div className="faq-item">
                            <h3 className="faq-question">¿Qué tipos de eventos cubren sus servicios de catering?</h3>
                            <p className="faq-answer">
                                Ofrecemos servicios de catering para una amplia gama de eventos, incluyendo bodas, cumpleaños, reuniones corporativas, cenas privadas y más. Nos adaptamos a las necesidades específicas de cada cliente para asegurar que cada evento sea un éxito.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">¿Pueden acomodar restricciones dietéticas?</h3>
                            <p className="faq-answer">
                                Sí, podemos ajustar nuestros menús para adaptarnos a una variedad de restricciones dietéticas, incluyendo opciones vegetarianas, veganas, sin gluten, y más. Simplemente indícanos tus necesidades al momento de hacer la solicitud.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">¿Cuánto tiempo de anticipación necesito para reservar un servicio de catering?</h3>
                            <p className="faq-answer">
                                Recomendamos reservar nuestro servicio de catering al menos con 2 semanas de anticipación para eventos pequeños y con 1 mes de anticipación para eventos más grandes. Sin embargo, trataremos de acomodar solicitudes de última hora siempre que sea posible.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">¿Qué áreas geográficas cubren sus servicios?</h3>
                            <p className="faq-answer">
                                Actualmente ofrecemos nuestros servicios en la mayoría de las áreas metropolitanas principales. Si estás fuera de esta área, contáctanos y haremos lo posible por llegar hasta ti.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage;