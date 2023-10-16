import Tab from "./Tab";

import mystyles from './Tabs.module.css';

const Tabs = (props) => {
    return (
        <div className={mystyles['btn-container']}>
            {props.companies.map( (item, index) => {
                return (
                    <Tab 
                        key={item.order} 
                        company={item.company} 
                        order={item.order} 
                        jobHandler={props.jobHandler}
                        activeClass={index === props.activejob ? true : false}
                    />
                );
            })}
        </div>
    );
};

export default Tabs;