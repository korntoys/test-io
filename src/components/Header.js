import React from 'react';

/*
* Componente para mostar un encabezado en la aplicación
 */
const Header = (props) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">{props.title}</span>
                </nav>
            </header>
        </div>
    );
};

export default Header;
