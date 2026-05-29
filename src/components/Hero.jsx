import { HERO } from "../assets.js";

export default function Hero() {
  return (
    <section className="relative w-full bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <img
          src={HERO}
          alt="Tea Scholar Premium Boba Tea Experience"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-auto object-cover max-h-[500px] shadow-sm"
        />
      </div>
    </section>
  );
}
