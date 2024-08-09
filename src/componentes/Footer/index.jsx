import React from 'react';
import ContactForm from '../contactForm';
import styles from './footer.module.css';
import FooterCentral from '../contactoFooter';
import ImgFooter from "/img/paella.webp"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.imgFooter}>
                <img src={ImgFooter} alt="Pasta con camarones" />
            </div>
            <div className={styles.contact}>
                <FooterCentral />
            </div>
            <div className={styles.form}>
                <ContactForm />
            </div>
        </footer>
    );
}

export default Footer;
