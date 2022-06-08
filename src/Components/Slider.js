import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import { Link } from "react-scroll"

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (
        <div id="products">
            <div className="f-heading">
                <h1>Productos en Promoción</h1>

            </div>
            <button className="cv-btn"><Link to="subscribe" >Solicita el tuyo   </Link></button>
            <div className="container-slider">

                {dataSlider.map((obj, index) => {
                    return (
                        <>

                            <div
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + `assets/cel${index + 1}.jpg`}
                                />

                            </div>
                            <div className="description">
                                <h3>{obj.title}</h3>
                                <p>Tenemos los mejores equipos y a los mejores precios del mercado</p>
                            </div>
                        </>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className="container-dots">
                    {Array.from({ length: 5 }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        </div>

    )
}