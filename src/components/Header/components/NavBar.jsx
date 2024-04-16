import OutSideClickHandler from "@commonComponents/OutsideClickHandler";
import { useState } from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center">
      <NavItems mobileView={false} setBurgerClicked={() => {}} />
      <Burger />
    </nav>
  );
}

function NavItems({ mobileView, setBurgerClicked }) {
  const navItems = ["About", "Projects", "Contact"];

  const mobileClass =
    "burger-dropdown flex flex-col sm:hidden top-24 right-0 bg-ewbi-red absolute";
  const desktopClass = "hidden gap-2 sm:flex";

  return (
    <ul className={mobileView ? mobileClass : desktopClass}>
      {navItems.map((item) => (
        <li
          key={`nav-item-${item}`}
          className="flex text-3xl text-ewbi-gold hover:bg-ewbi-gold hover:text-ewbi-red"
        >
          <a
            href={`#${item.toLowerCase()}`}
            onClick={() => setBurgerClicked(false)}
            className="p-4"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Burger({ children }) {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <>
      <OutSideClickHandler
        onOutSideClick={() => setBurgerClicked(false)}
        childSelector=".burger-dropdown"
      >
        <div
          className="burger-dropdown material-symbols-outlined cursor-pointer p-4 text-5xl text-ewbi-gold hover:bg-ewbi-gold hover:text-ewbi-red sm:hidden"
          onClick={() => setBurgerClicked(!burgerClicked)}
        >
          Menu
        </div>
        {burgerClicked && (
          <NavItems mobileView={true} setBurgerClicked={setBurgerClicked} />
        )}
      </OutSideClickHandler>
    </>
  );
}
