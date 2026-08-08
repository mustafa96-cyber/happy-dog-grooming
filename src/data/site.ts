export const site = {
  name: "Happy Dog Grooming Salon",
  short: "Happy Dog",
  phone: "(714) 964-6581",
  phoneHref: "tel:+17149646581",
  addressLine: "9592 Hamilton Ave",
  city: "Huntington Beach",
  state: "CA",
  zip: "92646",
  established: 2003,
  facebook: "https://www.facebook.com/happydoggroomingHB/",
  mapsQuery: "Happy Dog Grooming Salon, 9592 Hamilton Ave, Huntington Beach, CA 92646",
};

export const hours = [
  { d: "Monday – Friday", h: "8:00 AM – 6:00 PM" },
  { d: "Saturday", h: "10:00 AM – 4:00 PM" },
  { d: "Sunday", h: "11:00 AM – 4:00 PM" },
];

// Representative sample pricing — clearly labeled as such in the UI.
export const services = [
  {
    name: "The Spa Bath",
    tag: "Fresh & fluffy",
    price: "from $35",
    icon: "bath",
    blurb: "Warm bath with gentle shampoo, blow-dry, brush-out, ear cleaning and a nail trim to finish.",
    includes: ["Gentle warm-water bath", "Blow-dry & brush-out", "Ears cleaned", "Nails trimmed"],
  },
  {
    name: "Full Groom",
    tag: "Most popular",
    price: "from $65",
    icon: "scissors",
    blurb: "The complete package — bath, full haircut styled to your breed, tidy paws, sanitary trim and a bandana.",
    includes: ["Everything in Spa Bath", "Full haircut & style", "Paw & sanitary trim", "Bow or bandana"],
    featured: true,
  },
  {
    name: "Breed-Specific Cuts",
    tag: "Made to standard",
    price: "from $70",
    icon: "star",
    blurb: "Poodle, Doodle, Schnauzer, Shih Tzu and more — cut to breed standard or however your pup wears it best.",
    includes: ["Breed-standard styling", "Hand-finished scissoring", "Face & feet detailing", "Style consult"],
  },
  {
    name: "Nail Trim & Grind",
    tag: "Quick visit",
    price: "from $15",
    icon: "paw",
    blurb: "A fast, calm nail trim with an optional smooth grind. Walk-ins welcome when the schedule allows.",
    includes: ["Careful nail trim", "Optional smooth grind", "Paw-pad check", "Treats included"],
  },
  {
    name: "De-Shedding Treatment",
    tag: "Less fur everywhere",
    price: "from $45",
    icon: "brush",
    blurb: "A deep de-shed bath and specialized brush-out that clears loose undercoat and keeps shedding down for weeks.",
    includes: ["De-shed shampoo & conditioner", "Undercoat brush-out", "High-velocity dry", "Coat finish"],
  },
  {
    name: "Puppy's First Groom",
    tag: "Gentle intro",
    price: "from $30",
    icon: "heart",
    blurb: "A short, sweet, low-stress first visit built to help puppies learn that grooming is a happy place.",
    includes: ["Gentle bath", "Light tidy-up", "Nails & ears", "Lots of praise"],
  },
];

// Representative size tiers for pricing — labeled clearly in the UI.
export const sizeTiers = [
  { name: "Small", ex: "Chihuahua, Yorkie, Pom", weight: "up to ~20 lb" },
  { name: "Medium", ex: "Cocker, Beagle, Sheltie", weight: "~20–50 lb" },
  { name: "Large", ex: "Lab, Golden, Aussie", weight: "~50–90 lb" },
  { name: "X-Large", ex: "Samoyed, Shepherd, Doodle", weight: "90 lb+ / heavy coat" },
];

// Representative sample pricing by dog size — clearly labeled in the UI.
// Order of prices matches sizeTiers above (Small, Medium, Large, X-Large).
export const pricing = [
  { service: "Bath & Brush", note: "Bath, blow-dry, brush-out, ears & nails", prices: ["$35", "$45", "$60", "$75"] },
  { service: "Full Groom", note: "Bath + full haircut styled to your dog", prices: ["$55", "$70", "$90", "$110"], featured: true },
  { service: "Breed-Specific Cut", note: "Cut to breed standard, hand-finished", prices: ["$60", "$75", "$95", "$120"] },
  { service: "De-Shedding Treatment", note: "Deep de-shed bath + undercoat blow-out", prices: ["$45", "$60", "$75", "$95"] },
  { service: "Puppy's First Groom", note: "Gentle intro visit, pups under 6 months", prices: ["$30", "$35", "$40", "$45"] },
];

// À la carte add-ons — representative sample pricing.
export const addOns = [
  { name: "Nail trim & file", price: "$15", emoji: "🐾" },
  { name: "Teeth brushing", price: "$12", emoji: "🦷" },
  { name: "Ear cleaning", price: "$10", emoji: "👂" },
  { name: "Flea & tick bath", price: "$18", emoji: "🛁" },
  { name: "De-shed upgrade", price: "$20", emoji: "🧴" },
  { name: "Sanitary trim", price: "$12", emoji: "✂️" },
  { name: "Paw balm & pad trim", price: "$10", emoji: "🐾" },
  { name: "Blueberry facial", price: "$8", emoji: "🫐" },
];

export const faqs = [
  {
    q: "How long does a grooming appointment take?",
    a: "Most baths take about an hour, and a full groom usually runs two to three hours depending on your dog's size, coat and temperament. We never rush a nervous pup — comfort comes first.",
  },
  {
    q: "Do you groom all breeds and sizes?",
    a: "Yes. From tiny toy breeds to big fluffy doubles-coats, we've groomed just about everything over 20 years in Huntington Beach. Tell us your breed when you book and we'll plan the right time and price.",
  },
  {
    q: "My dog is anxious or older. Can you help?",
    a: "Absolutely. We specialize in calm, patient handling and go at your dog's pace. Let us know about any anxiety, sensitivities or health needs ahead of time so we can make the visit as easy as possible.",
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are strongly recommended so we can give your dog our full attention. Quick nail trims are often available as walk-ins when the schedule allows — call ahead to check.",
  },
  {
    q: "What about vaccinations?",
    a: "For the safety of every pup in the shop, please keep your dog current on their core vaccinations. Bring records for your first visit if you can.",
  },
  {
    q: "What if my dog's coat is badly matted?",
    a: "Matting is common and we handle it gently. Light mats we can usually brush out. For tight or pelted coats, humane de-matting has limits — never worth hurting your dog — so we may recommend a shorter, comfortable cut instead. We'll always talk it through with you first and never pull on the skin.",
  },
  {
    q: "How should I prepare for the first visit?",
    a: "Bring vaccination records, let your dog have a good potty break beforehand, and tell us about any anxiety, health needs or the look you love. A quick walk before drop-off helps nervous pups settle. That's it — we'll take it from there.",
  },
  {
    q: "How much will my groom cost?",
    a: "Prices shown here are representative starting points. Final pricing depends on your dog's size, coat condition and the style you choose. Call us and we'll give you a friendly, honest quote.",
  },
];
