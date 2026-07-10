const propertyData = {
  status: "For sale",
  price: "14 tỷ ₫",
  address: "123 Maple Street",
  cityStateZip: "Springfield, IL 62704",
  tagline: "A sunlit 1920s colonial in the heart of Springfield",

  beds: 8,
  baths: 7,
  floors: "5 + rooftop",
  floorArea: "300 m²",

  description:
    "Replace this with two or three sentences describing the home — style, recent updates, standout rooms, and what makes the neighborhood great.",

  // One card per room. Photos go in assets/images/rooms/<image>.
  rooms: [
    { image: "living-room.jpg", name: "Living room", caption: "Replace with a real caption" },
    { image: "bedroom.jpg", name: "Bedroom", caption: "Replace with a real caption" },
    { image: "bathroom.jpg", name: "Bathroom", caption: "Replace with a real caption" },
    { image: "rooftop-terrace.jpg", name: "Rooftop terrace", caption: "Replace with a real caption" },
  ],

  // Tabler icon names (without the "ti-" prefix) — browse icons at tabler.io/icons
  features: [
    { icon: "elevator", label: "Private elevator" },
    { icon: "stairs", label: "Marble staircase" },
    { icon: "sun", label: "Rooftop terrace" },
    { icon: "building", label: "Corner lot" },
    { icon: "bulb", label: "New construction" },
    { icon: "snowflake", label: "6 A/C units" },
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
