/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const API_URL = `http://localhost:3000`;

const CitiesContex = createContext();
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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

  async function getCurrentCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/cities/${id}`);
      if (!res.ok)
        throw new Error("Something went wrong, Please try again later!");
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok)
        throw new Error("Something went wrong, Please try again later!");
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContex.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCurrentCity,
        createCity,
      }}
    >
      {children};
    </CitiesContex.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContex);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
