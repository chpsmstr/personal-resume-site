import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-neutral-100 dark:bg-neutral-800 w-full flex justify-between items-center p-8 border-b border-neutral-200 dark:border-neutral-700">
      <div className="logo ">
        <Link href="/" className="logo-link font-bold text-lg md:text-2xl">
          Ankkit Prakash
        </Link>
      </div>
      <div className="nav-links flex justify-evenly w-96 ">
        <Link href="#about" className="nav-link md:text-lg text-base font-normal transition-all duration-300 ease-in-out hover:font-bold mx-1">
          About
        </Link>
        <Link href="#projects" className="nav-link md:text-lg text-base font-normal transition-all duration-300 ease-in-out hover:font-bold mx-1">
          Projects
        </Link>
        <Link href="mailto:ankkit@ankkitp.com" className="nav-link md:text-lg text-base font-normal transition-all duration-300 ease-in-out hover:font-bold mx-1">
          Contact
        </Link>
      </div>
    </nav>
  );
}
