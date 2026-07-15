export const BUSINESS = {
  name: "iFix Bluetooth & Neckband Service Center",
  phone: "9087005993",
  whatsapp: "+919087005993",
  email: "",
  address: "2nd Floor, SK Tower, Near Tea Boy, 9th Street, Tatabad, Gandhipuram, Coimbatore – 641012",
  hours: "9:40 AM – 8:30 PM, Mon–Sat",
  instagram: "@ifixbluetooth",
  instagramUrl: "https://instagram.com/ifixbluetooth",
  mapsUrl: "https://maps.app.goo.gl/bJXbLQrm5Yjge5Kn7",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.265232!2d76.95580731474364!3d11.016801892145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8599d840aec19%3A0xe59965d8e2416930!2sI%20Fix%20Bluetooth%20Headphones%20%26%20Smart%20Watch%20service%20center!5e0!3m2!1sen!2sin!4v1",
};

export const TN_DISTRICTS = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
  "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram",
  "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai",
  "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
  "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
  "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
  "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur",
  "Vellore", "Viluppuram", "Virudhunagar",
];

export const DEVICE_CATEGORIES = [
  "Smart Watch",
  "TWS / Earbuds",
  "Neckband",
  "Headphones",
  "Bluetooth Speaker",
] as const;

export type DeviceCategory = (typeof DEVICE_CATEGORIES)[number];

export const COMPLAINT_TYPES: Record<DeviceCategory, string[]> = {
  "Smart Watch": [
    "Not Working", "Display not working", "Touch not responding", "Battery draining fast",
    "Not Charging", "Strap broken", "Button not working",
    "Not connecting to phone", "Other",
  ],
  "TWS / Earbuds": [
    "One side not working", "Both sides not working", "Case not charging",
    "Low volume", "Mic not working", "Connectivity issues",
    "Noise cancellation issue", "Physical damage", "Other",
  ],
  Neckband: [
    "No sound", "One side not working", "Mic not working",
    "Charging not working", "Battery issue", "Wire cut",
    "Connectivity issues", "Physical damage", "Other",
  ],
  Headphones: [
    "No sound", "One side not working", "Mic not working",
    "Charging not working", "Battery issue", "Headband broken",
    "Ear cup damaged", "Physical damage", "Connectivity issues", "Other",
  ],
  "Bluetooth Speaker": [
    "No sound", "Low volume", "Charging pin / port damage", "Battery issue",
    "Bluetooth not connecting", "Physical damage", "Water damage",
    "Distorted sound", "Other",
  ],
};

export const BRANDS: Record<DeviceCategory, string[]> = {
  "Smart Watch":       ["Amazfit", "Fire-Boltt", "boAt", "Noise", "Fastrack", "Samsung", "Huawei", "Fossil", "Other"],
  "TWS / Earbuds":     ["JBL", "Sony", "boAt", "Noise", "OnePlus", "realme", "Boult", "Zebronics", "pTron", "Portronics", "Other"],
  Neckband:            ["boAt", "realme", "OnePlus", "JBL", "Sony", "Noise", "Boult", "Zebronics", "Skullcandy", "pTron", "Other"],
  Headphones:          ["Jabra", "Sony", "JBL", "boAt", "Noise", "Sennheiser", "Skullcandy", "Philips", "Zebronics", "Audio-Technica", "Other"],
  "Bluetooth Speaker": ["JBL", "Marshall", "boAt", "Sony", "Portronics", "Zebronics", "Philips", "Mivi", "pTron", "Bose", "Other"],
};
