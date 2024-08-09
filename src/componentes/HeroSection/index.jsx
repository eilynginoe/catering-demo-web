import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = ({
  title = 'Default Title',
  text = 'Default Text',
  buttonText = 'Click Here',
  buttonLink = '#',
  imgSrc = '/default-image.jpg',
  imgAlt = 'Default Alt Text',
  imgBorderRadius = '0',
  imgPosition = 'center'
}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textColumn}>
        <h1 className={styles.titleHeroSection}>{title}</h1>
        <p>{text}</p>
        <Link to={buttonLink} className={styles.button}>{buttonText}</Link>
      </div>
      <div className={styles.imageColumn}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            borderRadius: imgBorderRadius,
            objectPosition: imgPosition,
          }}
        />
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgBorderRadius: PropTypes.string,
  imgPosition: PropTypes.string,
};

export default HeroSection;

