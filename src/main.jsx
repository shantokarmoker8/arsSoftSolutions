import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import SolutionAndSupport from "./components/SolutionAndSupport";
import About from "./components/About";
import Contact from "./components/Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <div className="mx-2 md:mx-6 lg:container lg:mx-auto flex flex-col gap-6 md:gap-10 lg:gap-16">
      <Hero></Hero>
      <Services></Services>
      <SolutionAndSupport></SolutionAndSupport>
      <About></About>
      <Contact></Contact>
    </div>
    <Footer></Footer>
  </StrictMode>
);
