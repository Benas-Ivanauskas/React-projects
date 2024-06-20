import { createContext, useEffect, useState } from "react";

export const TeaFlavorContext = createContext();

export default function TeaFlavorProvider({ children }) {
  const [teaFlavorData, setTeaFlavorData] = useState(null);

  const fetchTeaData = async () => {
    const response = await fetch("http://localhost:8000/teaFlavors");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    if (response.ok) {
      setTeaFlavorData(data);
    }
  };

  const findCurrentFlavor = (ID) => {
    return teaFlavorData?.find((flavor) => flavor.id === ID);
  };

  useEffect(() => {
    fetchTeaData();
  }, []);

  return (
    <TeaFlavorContext.Provider value={{ teaFlavorData, findCurrentFlavor }}>
      {children}
    </TeaFlavorContext.Provider>
  );
}
