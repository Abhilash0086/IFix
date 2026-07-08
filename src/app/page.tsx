import Hero from "@/components/sections/Hero";
import DeviceShowcase from "@/components/sections/DeviceShowcase";
import DeviceChecker from "@/components/sections/DeviceChecker";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DeviceShowcase />
        <DeviceChecker />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
