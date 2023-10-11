import mystyles from './Review.module.css';

import {FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Review = (props) => {
    const {name, job, image, text} = props.info
    return (
        <div className={mystyles.review}>
            <div className={mystyles['img-container']}>
                <img 
                    className={mystyles['person-img']} 
                    src={image} 
                    alt={name}
                />
                <span className={mystyles['quote-icon']}>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className={mystyles.author}>{name}</h4>
            <p className={mystyles.job}>{job}</p>
            <p className={mystyles.info}>{text}</p>
            <div className={mystyles['btn-container']}>
                <button className={mystyles['prev-btn']} onClick={props.prevHandler}><FaChevronLeft /></button>
                <button className={mystyles['next-btn']} onClick={props.nextHandler}><FaChevronRight /></button>
            </div>
            <button className="btn" onClick={props.randomHandler}>Surprise Me</button>
        </div>
    );
};

export default Review;