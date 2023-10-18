import React, {useState} from 'react';

import text from '../data';
import mystyles from './Lorem.module.css';
import LoremForm from './LoremForm';
import LoremText from './LoremText';

const Lorem = () => {
    const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

    const numberHandler = (number) => {
        setNumberOfParagraphs(number);
    };

    const textData = text.slice(0, numberOfParagraphs);

    return (
        <section className={mystyles['section-center']}>
            <h4>tired of boring lorem ipsum?</h4>
            <LoremForm numberHandler={numberHandler} />
            <LoremText textData={textData}/>
        </section>
    );
};

export default Lorem;