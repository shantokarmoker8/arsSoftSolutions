import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import TypeOfSoftware from "./components/TypeOfSoftware";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <div className="mx-2 md:mx-6 lg:container lg:mx-auto">
      <Hero></Hero>
      <Services></Services>
      <TypeOfSoftware></TypeOfSoftware>
    </div>
    <Footer></Footer>
  </StrictMode>
);
