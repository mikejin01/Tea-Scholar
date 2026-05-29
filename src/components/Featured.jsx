import { FEATURED } from "../assets.js";
import Icon from "./Icon.jsx";

export default function Featured() {
  return (
    <section
      className="py-16 sm:py-24 bg-surface-light dark:bg-background-dark transition-colors duration-300"
      id="featured"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-serif uppercase tracking-[0.25em] text-primary mb-3">
            状元茶事 · Tea Scholar
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide text-gray-900 dark:text-white mb-3 sm:mb-4">
            Curated Selections
          </h2>
          <p className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our masterfully blended signatures, highlighting the true essence of premium
            tea leaves.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {FEATURED.map((item) => (
            <div
              key={item.name}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300"
            >
              <img
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                src={item.image}
              />
              {/* Legibility gradient + subtle hover tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Floating add-to-cart button */}
              <button
                type="button"
                className="absolute top-3 right-3 grid place-items-center h-10 w-10 rounded-full bg-white/95 text-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                aria-label={`Add ${item.name} to cart`}
              >
                <Icon name="add" className="text-2xl" />
              </button>

              {/* Title + price overlaid on the image */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-white font-semibold text-lg sm:text-2xl leading-tight tracking-wide drop-shadow-md">
                  {item.name}
                </h3>
                <span className="mt-0.5 inline-block font-serif text-white/95 font-medium text-sm sm:text-base">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
