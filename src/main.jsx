import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
    <div className=" lg:container mx-auto">
      <Hero></Hero>
      <Services></Services>
    </div>
    <Footer></Footer>
  </StrictMode>
);
