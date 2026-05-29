import Icon from "./Icon.jsx";

const DETAILS = [
  {
    icon: "location_on",
    title: "Flagship Store",
    lines: ["123 Steep St,", "Tea District, NY 10001"],
  },
  { icon: "schedule", title: "Hours", lines: ["Mon - Sun: 11:00 AM - 10:00 PM"] },
  { icon: "phone", title: "Contact", lines: ["(555) 123-4567"] },
];

export default function Locations() {
  return (
    <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Visit Our Sanctuary
            </h2>
            <div className="space-y-6">
              {DETAILS.map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-start gap-4 justify-center md:justify-start"
                >
                  <Icon name={detail.icon} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{detail.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {detail.lines.map((line, i) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: static address lines
                        <span key={i}>
                          {line}
                          {i < detail.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded text-white bg-primary hover:bg-opacity-90 transition-colors shadow-sm"
              href="#"
            >
              Get Directions
              <Icon name="directions" className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
