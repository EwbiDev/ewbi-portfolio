import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <header className="bg-ewbi-red flex justify-between">
      <Logo />
      <NavBar />
    </header>
  );
}
