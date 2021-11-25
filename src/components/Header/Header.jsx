import React from 'react';
import './Header.css';




const Header = () => {
    return (

        <header className="header">
          <i className="fas fa-bars"
                    onClick={(showMenu) => {
                        const menu = document.querySelector("#menu");
                        menu.classList.toggle("show-menu");
                    }}> </i>
            <img className="logo" src="./assets/img/logo.png" alt="logo" />
            <nav className="menu" id="menu">
                <a className="link" href="#search">Retos</a>
                <a className="link"  href="https://blissful-golick-1b3e42.netlify.app/" target="blank">Portafolio</a>
            </nav>
        </header>



    );
}

export default Header;