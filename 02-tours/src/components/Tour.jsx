import React, {useState} from 'react';

import mystyles from './Tour.module.css';

const Tour = (props) => {
    const [isFull, setIsFull] = useState(false);

    const {id, price, image, name, info} = props.tourinfo;

    const fullHandler = () => {
        setIsFull(!isFull);
    };

    return (
        <div className={mystyles['single-tour']}>
            <div>
                <img src={image} alt={name} className={mystyles.img}/>
            </div>
            <span className={mystyles['tour-price']}>{price}</span>
            <div className={mystyles['tour-info']}>
                <h5>{name}</h5>
                {isFull && <p>{info} <button className={mystyles['info-btn']} onClick={fullHandler} >Show less</button></p>}
                {!isFull && <p>{info.slice(0, 200)}... <button className={mystyles['info-btn']} onClick={fullHandler} >Read more</button></p>}
                <button className={`btn-block ${mystyles['delete-btn']}`} onClick={() => props.deleteTour(id)} >Not Interested</button>
            </div>
            
        </div>
    );
};

export default Tour;