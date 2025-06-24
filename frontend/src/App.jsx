import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import FeaturedTours from "./components/FeaturedTours";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "./index.css";
import SignIn from "./components/SignIn";
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
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
