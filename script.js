let galleryImages = [];
let lightboxIndex = 0;

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
  const topbarEmail = document.getElementById("topbar-email");
  if (d.agent.email) {
    document.getElementById("topbar-email-text").textContent = d.agent.email;
    topbarEmail.href = `mailto:${d.agent.email}`;
  } else {
    topbarEmail.style.display = "none";
  }

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

    const photos = document.createElement("div");
    photos.className = "room-photos";
    photos.style.gridTemplateColumns = `repeat(${room.images.length}, 1fr)`;
    room.images.forEach((image) => {
      const photo = document.createElement("div");
      photo.className = "room-photo";
      photo.style.backgroundImage = `url('assets/images/${image}')`;
      photo.addEventListener("click", () => openLightboxByPath(image));
      photos.appendChild(photo);
    });

    const body = document.createElement("div");
    body.className = "room-body";
    body.innerHTML = `<p class="room-name">${room.name}</p><p class="room-caption">${room.caption}</p>`;

    card.appendChild(photos);
    card.appendChild(body);
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
  document.getElementById("agent-name").textContent = `${d.agent.name} · Người liên hệ`;
  document.getElementById("agent-details").textContent = d.agent.email
    ? `${d.agent.phone} · ${d.agent.email}`
    : d.agent.phone;

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
      const index = galleryImages.length;
      galleryImages.push(src);

      const frame = document.createElement("div");
      frame.className = "frame gallery-frame";
      const el = document.createElement("img");
      el.src = src;
      el.alt = `Ảnh nhà ${i}`;
      frame.appendChild(el);
      frame.addEventListener("click", () => openLightbox(index));
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

function openLightboxByPath(relativePath) {
  const src = `assets/images/${relativePath}`;
  const index = galleryImages.indexOf(src);
  if (index >= 0) {
    openLightbox(index);
    return;
  }
  // Gallery probe hasn't reached this photo yet — show it standalone.
  lightboxIndex = 0;
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-prev").style.display = "none";
  document.getElementById("lightbox-next").style.display = "none";
  document.getElementById("lightbox").classList.add("open");
}

function openLightbox(index) {
  if (index < 0 || galleryImages.length === 0) return;
  lightboxIndex = index;
  showLightboxImage();
  document.getElementById("lightbox").classList.add("open");
}

function showLightboxImage() {
  document.getElementById("lightbox-img").src = galleryImages[lightboxIndex];
  const multiple = galleryImages.length > 1;
  document.getElementById("lightbox-prev").style.display = multiple ? "flex" : "none";
  document.getElementById("lightbox-next").style.display = multiple ? "flex" : "none";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

function showNextImage() {
  lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
  showLightboxImage();
}

function showPrevImage() {
  lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  showLightboxImage();
}

const lightboxEl = document.getElementById("lightbox");

lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) closeLightbox();
});
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-next").addEventListener("click", (e) => {
  e.stopPropagation();
  showNextImage();
});
document.getElementById("lightbox-prev").addEventListener("click", (e) => {
  e.stopPropagation();
  showPrevImage();
});

document.addEventListener("keydown", (e) => {
  if (!lightboxEl.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});

let touchStartX = null;
lightboxEl.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
});
lightboxEl.addEventListener("touchend", (e) => {
  if (touchStartX === null) return;
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) showNextImage();
    else showPrevImage();
  }
  touchStartX = null;
});

async function sendInquiry({ form, note, subject, body }) {
  if (!propertyData.formspreeId && !propertyData.agent.email) {
    note.textContent = `Vui lòng gọi trực tiếp ${propertyData.agent.phone} để được hỗ trợ nhanh nhất.`;
    return;
  }

  if (!propertyData.formspreeId) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${propertyData.agent.email}?subject=${encodedSubject}&body=${encodedBody}`;
    return;
  }

  note.textContent = "Đang gửi...";
  try {
    const res = await fetch(`https://formspree.io/f/${propertyData.formspreeId}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (res.ok) {
      note.textContent = "Cảm ơn — chúng tôi sẽ liên hệ sớm.";
      form.reset();
    } else {
      note.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
    }
  } catch {
    note.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
  }
}

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  sendInquiry({
    form,
    note: document.getElementById("form-note"),
    subject: `Liên hệ: ${propertyData.address}`,
    body: `Họ tên: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`,
  });
});

document.getElementById("tour-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  sendInquiry({
    form,
    note: document.getElementById("tour-note"),
    subject: `Đặt lịch xem nhà: ${propertyData.address}`,
    body: `Họ tên: ${form.name.value}\nSố điện thoại: ${form.phone.value}\nNgày mong muốn: ${form.date.value}`,
  });
});

populateContent();
loadGallery();
