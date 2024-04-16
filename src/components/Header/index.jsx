import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 flex w-full justify-between bg-ewbi-red">
      <Logo />
      <NavBar />
    </header>
  );
}
