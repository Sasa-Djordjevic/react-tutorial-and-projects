import mystyles from './ItemsList.module.css';
import SingleItem from './SingleItem';

const ItemsList = (props) => {
    return (
        <div className={mystyles.items}>
            {props.items.map( (item) => {
                return (
                    <SingleItem 
                        key={item.id} 
                        item={item} 
                        deleteItem={props.deleteItem} 
                        checkedItem={props.checkedItem} 
                    />
                );
            })}
        </div>
    );
};

export default ItemsList;