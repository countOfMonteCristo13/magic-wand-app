import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Wand from '../types/wand';
import { AxiosError } from 'axios';

const useWands = () => {
  const [wands, setWands] = useState<Wand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();

  const fetchWands = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/wands');
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setWands(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error);
      }
    }
  };

  useEffect(() => {
    fetchWands();
  }, []);

  return { wands, isLoading, error };
};

export default useWands;
