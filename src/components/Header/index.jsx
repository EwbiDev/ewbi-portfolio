import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between bg-ewbi-red">
      <Logo />
      <NavBar />
    </header>
  );
}
