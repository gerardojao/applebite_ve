import React from 'react'
import { Link } from "react-scroll"



const Box = ({ img, title, description }) => {
    // console.log(img, title);
    return (
        <div className="s-box">
            <div className="s-b-img">

                <img src={img} alt={title} />
            </div>
            <div className="s-b-text">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <Link to="subscribe" className="cv-btn">Solicitar</Link>
            </div>
        </div>
    )
}

export default Box
