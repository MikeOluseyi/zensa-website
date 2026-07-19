import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import WhyZensa from "@/components/WhyZensa";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <HowItWorks />
      <WhyZensa />
      <Capabilities />
      <Contact />
      <Footer />
    </>
  );
}