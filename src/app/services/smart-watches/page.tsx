import ServicePage from "@/components/ui/ServicePage";

export const metadata = { title: "Smart Watch Repair Coimbatore | iFix Bluetooth" };

export default function SmartWatchesPage() {
  return (
    <ServicePage
      category="Smart Watch"
      title="Smart Watch Repair"
      subtitle="Wearables & Fitness Trackers"
      description="Professional repair for all smart watch brands. Display, battery, charging, sensors — we fix it all with a 24-hour turnaround."
      deviceTypes={[
        "Fitness Trackers",
        "Smartwatches (Android / iOS compatible)",
        "Kids Smart Watches",
        "Sports & Outdoor Watches",
        "Fashion Smartwatches",
      ]}
      issuesFixed={[
        "Not turning on",
        "Battery draining fast / battery issue",
        "Backup / software issue",
        "Charging but not powering on",
        "Not charging",
        "Cracked / broken display",
        "Touch screen not responding",
        "Bluetooth not connecting to phone",
        "Strap / band replacement",
      ]}
      pricing={[
        {
          brand: "Amazfit",
          model: "T Rex",
          complaints: ["Not on", "Battery issue", "Backup issue", "Charging but not on"],
          price: "₹850",
          time: "Within 24 hrs",
        },
        {
          brand: "Amazfit",
          model: "T Rex Pro",
          complaints: ["Not on", "Battery issue", "Backup issue", "Charging but not on"],
          price: "₹950",
          time: "Within 24 hrs",
        },
        {
          brand: "Fire-Boltt",
          model: "Snapp",
          complaints: ["Not charging"],
          price: "₹600",
          time: "Within 24 hrs",
        },
      ]}
      brandsServiced={["Amazfit", "Fire-Boltt", "boAt", "Noise", "realme", "Fastrack", "Zebronics", "pTron"]}
      brandsLimited={[
        { brand: "Apple Watch", note: "Not serviced" },
        { brand: "Samsung Galaxy Watch", note: "Selected models only" },
        { brand: "Garmin", note: "Selected models only" },
      ]}
      relatedServices={[
        { label: "TWS / Earbuds", href: "/services/tws-earbuds" },
        { label: "Neckbands", href: "/services/neckbands" },
        { label: "Headphones", href: "/services/headphones" },
        { label: "Bluetooth Speakers", href: "/services/bluetooth-speakers" },
      ]}
    />
  );
}
