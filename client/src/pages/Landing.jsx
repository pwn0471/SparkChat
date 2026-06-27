import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Showcase from "../components/landing/Showcase";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}