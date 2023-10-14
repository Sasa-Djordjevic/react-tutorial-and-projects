const Button = (props) => {
    return (
        <button 
            className='btn' 
            onClick={() => props.categoryHandler(props.category)}
        >{props.category}</button>
    );
};

export default Button;