import { createContext, useEffect, useState } from "react";

export const TeaCollectionContext = createContext();

export default function TeaCollectionProvider({ children }) {
  const [teaData, setTeaData] = useState(null);

  const fetchTeaData = async () => {
    const response = await fetch("http://localhost:8000/teaData");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    if (response.ok) {
      setTeaData(data);
    }
  };

  useEffect(() => {
    fetchTeaData();
  }, []);

  return (
    <TeaCollectionContext.Provider value={{ teaData }}>
      {children}
    </TeaCollectionContext.Provider>
  );
}
