function populateContent() {
  const d = propertyData;

  document.title = `${d.address} | ${d.status}`;
  document.getElementById("nav-address").textContent = d.address;
  document.getElementById("hero-price").textContent = d.price;
  document.getElementById("hero-address").textContent = `${d.address}, ${d.cityStateZip}`;
  document.getElementById("hero-status").textContent = d.status;
  document.getElementById("hero-tagline").textContent = d.tagline;
  document.getElementById("footer-address").textContent = `${d.address}, ${d.cityStateZip}`;

  document.getElementById("topbar-phone-text").textContent = d.agent.phone;
  document.getElementById("topbar-phone").href = `tel:${d.agent.phone.replace(/[^\d+]/g, "")}`;
  document.getElementById("topbar-email-text").textContent = d.agent.email;
  document.getElementById("topbar-email").href = `mailto:${d.agent.email}`;

  document.getElementById("fact-beds").textContent = d.beds;
  document.getElementById("fact-baths").textContent = d.baths;
  document.getElementById("fact-floors").textContent = d.floors;
  document.getElementById("fact-floorarea").textContent = d.floorArea;

  document.getElementById("description").textContent = d.description;

  const roomsGrid = document.getElementById("rooms-grid");
  roomsGrid.innerHTML = "";
  d.rooms.forEach((room) => {
    const card = document.createElement("div");
    card.className = "room-card";
    card.innerHTML = `
      <div class="room-photo" style="background-image:url('assets/images/rooms/${room.image}')"></div>
      <div class="room-body">
        <p class="room-name">${room.name}</p>
        <p class="room-caption">${room.caption}</p>
      </div>
    `;
    roomsGrid.appendChild(card);
  });

  const featuresGrid = document.getElementById("features-grid");
  featuresGrid.innerHTML = "";
  d.features.forEach((feature) => {
    const item = document.createElement("div");
    item.className = "feature-item";
    item.innerHTML = `<i class="ti ti-${feature.icon}" aria-hidden="true"></i><span>${feature.label}</span>`;
    featuresGrid.appendChild(item);
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

  loadBackgroundPhoto("assets/images/hero.jpg", "hero-photo");
  loadBackgroundPhoto("assets/images/about.jpg", "about-photo", "assets/images/hero.jpg");
}

function loadBackgroundPhoto(src, elementId, fallbackSrc) {
  const img = new Image();
  img.onload = () => {
    document.getElementById(elementId).style.backgroundImage = `url(${src})`;
  };
  img.onerror = () => {
    if (fallbackSrc) loadBackgroundPhoto(fallbackSrc, elementId);
  };
  img.src = src;
}

function loadGallery() {
  const grid = document.getElementById("gallery-grid");
  const emptyNote = document.getElementById("gallery-empty");
  const maxPhotos = 30;

  function tryLoad(i) {
    if (i > maxPhotos) return;
    const src = `assets/images/gallery/${i}.jpg`;
    const img = new Image();
    img.onload = () => {
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

async function sendInquiry({ form, note, subject, body }) {
  if (!propertyData.formspreeId) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${propertyData.agent.email}?subject=${encodedSubject}&body=${encodedBody}`;
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
}

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  sendInquiry({
    form,
    note: document.getElementById("form-note"),
    subject: `Inquiry: ${propertyData.address}`,
    body: `Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`,
  });
});

document.getElementById("tour-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  sendInquiry({
    form,
    note: document.getElementById("tour-note"),
    subject: `Tour request: ${propertyData.address}`,
    body: `Name: ${form.name.value}\nPhone: ${form.phone.value}\nPreferred date: ${form.date.value}`,
  });
});

populateContent();
loadGallery();
