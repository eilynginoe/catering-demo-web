import { Link } from "react-router-dom";
import "./header.css";
import Logo from "/img/favicon.webp";
import HeaderLink from "../HeaderLink";
import { useState } from "react";



function Header() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <header className="cabecera">
            <Link to="/">
                <section className="logoContainer">
                    <img className="imgLogo" src={Logo} alt="Logo de Borcelle Catering" />
                    <h1 className="logoname">HOME CATERING</h1>
                </section>
            </Link>
            <button
                onClick={toggleMenu}
                className="cabeceraButton">
                <svg className="iconSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
            </button>

            <nav className={`navegacionTabletyPc ${menu ? 'isActive' : ''}`}>
                <HeaderLink url="./" onClick={closeMenu}>HOME</HeaderLink>
                <HeaderLink url="./menu" onClick={closeMenu}>MENU</HeaderLink>
                <HeaderLink url="./nosotros" onClick={closeMenu}>NOSOTROS</HeaderLink>
                <HeaderLink url="./contacto" onClick={closeMenu}>CONTACTO</HeaderLink>
            </nav>
        </header>
    )
}

export default Header;