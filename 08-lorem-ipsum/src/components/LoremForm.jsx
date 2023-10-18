import React, {useState} from 'react';

import mystyles from './LoremForm.module.css';

const LoremForm = (props) => {
    const [numValue, setNumValue] = useState(1);

    const numValueHandler = (even) => {
        setNumValue(Math.floor(even.target.value));
    }

    const submitHandler = (event) => {
        event.preventDefault();

        //const formData = new FormData(event.currentTarget);
        //const num = parseInt(formData.get('number'));
        props.numberHandler(numValue);
    }
    return (
        <form className={mystyles['lorem-form']} onSubmit={submitHandler}>
            <label htmlFor='number'>Paragraphs</label>
            <input 
                type="number" 
                id="number" 
                name="number"
                min="1"
                max="9"
                step="1"
                onChange={numValueHandler}
                value={numValue}
            />
            <button className={mystyles.btn} type="submit" >Generate</button>
        </form>
    );
};

export default LoremForm;