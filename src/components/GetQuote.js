import React, { useState, useEffect } from 'react';

const GetQuote = () => {
  const [data, setData] = useState([{ quote: '', author: '' }]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
          method: 'GET',
          headers: { 'X-Api-Key': process.env.REACT_APP_NOT_SECRET_CODE },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="quotes">
      <h4>
        &quot;
        {data[0].quote}
        &quot;
      </h4>
      <h5>
        -
        {data[0].author}
      </h5>
    </div>
  );
};

export default GetQuote;
