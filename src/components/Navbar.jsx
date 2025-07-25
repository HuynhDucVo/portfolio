import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#qualification", label: "Qualification" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact-Me" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleScroll = () => setNavShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header
      className={`fixed w-full top-0 z-30 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 transition-shadow ${
        navShadow ? "shadow-lg" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand with custom font, color, and hover effect */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-serif font-semibold tracking-wider text-gray-500 dark:text-gray-500 hover:text-gray-400 dark:hover:text-gray-400 underline underline-offset-4 decoration-indigo-500 hover:decoration-2 transition-colors transition-transform hover:scale-105"
        >
          HuynhDuc
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
                <a
                    href={link.href}
                    className="relative px-2 py-1 rounded transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400
                        after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-green-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
                    >
                    {link.label}
                </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden p-2 text-gray-900 dark:text-gray-100"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col items-center md:hidden shadow-md z-50">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="w-full text-center py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <a
                  href={link.href}
                  className="block w-full px-2 py-1 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
