import { INSTAGRAM } from "../assets.js";
import Icon from "./Icon.jsx";

export default function InstagramGrid() {
  return (
    <section className="py-16 bg-white dark:bg-surface-dark border-t border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Icon name="photo_camera" className="text-primary" />
            @TeaScholar
          </h2>
          <a className="text-primary font-medium hover:underline flex items-center gap-1" href="#">
            Follow Us <Icon name="arrow_forward" className="text-sm" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM.map((src) => (
            <a
              key={src}
              className="group relative aspect-square overflow-hidden rounded block"
              href="#"
            >
              <img
                alt="Tea Scholar feature on Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={src}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="favorite" className="text-white text-3xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
