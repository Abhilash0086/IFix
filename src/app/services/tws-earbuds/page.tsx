import ServicePage from "@/components/ui/ServicePage";

export const metadata = { title: "TWS Earbuds Repair Coimbatore | iFix Bluetooth" };

export default function TWSEarbudsPage() {
  return (
    <ServicePage
      category="TWS / Earbuds"
      title="TWS & Earbuds Repair"
      subtitle="True Wireless Earbuds"
      description="One side dead? Not pairing? Low volume? We repair all TWS earbuds — most repairs done within 24 hours."
      deviceTypes={[
        "True Wireless Stereo (TWS) Earbuds",
        "In-ear Wireless Earphones",
        "Sports / Workout Earbuds",
        "ANC Earbuds",
        "Open-ear / Clip-on Earbuds",
      ]}
      issuesFixed={[
        "Buds backup / reset issue (single side or both)",
        "Buds not turning on or not pairing",
        "Low volume",
        "One side not producing sound",
        "Both earbuds completely dead",
        "Charging case not charging earbuds",
        "Connectivity & pairing issues",
      ]}
      pricing={[
        {
          brand: "JBL",
          model: "230 NC / 235 NC",
          image: "/devices/JBL Tws 230.png",
          complaints: ["Buds backup issue (R side or L side)", "Buds not on or pairing"],
          price: "Single side: ₹400\nBoth sides: ₹800",
          time: "Within 24 hrs",
        },
        {
          brand: "JBL",
          model: "130 NC",
          image: "/devices/JBL Tws 130.png",
          complaints: ["Buds backup issue (R side or L side)", "Buds not on or pairing"],
          price: "Single side: ₹400\nBoth sides: ₹800",
          time: "Within 24 hrs",
        },
        {
          brand: "JBL",
          model: "Wave Beam",
          image: "/devices/JBL wave beam.png",
          complaints: ["Buds backup issue (R side or L side)", "Buds not on or pairing"],
          price: "Single side: ₹350\nBoth sides: ₹650",
          time: "Within 24 hrs",
        },
        {
          brand: "Sony",
          model: "WF-1000XM3",
          image: "/devices/Sony WF 1000xm3.png",
          complaints: ["Buds backup issue (R side or L side)", "Buds not on or pairing"],
          price: "Single side: ₹400\nBoth sides: ₹800",
          time: "Within 24 hrs",
        },
        {
          brand: "Sony",
          model: "WF-1000XM4",
          image: "/devices/Sony WF 1000xm4.png",
          complaints: ["Buds backup issue (R side or L side)", "Buds not on or pairing"],
          price: "Single side: ₹460\nBoth sides: ₹920",
          time: "Within 24 hrs",
        },
        {
          brand: "All Brands",
          model: "All Models",
          complaints: ["Low volume"],
          price: "Starting ₹99",
          time: "30 min – 1 day",
          photoRequired: true,
        },
      ]}
      brandsServiced={["JBL", "Sony", "boAt", "Noise", "Boult", "Zebronics", "pTron", "Realme", "OnePlus", "Portronics"]}
      brandsLimited={[
        { brand: "Apple AirPods", note: "Not serviced" },
        { brand: "Samsung Galaxy Buds", note: "Selected models only" },
      ]}
      relatedServices={[
        { label: "Smart Watches", href: "/services/smart-watches" },
        { label: "Neckbands", href: "/services/neckbands" },
        { label: "Headphones", href: "/services/headphones" },
        { label: "Bluetooth Speakers", href: "/services/bluetooth-speakers" },
      ]}
    />
  );
}
