import React, {useState, useEffect} from "react";

const url = 'https://course-api.com/react-tabs-project';

import Loading from "./components/Loading";
import Tabs from './components/Tabs';
import JobInfo from './components/JobInfo';

const App = () => {
  const [jobsData, setJobsData] = useState();
  const [activeJob, setActiveJob] = useState(0);
  const [companies, setCompanies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try{
        const response = await fetch(url);

        if (!response.ok) {
            setIsLoading(false);
            setIsError(true);
        }
        const data = await response.json();

        setJobsData(data);

        const companiesData = data.map( job => {
          return {
            company:job.company,
            order:job.order
          }
        });

        setCompanies(companiesData);

        setIsLoading(false);

    } catch(error) {
        setIsLoading(false);
        setIsError(true);
    }
  };

  useEffect( () => {
    fetchData();
  }, []);

  const activeJobHandler = (jobOrder) => {
    const newJob = jobsData.findIndex(item => item.order === jobOrder);

    setActiveJob(newJob);
    //console.log(newJob);
  };

  if (isLoading) {
    return (
      <main>
        <h1>Tabs App</h1>
        <section className="message">
            <Loading />
            <h2>Loading...</h2>
        </section>
    </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h1>Tabs App</h1>
        <section className="message">
            <h2>There was an error!</h2>
        </section>
    </main>
    );
  }

  return (
    <main>
      <h1>Tabs App</h1>
      <div className="title-underline"></div>
      <section className="jobs-center">
        <Tabs companies={companies} jobHandler={activeJobHandler} activejob={activeJob}/>
        <JobInfo info={jobsData[activeJob]} />
      </section>
    </main>
  );
};
export default App;
