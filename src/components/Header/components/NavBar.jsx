export default function NavBar() {
  const navItems = ["About", "Projects", "Contact"];
  return (
    <nav className="flex items-center">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={`nav-item-${item}`} className="p-4 text-ewbi-gold">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
