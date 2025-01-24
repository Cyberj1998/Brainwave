'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { BrowserRouter } from "react-router-dom";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <BrowserRouter>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </BrowserRouter>
  );
}
