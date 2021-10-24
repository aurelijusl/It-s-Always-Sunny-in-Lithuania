import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch the data.");
        }
        return res.json();
      })
      .then((resJson) => {
        setIsPending(false);
        console.log(resJson)
        setData(resJson);
      })
      .catch((err) => {
        setIsPending(false);  
        setError(err.message);
      });
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
