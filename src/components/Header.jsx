// import React from 'react';
import Link from './Link'; 
import logo from '../images/logo-web.png';
import '../styles/Header.scss';


function Header() {
    return (
    <header className="header">
        <div className="header__logo">
            <img className="header__logo-img" src={logo} alt="Logo" />
        </div>
        <nav className="header__menu">
            <ul className="header__ul">
                <li className="header__li">
                <Link href="#contenido" text="Contenido para Instagram" target="_self" className="mi-estilo" />
                <Link href="#calendario" text="Calendario de Contenido" target="_self" className="mi-estilo" />
                <Link href="#titulares" text="Titulares Gancho" target="_self" className="mi-estilo" />
                <Link href="#blog" text="Blog" target="_self" className="mi-estilo" />
                <Link href="#contacto" text="Contacto" target="_self" className="mi-estilo" />
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;
