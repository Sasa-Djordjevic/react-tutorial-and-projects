import mystyles from './MenuItem.module.css';

const MenuItem = (props) => {
    const {id, title, category, price, img, desc} = props.dataInfo;
    
    return (
        <div className={mystyles['menu-item']}>
            <img className={mystyles.img} src={img} alt={title} />
            <div className={mystyles['item-info']}>
                <header>
                    <h5>{title}</h5>
                    <span className={mystyles['item-price']}>{price}</span>
                </header>
                <p className={mystyles['item-text']}>{desc}</p>
            </div>
        </div>
    );
};

export default MenuItem;