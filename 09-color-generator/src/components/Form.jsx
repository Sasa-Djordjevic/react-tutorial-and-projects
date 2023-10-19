import React, {useState} from 'react';

import mystyles from './Form.module.css';

const Form = (props) => {
    const [color, setColor] = useState('');

    const setColorHandler = (even) => {
        setColor(even.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.addColor(color);
    };

    return (
        <div className={mystyles.container} onSubmit={submitHandler}>
            <h1>Color Generator App</h1>
            <form className={mystyles['color-form']}>
                {/* <label htmlFor="text" className='form-label'>Color Generator</label> */}
                <input type="color" value={color} onChange={setColorHandler} />
                <input type="text" name="text" id="text" value={color} onChange={setColorHandler} placeholder="#5f9df7" />
                <button className='btn' style={{backgroundColor: color}}>Submit</button>
            </form>
        </div>
    );
};

export default Form;