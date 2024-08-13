import {useState, useEffect} from 'react';

export const useRates = () => {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchRates = async () => {
    try {
      const response = await fetch('https://dolarapi.com/v1/dolares');
      const data = await response.json();
      console.log(data);

      setRates(data);
      setLoading(false);
    } catch (fetchError) {
      setError('Failed to fetch rates');
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRates();
  }, []);

  return {rates, loading, error};
};
