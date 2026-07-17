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
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider top="#eff6ff" bottom="#dbeafe" />
        <DeviceShowcase />
        <WaveDivider top="#dbeafe" bottom="#e0e7ff" />
        <DeviceChecker />
        <WaveDivider top="#e0e7ff" bottom="#ffffff" />
        <Services />
        <WaveDivider top="#ffffff" bottom="#e0f2fe" />
        <Process />
        <WaveDivider top="#e0f2fe" bottom="#f9fafb" />
        <About />
        <WaveDivider top="#f9fafb" bottom="#fef3c7" />
        <Testimonials />
        <WaveDivider top="#fef3c7" bottom="#dbeafe" />
        <ContactForm />
        <WaveDivider top="#dbeafe" bottom="#111827" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
