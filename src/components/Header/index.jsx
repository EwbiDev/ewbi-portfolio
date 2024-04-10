import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <header className="fixed w-full top-0 flex justify-between bg-ewbi-red z-10">
      <Logo />
      <NavBar />
    </header>
  );
}
