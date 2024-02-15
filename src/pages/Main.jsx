import SearchControles from "../components/SearchControles";
import CountrieCards from "../components/CountrieCards";

export default function Main() {
  return (
    <main id="main">
      <>
        <SearchControles />
        <CountrieCards />
      </>
      <div id="info-container"></div>
    </main>
  );
}
