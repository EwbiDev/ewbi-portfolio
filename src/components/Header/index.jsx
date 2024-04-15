import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <header className="flex w-full justify-between bg-ewbi-red">
      <Logo />
      <NavBar />
    </header>
  );
}
