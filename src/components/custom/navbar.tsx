const links: string[] = ["Home", "Work", "About", "Contact"];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-40 py-10">
      <h1 className="text-4xl font-bold text-white">Ubaid</h1>
      <ul className="flex items-center gap-8">
        {links.map((link: string, idx: number) => {
          return (
            <li
              className="list-none text-base font-medium text-white"
              key={idx}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
