import { createContext, useState, useEffect, useContext } from "react";

const API_URL = `http://localhost:3000`;

const CitiesContex = createContext();
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/cities`, {
          signal: controller.signal,
        });
        if (!res.ok)
          throw new Error("Something went wrong, Please try again later!");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
    return function () {
      controller.abort();
    };
  }, []);

  return (
    <CitiesContex.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children};
    </CitiesContex.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContex);
  if (!context)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
