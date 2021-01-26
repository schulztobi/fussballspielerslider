import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

export const Slider = ({slides}) => {
    const [current,setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.lenght <=0) {
        return null
    }



    return (
       
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
            return (
                <div 
                className={index === current ? "slide active" : "slide"} 
                key={index}>
                    {index === current && ( <div className="slide-card">
                    <h1 className="slide-platz">{slide.platz}</h1>
                    <img src={slide.image} alt="" className="slide-image"/>
                    <h2 className="slide-name">{slide.name}</h2>
                    <h3 classname="slide-verein">{slide.verein}</h3>
                    </div>
                    )} 
                </div>
            )
            
        })}
        </section>
    )
}
