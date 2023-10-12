import React, {useState} from 'react';

import Question from './Question';

import mystyles from './Questions.module.css';

const Questions = (props) => {
    const [isActive, setIsActive] = useState(1);

    const activeHandler = (id) => {
        if (id === isActive) {
            return setIsActive(null);
        }
        setIsActive(id);
    };

    return (
        <div className={mystyles.container}>
            <h1>React Questions</h1>
            {props.data.map( (item) => {
                return (
                    <Question 
                        key={item.id} 
                        data={item} 
                        activId={isActive}
                        openHandler={activeHandler}
                    />
                );
            })}
            
        </div>
    );
};

export default Questions;