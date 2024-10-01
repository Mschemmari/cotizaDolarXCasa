import {useState, useEffect} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';
import {firebaseConfig} from '../utils';
// import {Rate} from '../types';
import {initializeApp} from 'firebase/app';
initializeApp(firebaseConfig);

const db = getDatabase();

export const useRates = () => {
  const [rates, setRates] = useState<any>(null);
  const [modified, setModified] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cotizaciones = ref(db, 'currencies/');

    onValue(cotizaciones, snapshot => {
      const data = snapshot.val();
      console.log(data.modified);
      setModified(
        data.modified.map((item: any) => ({
          ...item.newValue,
          actualizacion: new Date().toLocaleTimeString(),
        })),
      );
      setRates(
        data.rates.map((item: any) => ({
          ...item,
          actualizacion: new Date().toLocaleTimeString(),
        })),
      );
      setLoading(false);
    });
  }, []);
  console.log(modified);

  return {rates, loading, modified}; //error
};
