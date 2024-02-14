import CountriesContextProvider from "./context/CountriesContext";

import Header from "./components/Header";
import SearchControles from "./components/SearchControles";
import CountrieCards from "./components/CountrieCards";

function App() {
  return (
    <CountriesContextProvider>
      <Header />
      <main>
        <SearchControles />
        <CountrieCards />
      </main>
    </CountriesContextProvider>
  );
}

export default App;
