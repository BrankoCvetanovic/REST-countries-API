import { useContext } from "react";
import CountrieCard from "./CountrieCard";
import { CountriesContext } from "../context/CountriesContext";
import { NavLink } from "react-router-dom";

export default function CountrieCards() {
  const { countries } = useContext(CountriesContext);

  console.log(countries);

  return (
    <div className="card-layout">
      <div className="card-container">
        {!countries && <h2>Loading...</h2>}
        {countries &&
          countries.map((country, index) => {
            return (
              <NavLink to={`/${index}`} className={"card"}>
                <CountrieCard
                  key={country.name.common}
                  name={country.name.common}
                  image={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                ></CountrieCard>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}
