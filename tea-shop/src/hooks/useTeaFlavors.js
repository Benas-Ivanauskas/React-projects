import { useEffect, useState } from "react";

export const useTeaFlavors = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [teaFlavors, setTeaFlavors] = useState([]);
  const fetchTeaFlavors = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/teaFlavors");
      const data = await response.json();
      setTeaFlavors(data);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTeaFlavors();
  }, []);

  const getFlavorById = (id) => {
    return teaFlavors?.find((flavor) => flavor.id === id);
  };

  return { isError, isLoading, teaFlavors, getFlavorById };
};
