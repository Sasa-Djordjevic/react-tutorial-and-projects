import mystyles from './Person.module.css';

const Person = (props) => {
    const {name, age, image} = props.info
    return (
        <div className={mystyles.person}>
            <img src={image} alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </div>
    );
};

export default Person;