import icon from "../assets//moon-icon-512x512-fm9crgpt.png";

export default function Header() {
  return (
    <header>
      <h1>Were in the world?</h1>
      <div>
        <img src={icon} alt="" />
        <button>Dark Mode</button>
      </div>
    </header>
  );
}
