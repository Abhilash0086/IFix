import ServicePage from "@/components/ui/ServicePage";

export const metadata = { title: "Headphone Repair Coimbatore | iFix Bluetooth" };

export default function HeadphonesPage() {
  return (
    <ServicePage
      category="Headphones"
      title="Headphone Repair"
      subtitle="Over-ear, On-ear & Boom Headsets"
      description="USB/Type-C pin damage, physical damage, driver issues, battery replacement — professional headphone repairs with warranty."
      deviceTypes={[
        "Over-ear Wireless Headphones",
        "On-ear Wireless Headphones",
        "Wired Headphones",
        "ANC / Noise Cancelling Headphones",
        "Boom / Office Headsets",
        "Gaming Headsets",
      ]}
      issuesFixed={[
        "Physical damage (headband, ear cup, housing)",
        "USB pin / Type-C charging port issue",
        "Speaker / driver issue",
        "One side or both sides no sound",
        "Battery replacement",
      ]}
      pricing={[
        {
          brand: "Jabra",
          model: "Evolve 20 / Evolve 40 / Evolve2 30 SE",
          image: "/devices/Jabra Evolve 20.png",
          complaints: ["Wire issue", "Damage", "USB pin / Type-C pin issue", "Mic issue", "Speaker issue"],
          price: "₹250 – ₹999",
          time: "Within 2 days",
        },
        {
          brand: "All Brands",
          model: "All Models",
          complaints: ["Damaged (headband, ear cup, housing)"],
          price: "₹480 – ₹900",
          time: "Within 2 days",
          photoRequired: true,
        },
      ]}
      brandsServiced={["Jabra", "Sony", "JBL", "boAt", "Noise", "Sennheiser", "Skullcandy", "Philips", "Zebronics"]}
      brandsLimited={[
        { brand: "Bose", note: "Selected models only" },
        { brand: "Beats", note: "Selected models only" },
        { brand: "Bang & Olufsen", note: "Not serviced" },
      ]}
      relatedServices={[
        { label: "Smart Watches", href: "/services/smart-watches" },
        { label: "TWS / Earbuds", href: "/services/tws-earbuds" },
        { label: "Neckbands", href: "/services/neckbands" },
        { label: "Bluetooth Speakers", href: "/services/bluetooth-speakers" },
      ]}
    />
  );
}
