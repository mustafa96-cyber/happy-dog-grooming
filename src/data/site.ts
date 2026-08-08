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
    q: "How much will my groom cost?",
    a: "Prices shown here are representative starting points. Final pricing depends on your dog's size, coat condition and the style you choose. Call us and we'll give you a friendly, honest quote.",
  },
];
