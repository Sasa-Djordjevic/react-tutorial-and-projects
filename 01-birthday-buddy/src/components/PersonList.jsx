import React, {useState} from 'react';

import data from '../data';
import mystyles from './PersonList.module.css';

import Person from "./Person";

const PersonList = () => {
    const [friends, setFriends] = useState(data);

    const birthdayNumber = friends.length;

    const clearHandler = () => {
        setFriends([]);
    };

    return (
        <main className={mystyles}>
            <h2>Birthday Reminder</h2>
            <div className={mystyles.container}>
                <h3>{birthdayNumber} Birthdays Today</h3>
                {friends.map( (person) => {
                    return <Person key={person.id} info={person}/>
                })}
                <button className='btn btn-block' onClick={clearHandler}>Clear All</button>
            </div>
        </main>
    );
};

export default PersonList;