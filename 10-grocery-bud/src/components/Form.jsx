import React, {useState} from 'react';

import mystyles from './Form.module.css';

const Form = (props) => {
    const [newItem, setNewItem] = useState('');

    const addItemHandler = (event) => {
        setNewItem(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if(newItem.trim().length !== 0) {
            props.addItem(newItem);

            setNewItem('');
        }
        setNewItem('');
    };

    return (
        <form onSubmit={submitHandler}>
            <h4>Grocery Items</h4>
            <p>* items are saved in the local storage</p>
            <div className={mystyles['form-control']}>
                <input 
                    className={mystyles['form-input']} 
                    type='text'
                    onChange={addItemHandler}
                    value={newItem}
                />
                <button className='btn' >Add a Item</button>
            </div>
        </form>
    );
};

export default Form;