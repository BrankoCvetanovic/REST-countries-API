import icon from "../assets//moon-icon-512x512-fm9crgpt.png";

export default function Header() {
  function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
  }

  return (
    <header>
      <h1>Were in the world?</h1>
      <div>
        <img src={icon} alt="" />
        <button onClick={toggleDarkTheme}>Dark Mode</button>
      </div>
    </header>
  );
}
