import mystyles from './Buttons.module.css';
import Button from './Button';

const Buttons = (props) => {
    return (
        <div className={mystyles['btn-container']}>
            {props.categories.map((item) => {
                return (
                    <Button 
                        key={item} 
                        category={item} 
                        categoryHandler={props.categoryHandler}
                    />
                );
            })}
        </div>
    );
};

export default Buttons;