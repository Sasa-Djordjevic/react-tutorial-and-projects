import React, {useState, useEffect} from "react";

import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchHandler = async () => {
    setIsLoading(true);
    try{
        const response = await fetch(url);

        if (!response.ok) {
            setIsError(true);
            setIsLoading(false);
        }

        const data = await response.json();

        setToursData(data);
        setIsLoading(false);

    } catch (error) {
        setIsError(true);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const refreshHandler = () => {
    fetchHandler();
  };

  const deleteHandler = (idData) => {
    const filterdData = toursData.filter((item) => item.id !== idData);

    setToursData(filterdData);
  };

  if (isLoading) {
    return (
        <main>
            <h2>Tours App</h2>
            <Loading />
        </main>
    );
  }

  if (isError) {
    return (
        <main>
            <h2>Tours App</h2>
            <h3>There was an error!</h3>
        </main>
    );
  }

  if (toursData.length === 0 && !isLoading && !isError) {
    return (
      <main>
        <h2>No Tours Left</h2>
          <div className="refresh">
            <button className="btn" onClick={refreshHandler}>Refresh</button>
          </div>
      </main>
    );
  }

  return (
    <main>
        <h2>Tours App</h2>
        <Tours data={toursData} deleteTour={deleteHandler}/>
    </main>
  );
};
export default App;
