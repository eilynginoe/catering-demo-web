import React from 'react';
import styles from './formulario.module.css';

function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <h2 className='titleForm'>Recibe tu cotización a medida</h2>
      <div className={styles.formGroup}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="correo">Correo Electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
