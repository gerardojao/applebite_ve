import React from 'react';
import Navbar from "./Navbar"
import { Link } from "react-scroll"

const Header = () => {

    return (
        <div id="main">
            <Navbar />
            <div className="name-container">
                <img src="assets/ISOTIPO.png" alt="" />
                <div className="name">

                    <h1>Somos <span>APPLE BITE</span></h1>
                    <p className="details"> Tu proveedor de accesorios y equipos IPHONE de última generación. Somos algo más que tu proveedor de confianza. </p>
                    <div className="header-btns">
                        <button className="cv-btn"><Link to="products" >Productos   </Link></button>
                        <button className="cv-btn1"><Link to="subscribe" >Contáctanos   </Link></button>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;