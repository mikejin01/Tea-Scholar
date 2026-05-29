import { LOGO } from "../assets.js";
import { useTheme } from "../useTheme.js";
import Icon from "./Icon.jsx";

const NAV_LINKS = [
  { label: "Home", active: true },
  { label: "Menu" },
  { label: "Our Story" },
  { label: "Locations" },
  { label: "Contact" },
];

export default function Header() {
  const { toggle } = useTheme();

  return (
    <header className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a className="flex items-center gap-2" href="#home">
              <img alt="Tea Scholar Logo" className="h-12 w-auto" src={LOGO} />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary ${
                  link.active ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-300"
                }`}
                href="#"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded-full text-sm p-2.5 transition-colors"
              id="theme-toggle"
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              <Icon name="dark_mode" className="light-icon block dark:hidden" />
              <Icon name="light_mode" className="dark-icon hidden dark:block" />
            </button>
            <a
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded text-white bg-primary hover:bg-opacity-90 transition-colors"
              href="#"
            >
              Order Now
            </a>
            <button
              className="md:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
              type="button"
              aria-label="Open menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
