import { FEATURED } from "../assets.js";
import Icon from "./Icon.jsx";

export default function Featured() {
  return (
    <section
      className="py-24 bg-surface-light dark:bg-background-dark transition-colors duration-300"
      id="featured"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Curated Selections
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our masterfully blended signatures, highlighting the true essence of premium
            tea leaves.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-surface-dark rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{item.price}</span>
                  <button
                    type="button"
                    className="text-primary hover:text-opacity-80 transition-colors p-2 rounded-full hover:bg-primary/10"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Icon name="add_shopping_cart" className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
