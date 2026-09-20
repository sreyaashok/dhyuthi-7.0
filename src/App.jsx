import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PreEvents from "./sections/PreEvents";
import Tracks from "./sections/Tracks";
import Schedule from "./sections/Schedule";
import FAQ from "./sections/FAQ";
import Showcase from "./sections/Showcase";
import Register from "./sections/Register";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <PreEvents />
        <Tracks />
        <Schedule />
        <FAQ />
        <Showcase />
        <Register />
      </main>
      <Footer />
      
    </>
  );
}

export default App;