// import React from 'react';
import Link from './Link';

function Footer() {
    return (
        <footer>
        <div className="redes-sociales">
            <a href="https://www.instagram.com/tuinstagram" target="_blank"><img src="icono-instagram.png" alt="Instagram" /></a>
        </div>
        <div className="enlaces">
            {/* <a href="#servicios">Servicios</a>
            <a href="#privacidad">Privacidad</a>
            <a href="#contacto">Contacto</a> */}
            <Link href="#servicios" text="Servicios" target="_self" />
        </div>
        </footer>
    );
}

export default Footer;