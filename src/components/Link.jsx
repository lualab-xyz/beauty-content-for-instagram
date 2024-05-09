
// import React from 'react';
import PropTypes from 'prop-types';

function Link({ href, text, target, className }) {
    const rel = target === '_blank' ? 'noopener noreferrer' : null;

    return (
        <a href={href} target={target} rel={rel} className={className}>
            {text}
        </a>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.string, // Opcional: '_blank', '_self', etc.
    className: PropTypes.string, // Opcional: Clases CSS adicionales
};

export default Link;
