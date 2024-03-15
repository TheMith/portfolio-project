import { useEffect, useState } from 'react';
import fetchData from './api';

export const useJsonData = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setJsonData(jsonData);
      }
    };
    fetchDataFromJson();
  }, []);

  return jsonData;
};
