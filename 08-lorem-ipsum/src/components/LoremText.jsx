import mystyles from './LoremText.module.css';

const LoremText = (props) => {
    return (
        <div className={mystyles['lorem-text']}>
            {props.textData.map((item) => {
                const d = new Date();
                let time = d.getTime();
                let num1 = 1;
                let num2 = 1 + Math.random() + Math.random();
                let mykey = num1.toString() + time.toString() + num2.toString();
                return <p key={mykey}>{item}</p>
            })}
        </div>
    );
};

export default LoremText