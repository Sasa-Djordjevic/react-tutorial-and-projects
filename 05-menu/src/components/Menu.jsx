import MenuItem from './MenuItem';

import mystyles from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={mystyles['section-center']}>
            {props.data.map( (item) => {
                return (
                    <MenuItem key={item.id} dataInfo={item} />
                );
            })}
        </div>
    );
};

export default Menu;