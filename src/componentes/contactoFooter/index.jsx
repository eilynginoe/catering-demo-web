import React from 'react';
import styles from './contactoFooter.module.css';
import FacebookUrl from '../../assets/facebook.svg';
import InstagramUrl from '../../assets/iconinstagram.svg';
import YoutubeUrl from '../../assets/iconyoutube.svg';
import { Link } from 'react-router-dom'; // Importa el componente Link


function FooterCentral() {
    return (
        <div className={styles.footerCentral}>
            <div className={styles.contactInfo}>
                <h3>Información de Contacto</h3>
                <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
                <p><strong>Teléfono:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> contacto@ejemplo.com</p>
                <p><Link to="/legal" className={styles.legalLink}>Legal Terms</Link></p>
            </div>
            <div className={styles.socialMedia}>
                <h3>Síguenos</h3>
                <div className={styles.socialIcons}>
                    <img src={FacebookUrl} alt="Facebook" className="icon" />
                    <img src={InstagramUrl} alt="Instagram" className="icon" />
                    <img src={YoutubeUrl} alt="Youtube" className="icon" />
                </div>
            </div>
            <div className={styles.logo}>
                <img src="/img/favicon.webp" alt="Logo de Borcelle Home Catering" />
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Eilyn Ginoe Brito. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default FooterCentral;
