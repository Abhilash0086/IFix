import ServicePage from "@/components/ui/ServicePage";

export const metadata = { title: "Bluetooth Speaker Repair Coimbatore | iFix Bluetooth" };

export default function BluetoothSpeakersPage() {
  return (
    <ServicePage
      category="Bluetooth Speaker"
      title="Bluetooth Speaker Repair"
      subtitle="Portable & Home Bluetooth Speakers"
      description="No sound, charging failure, battery issues — we diagnose and repair all Bluetooth speaker brands with fast turnaround."
      deviceTypes={[
        "Portable Bluetooth Speakers",
        "Waterproof / Outdoor Speakers",
        "Party / Bass Speakers",
        "Mini / Pocket Speakers",
        "TWS Stereo Pair Speakers",
      ]}
      issuesFixed={[
        "Not turning on",
        "Battery issue / draining fast",
        "Backup / software issue",
        "Charging but not powering on",
        "Charging pin / port damage",
        "No sound output",
        "Distorted sound",
        "Bluetooth not connecting",
        "Water / moisture damage",
        "Physical casing damage",
      ]}
      pricing={[
        {
          brand: "JBL",
          model: "Charge 5",
          image: "/devices/JBL Charge 5.png",
          complaints: ["Not on", "Battery issue", "Backup issue", "Charging but not on"],
          price: "₹3,000",
          time: "Within 24 hrs",
        },
        {
          brand: "JBL",
          model: "Boom Box 1",
          image: "/devices/JBL Boom box 1.png",
          complaints: ["Not on", "Battery issue", "Backup issue", "Charging but not on"],
          price: "₹5,500",
          time: "Within 3 days",
        },
        {
          brand: "JBL",
          model: "Boom Box",
          complaints: ["Not on", "Battery issue", "Backup issue", "Charging but not on"],
          price: "₹6,000",
          time: "Within 3 days",
        },
        {
          brand: "Marshall",
          model: "Emberton 2",
          image: "/devices/Marshall Emberton 2.png",
          complaints: ["Not on", "Battery issue", "Backup issue"],
          price: "₹2,200",
          time: "Within 2 days",
        },
        {
          brand: "boAt",
          model: "Stone 1000",
          image: "/devices/Boat Stone 1000.png",
          complaints: ["Not on — ₹750", "Backup issue — ₹750", "Charging pin — ₹380"],
          price: "Per issue\n(see complaints)",
          time: "Within 24 hrs",
        },
        {
          brand: "All Brands",
          model: "All Models",
          complaints: ["Charging pin change"],
          price: "Starting ₹299",
          time: "1 – 2 days",
          photoRequired: true,
        },
      ]}
      brandsServiced={["JBL", "Marshall", "boAt", "Sony", "Portronics", "Zebronics", "Philips", "Mivi", "pTron"]}
      brandsLimited={[
        { brand: "Bose", note: "Selected models only" },
        { brand: "Ultimate Ears", note: "Not serviced" },
      ]}
      relatedServices={[
        { label: "Smart Watches", href: "/services/smart-watches" },
        { label: "TWS / Earbuds", href: "/services/tws-earbuds" },
        { label: "Neckbands", href: "/services/neckbands" },
        { label: "Headphones", href: "/services/headphones" },
      ]}
    />
  );
}
