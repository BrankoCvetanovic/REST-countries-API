import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

let countriesData;

export default function CountriesContextProvider({ children }) {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        const error = new Error("An error occurred while fetching the events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }
      const resData = await response.json();

      resData.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });

      setCountries(resData);
      countriesData = resData;
      return resData;
    }
    countriesData = fetchData();
  }, []);

  function handleSearch(term) {
    const newData = countriesData.filter((countrie) =>
      countrie.name.common.toLowerCase().includes(term.toLowerCase())
    );

    setCountries(newData);
  }

  function handleAreaSearch(area) {
    const newData = countriesData.filter(
      (countrie) => countrie.region === area
    );
    setCountries(newData);
  }

  const CountriesCtx = {
    countries,
    handleSearch,
    handleAreaSearch,
  };

  return (
    <CountriesContext.Provider value={CountriesCtx}>
      {children}
    </CountriesContext.Provider>
  );
}
