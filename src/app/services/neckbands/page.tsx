import ServicePage from "@/components/ui/ServicePage";

export const metadata = { title: "Neckband Repair Coimbatore | iFix Bluetooth" };

export default function NeckbandsPage() {
  return (
    <ServicePage
      category="Neckband"
      title="Neckband Repair"
      subtitle="Bluetooth Neckband Earphones"
      description="Wire cuts, dead drivers, charging issues, mic problems — all neckband repairs done in-store with fast turnaround."
      deviceTypes={[
        "Magnetic Neckband Earphones",
        "Sport / Workout Neckbands",
        "ANC Neckbands",
        "Neckband with Ear hooks",
      ]}
      issuesFixed={[
        "Wire cut / cable damage",
        "One or both sides no sound",
        "Driver / speaker replacement",
        "Charging port damage",
        "Low volume",
        "Connectivity / pairing issues",
      ]}
      pricing={[
        {
          brand: "boAt",
          model: "Rockerz Series",
          complaints: ["Wire / driver repair"],
          price: "₹249 – ₹449",
          time: "Within 24 hrs",
        },
        {
          brand: "realme",
          model: "Buds Wireless",
          complaints: ["Charging fix"],
          price: "₹249 – ₹399",
          time: "Within 24 hrs",
        },
        {
          brand: "OnePlus",
          model: "Bullets Series",
          complaints: ["Mic repair"],
          price: "₹299 – ₹499",
          time: "Within 24 hrs",
        },
        {
          brand: "JBL / Sony",
          model: "Neckband Series",
          complaints: ["Driver replacement"],
          price: "₹499 – ₹799",
          time: "Within 24 hrs",
        },
        {
          brand: "All Brands",
          model: "All Models",
          complaints: ["Battery replacement"],
          price: "₹349 – ₹599",
          time: "Within 24 hrs",
        },
        {
          brand: "All Brands",
          model: "All Models",
          complaints: ["Low volume"],
          price: "Starting ₹99",
          time: "30 min – 1 day",
        },
      ]}
      brandsServiced={["boAt", "realme", "OnePlus", "JBL", "Sony", "Noise", "Boult", "Zebronics", "Skullcandy", "pTron"]}
      brandsLimited={[
        { brand: "Bose QuietControl", note: "Not serviced" },
        { brand: "Bang & Olufsen", note: "Not serviced" },
      ]}
      relatedServices={[
        { label: "Smart Watches", href: "/services/smart-watches" },
        { label: "TWS / Earbuds", href: "/services/tws-earbuds" },
        { label: "Headphones", href: "/services/headphones" },
        { label: "Bluetooth Speakers", href: "/services/bluetooth-speakers" },
      ]}
    />
  );
}
