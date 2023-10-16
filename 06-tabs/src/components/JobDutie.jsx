import mystyles from './JobDutie.module.css';
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const JobDutie = (props) => {
    return (
        <div className={mystyles['job-desc']}>
            <MdKeyboardDoubleArrowRight className={mystyles['job-icon']}/>
            <p>{props.text}</p>
        </div>
    );
};

export default JobDutie;