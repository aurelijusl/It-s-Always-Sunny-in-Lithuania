import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch the data.");
        }
        return res.json();
      })
      .then((resJson) => {
        setIsPending(false);
        setData(resJson);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
