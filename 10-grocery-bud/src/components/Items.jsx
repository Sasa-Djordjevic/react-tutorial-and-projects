import React, {useState} from 'react';

import mystyles from './Items.module.css';
import Form from './Form';
import ItemsList from './ItemsList';
import { nanoid } from 'nanoid';

const setItemInLocalSorage = (elements) => {
    const tranElements = JSON.stringify(elements);
    localStorage.setItem('itemslist', tranElements);
};

const getItemsFromLocalSorage = (list) => {
    let elements = localStorage.getItem(list);

    if (elements) {
        elements = JSON.parse(localStorage.getItem(list));
    } else {
        elements = [];
    }

    return elements;
};

const Items = () => {
    const [items, setItems] = useState(getItemsFromLocalSorage('itemslist'));

    const addItem = (item) => {
        const newItem = {
            name: item,
            completed: false,
            id: nanoid()
        }

        const newItems = [...items, newItem]

        setItems(newItems);
        setItemInLocalSorage(newItems);
    };

    const deleteItem = (id) => {
        const newItems = items.filter( element => element.id !== id );

        setItems(newItems);
        setItemInLocalSorage(newItems);
    };

    const checkedItem = (id) => {
        const newItems = items.map( item => {
            if (item.id === id) {
                const editItem = {
                    ...item, completed: !item.completed
                }
                return editItem;
            } 
            return item;
        });

        setItems(newItems);
        setItemInLocalSorage(newItems);
    };

    return (
        <section className={mystyles['section-center']}>
            <Form addItem={addItem} />
            <ItemsList items={items} deleteItem={deleteItem} checkedItem={checkedItem}/>
        </section>
    );
};

export default Items;