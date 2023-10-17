import React, {useState, useEffect} from "react";

import {list} from '../data';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const Slider1 = () => {
    const [people, setPeople] = useState(list);
    const [curentPerson, setCurentPerson] = useState(0);

    const prevSlide = () => {
        setCurentPerson((oldPerson) => {
            const result = (oldPerson - 1 + people.length) % people.length;
            return result;
        });
    };
    const nextSlide = () => {
        setCurentPerson((oldPerson) => {
            const result = (oldPerson + 1) % people.length;
            return result;
        });
    };

    useEffect(() => {
        let sliderInt = setInterval(() => {
            nextSlide()
        }, 10000);

        return () => {
            clearInterval(sliderInt);
        }
    }, [curentPerson]);

    return (
        <div className="slider-container">
            {people.map((person, indexP) => {
                const {id, image, name, title, quote} = person;
                return (
                    <div 
                        key={id}
                        className="slide"
                        style={{
                            transform: `translateX(${100 * (indexP - curentPerson)}%`,
                            opacity: indexP === curentPerson ? 1 : 0,
                            visibility: indexP === curentPerson ? 'visible' : 'hidden'
                        }}

                    >
                        <img src={image} alt={name} className="person-img" />
                        <h5 className="name">{name}</h5>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon"/>
                    </div>
                );
            })}
            <button type="button" className="prev" onClick={prevSlide}>
                <FiChevronLeft />
            </button>
            <button type="button" className="next" onClick={nextSlide}>
                <FiChevronRight />
            </button>
        </div>
    );
};

export default Slider1;