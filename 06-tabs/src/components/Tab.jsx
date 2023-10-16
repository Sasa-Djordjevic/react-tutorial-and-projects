import mystyles from './Tab.module.css';

const Tab = (props) => {
    const {company, order} = props;

    const activeBtn = props.activeClass ? mystyles['active-btn'] : '';
    return (
        <button 
            className={`${mystyles['job-btn']} ${activeBtn}`}
            onClick={() => props.jobHandler(order)}
        >{company}</button>
    );
};

export default Tab;