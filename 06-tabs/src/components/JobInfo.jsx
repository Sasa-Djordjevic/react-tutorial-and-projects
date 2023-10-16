import mystyles from './JobInfo.module.css';

import JobDutie from './JobDutie';

const JobInfo = (props) => {
    const {title, dates, duties, company} = props.info;
    return (
        <div>
            <h3>{title}</h3>
            <span className={mystyles['job-company']}>{company}</span>
            <p className={mystyles['job-date']}>{dates}</p>
            <div>
                {duties.map((item, index) => {
                    return <JobDutie text={item} key={index} />
                })}
            </div>
        </div>
    );
};

export default JobInfo;