export function Header() {
  return (
    <header className="flex justify-center items-center relative z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur">
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          Projects
        </a>
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold bg-white hover:bg-white/10 hover:text-white transition duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
