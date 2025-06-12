import About from "./components/About";
import FeaturedTours from "./components/FeaturedTours";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/testimonials";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Hero />
        <FeaturedTours />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
