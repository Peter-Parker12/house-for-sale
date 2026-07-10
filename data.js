const propertyData = {
  status: "For sale",
  price: "$685,000",
  address: "123 Maple Street",
  cityStateZip: "Springfield, IL 62704",
  tagline: "A sunlit 1920s colonial in the heart of Springfield",

  beds: 4,
  baths: 3,
  parking: 2,
  sqft: "2,400",
  lot: "0.3 acre",
  yearBuilt: 1998,

  description:
    "Replace this with two or three sentences describing the home — style, recent updates, standout rooms, and what makes the neighborhood great.",

  // One card per room. Photos go in assets/images/rooms/<image>.
  rooms: [
    { image: "living-room.jpg", name: "Living room", caption: "Original fireplace, south-facing light" },
    { image: "kitchen.jpg", name: "Kitchen", caption: "Rebuilt 2022, quartz counters" },
    { image: "primary-suite.jpg", name: "Primary suite", caption: "Walk-in closet, garden view" },
  ],

  // Tabler icon names (without the "ti-" prefix) — browse icons at tabler.io/icons
  features: [
    { icon: "flame", label: "Fireplace" },
    { icon: "trees", label: "Garden" },
    { icon: "car-garage", label: "Garage" },
    { icon: "sun", label: "South-facing" },
    { icon: "snowflake", label: "Central air" },
    { icon: "wash-dryclean", label: "Laundry room" },
  ],

  mapQuery: "123 Maple Street, Springfield, IL 62704",

  agent: {
    name: "Jane Doe",
    phone: "(555) 010-0182",
    email: "jane@email.com",
  },

  // Formspree endpoint id (from formspree.io). Leave blank to fall back
  // to a mailto link for both the tour-request bar and contact form.
  formspreeId: "",
};
