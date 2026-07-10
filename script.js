function populateContent() {
  const d = propertyData;

  document.title = `${d.address} | ${d.status}`;
  document.getElementById("nav-address").textContent = d.address;
  document.getElementById("hero-price").textContent = d.price;
  document.getElementById("hero-address").textContent = `${d.address}, ${d.cityStateZip}`;
  document.getElementById("hero-status").textContent = d.status;
  document.getElementById("footer-address").textContent = `${d.address}, ${d.cityStateZip}`;

  document.getElementById("fact-beds").textContent = d.beds;
  document.getElementById("fact-baths").textContent = d.baths;
  document.getElementById("fact-sqft").textContent = d.sqft;
  document.getElementById("fact-lot").textContent = d.lot;
  document.getElementById("fact-year").textContent = d.yearBuilt;

  document.getElementById("description").textContent = d.description;

  const featuresList = document.getElementById("features-list");
  featuresList.innerHTML = "";
  d.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  const initials = d.agent.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  document.getElementById("agent-initials").textContent = initials;
  document.getElementById("agent-name").textContent = `${d.agent.name}, listing agent`;
  document.getElementById("agent-details").textContent = `${d.agent.phone} · ${d.agent.email}`;

  document.getElementById("map-frame").src =
    `https://www.google.com/maps?q=${encodeURIComponent(d.mapQuery)}&output=embed`;

  const heroImg = new Image();
  heroImg.onload = () => {
    document.getElementById("hero-photo").style.backgroundImage = `url(assets/images/hero.jpg)`;
  };
  heroImg.src = "assets/images/hero.jpg";
}

function loadGallery() {
  const grid = document.getElementById("gallery-grid");
  const emptyNote = document.getElementById("gallery-empty");
  const maxPhotos = 30;
  let found = 0;

  function tryLoad(i) {
    if (i > maxPhotos) return;
    const src = `assets/images/gallery/${i}.jpg`;
    const img = new Image();
    img.onload = () => {
      found += 1;
      if (emptyNote) emptyNote.remove();
      const frame = document.createElement("div");
      frame.className = "frame gallery-frame";
      const el = document.createElement("img");
      el.src = src;
      el.alt = `Property photo ${i}`;
      frame.appendChild(el);
      frame.addEventListener("click", () => openLightbox(src));
      grid.appendChild(frame);
      tryLoad(i + 1);
    };
    img.onerror = () => {
      tryLoad(i + 1);
    };
    img.src = src;
  }

  tryLoad(1);
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = src;
  lightbox.classList.add("open");
}

document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("open");
});

document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const note = document.getElementById("form-note");
  const form = e.target;

  if (!propertyData.formspreeId) {
    const subject = encodeURIComponent(`Showing request: ${propertyData.address}`);
    const body = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`
    );
    window.location.href = `mailto:${propertyData.agent.email}?subject=${subject}&body=${body}`;
    return;
  }

  note.textContent = "Sending...";
  try {
    const res = await fetch(`https://formspree.io/f/${propertyData.formspreeId}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (res.ok) {
      note.textContent = "Thanks — we'll be in touch soon.";
      form.reset();
    } else {
      note.textContent = "Something went wrong. Please try again.";
    }
  } catch {
    note.textContent = "Something went wrong. Please try again.";
  }
});

populateContent();
loadGallery();
