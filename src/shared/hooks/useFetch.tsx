import { useEffect, useState } from 'react';
import { TCourcesResponse } from '../types';

export const useFetch = () => {
  const [data, setData] = useState<TCourcesResponse | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleFetch = async () => {
    setLoading(true);
    setError(undefined);
    const url = 'https://logiclike.com/docs/courses.json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (e) {
      setError(String(e));
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { data, loading, error };
};
