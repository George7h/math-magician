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
          headers: { 'X-Api-Key': 'ZF+W6Ac/FjnhoKZ/HmyypA==DSAEPYdYuE4eZiju' },
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
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quotes">
      <h4>{data[0].quote}</h4>
      <h5>{data[0].author}</h5>
    </div>
  );
};

export default GetQuote;
