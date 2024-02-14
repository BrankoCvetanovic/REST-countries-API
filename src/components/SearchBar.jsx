import { useContext, useState } from "react";
import icon from "../assets/9349901.png";
import { CountriesContext } from "../context/CountriesContext";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const { handleSearch } = useContext(CountriesContext);

  function handleChange(event) {
    setInputValue(event.target.value);
    handleSearch(event.target.value);
  }

  return (
    <div className="search-bar">
      <img src={icon} alt="" />
      <input onChange={handleChange} type="text" value={inputValue} />
    </div>
  );
}
