import { useContext } from "react";
import CountrieCard from "./CountrieCard";
import { CountriesContext } from "../context/CountriesContext";

export default function CountrieCards() {
  const { countries } = useContext(CountriesContext);

  return (
    <div className="card-container">
      {!countries && <h2>Loading...</h2>}
      {countries &&
        countries.map((country) => (
          <CountrieCard
            key={country.name.common}
            name={country.name.common}
            image={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          ></CountrieCard>
        ))}
    </div>
  );
}
