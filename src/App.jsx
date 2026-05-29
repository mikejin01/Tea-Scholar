import Featured from "./components/Featured.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InstagramGrid from "./components/InstagramGrid.jsx";
import Locations from "./components/Locations.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Featured />
        <InstagramGrid />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
