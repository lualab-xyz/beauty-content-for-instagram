import React from 'react';
import Button from './Button';

function Hero() {
    return (
        <section className="hero">
        <img src="imagen-hero.jpg" alt="Kits de Contenido de Instagram" />
        <div className="hero-text">
            <h1>Kits de contenido de Instagram para peluquerías, esteticistas y maquilladoras</h1>
            <Button text="Tienda" onClick={() => {/* Manejar clic en el botón */}} />
        </div>
        </section>
    );
}

export default Hero;