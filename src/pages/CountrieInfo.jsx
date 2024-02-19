import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";

export default function CountrieInfo() {
  const { countrieId } = useParams();
  const { countries } = useContext(CountriesContext);
  const languages = [];
  for (const [key, value] of Object.entries(countries[countrieId].languages)) {
    languages.push(value);
  }
  return (
    <div className="info">
      <NavLink to={"/vite-react-router/"}>Back</NavLink>
      <div className="info-layout">
        <img src={countries[countrieId].flags.png} alt="" />
        <div className="info-container">
          <h3>{countries[countrieId].name.common}</h3>
          <div className="main-info">
            <div>
              <strong>Population: </strong> {countries[countrieId].population}
            </div>
            <div>
              <strong>Region: </strong> {countries[countrieId].region}
            </div>
            <div>
              <strong>Sub Region: </strong> {countries[countrieId].subregion}
            </div>
            <div>
              <strong>Capital: </strong> {countries[countrieId].capital[0]}
            </div>
            <div>
              <strong>Top Level Domain: </strong> {countries[countrieId].tld[0]}
            </div>
            <div>
              <strong>Languages: </strong>
              {languages.map((language) => (
                <span key={language}>{language} </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
