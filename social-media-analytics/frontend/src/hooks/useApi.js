import { useState } from 'react';

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result.data);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};

export default useApi;