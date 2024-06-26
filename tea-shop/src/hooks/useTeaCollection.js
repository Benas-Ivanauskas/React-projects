import { useState, useEffect } from "react";

export const useTeaCollection = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [teaCollectionData, setTeaCollectionData] = useState([]);

  useEffect(() => {
    const fetchCollectionData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:8000/teaData");
        const data = await response.json();

        setTeaCollectionData(data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollectionData();
  }, []);

  return { isError, isLoading, teaCollectionData };
};
