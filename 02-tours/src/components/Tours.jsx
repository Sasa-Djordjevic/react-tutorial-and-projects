import mystyles from './Tours.module.css';

import Tour from './Tour';

const Tours = (props) => {
    const {data} = props;
    
    return (
            <div className={mystyles.tours}>
                {data.map( (item) => {
                    return <Tour key={item.id} tourinfo={item} deleteTour={props.deleteTour} />
                })}
            </div>
    );
}

export default Tours;