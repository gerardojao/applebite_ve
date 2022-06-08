import React from 'react'
import { Carousel } from "react-bootstrap"
import dataSlider from './dataSlider'
import { Link } from "react-scroll"
// import './Slider.css'
const CarouselImg = () => {
    return (
        <div id="products">
            <div className="f-heading">
                <h1>Productos en Promoción</h1>

            </div>
            <button className="cv-btn"><Link to="subscribe" >Solicita el tuyo   </Link></button>
            <Carousel className="carouselContainer" >

                {dataSlider.map((obj) => {
                    console.log(obj);
                    return (
                        <Carousel.Item className="individualContainer" key={obj.id}>
                            <div className="screen">
                                <img
                                    className="d-block"
                                    src={obj.img}
                                    alt={obj.title}
                                />
                                <Carousel.Caption className="caption">
                                    <h3>{obj.title}</h3>
                                    <p>{obj.description}</p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    )
                })}


            </Carousel>
        </div>
    )
}

export default CarouselImg
