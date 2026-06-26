import Hero from "@/components/sections/Hero";
import DeviceChecker from "@/components/sections/DeviceChecker";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DeviceChecker />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
