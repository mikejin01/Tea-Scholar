import { useEffect, useState } from "react";
import { ICON } from "../assets.js";
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
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] h-16 sm:h-20 items-center">
          <div className="flex items-center">
            <a className="flex items-center gap-2.5" href="#home">
              <img alt="Tea Scholar" className="h-9 sm:h-11 w-auto" src={ICON} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl sm:text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
                  Tea Scholar
                </span>
                <span className="font-serif text-[0.6rem] sm:text-xs font-medium tracking-[0.35em] text-primary mt-1">
                  狀元茶事
                </span>
              </span>
            </a>
          </div>
          <nav className="hidden md:flex justify-self-center space-x-8">
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
          <div className="flex items-center gap-1 sm:gap-4 justify-self-end">
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
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-colors"
              href="https://pos.chowbus.com/online-ordering/store/teascholar/21546"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2.5 transition-colors"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white dark:bg-surface-dark transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-4 pt-4 pb-8 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={() => setOpen(false)}
              className={`px-3 py-3.5 text-base font-medium rounded transition-colors border-b border-gray-100 dark:border-gray-800 ${
                link.active
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://pos.chowbus.com/online-ordering/store/teascholar/21546"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center px-5 py-3.5 text-base font-medium rounded-full text-white bg-primary hover:bg-opacity-90 transition-colors"
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
