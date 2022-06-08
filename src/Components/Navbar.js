import React from 'react'
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="main" className="logo" smooth={true} duration={2000}>
                    <img src="assets/03 Tipografia.png" alt="apple" />
                </Link>
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li> <Link to="main" className="active" smooth={true} duration={1000}>Inicio</Link></li>
                    <li> <Link to="features" className="active" smooth={true} duration={1000}>Nosotros</Link></li>
                    <li> <Link to="services" className="active" smooth={true} duration={1000}>Servicios</Link></li>
                    <li> <Link to="products" className="active" smooth={true} duration={1000}>Productos</Link></li>
                    <li> <Link to="subscribe" className="active" smooth={true} duration={1000}>Contáctanos</Link></li>


                </ul>

            </nav>
        </div>
    )
}

export default Navbar
