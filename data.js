const propertyData = {
  status: "Đang bán",
  price: "14 tỷ VND",
  address: "Số 23, ngách 309/16 đường Nguyễn Đức Thuận",
  cityStateZip: "Xã Gia Lâm, Hà Nội",
  tagline: "Nhà mới xây, 5 tầng 1 tum, đầy đủ nội thất",

  beds: 8,
  baths: 7,
  floors: "5 tầng + tum",
  floorArea: "300 m²",

  description:
    "Nhà mới xây 5 tầng 1 tum, thiết kế hiện đại với thang máy riêng và cầu thang ốp đá marble sang trọng. Sân thượng rộng có mái kính lấy sáng, view thoáng toàn cảnh khu vực. Nhà góc 2 mặt thoáng, phòng thờ trang trọng riêng biệt, sẵn sàng vào ở ngay.",

  // Mỗi phòng có thể có 1-2 ảnh, lấy trực tiếp từ assets/images/gallery/<số>.jpg
  rooms: [
    { images: ["gallery/7.jpg", "gallery/8.jpg"], name: "Phòng khách", caption: "Không gian tiếp khách rộng rãi, sàn gỗ ấm cúng" },
    { images: ["gallery/6.jpg"], name: "Bếp", caption: "Bếp liền phòng khách, tủ bếp kịch trần, đầy đủ thiết bị" },
    { images: ["gallery/10.jpg", "gallery/11.jpg"], name: "Phòng ngủ", caption: "Thoáng sáng, sàn gỗ, cửa sổ lớn đón view thành phố" },
    { images: ["gallery/12.jpg", "gallery/13.jpg"], name: "Phòng tắm", caption: "Thiết kế hiện đại, khu tắm đứng riêng biệt, ốp đá cao cấp" },
    { images: ["gallery/22.jpg", "gallery/23.jpg"], name: "Phòng thờ", caption: "Không gian thờ cúng trang trọng, gỗ chạm khắc tinh xảo" },
    { images: ["gallery/24.jpg", "gallery/25.jpg"], name: "Sân thượng", caption: "Rộng rãi, mái kính lấy sáng, view toàn cảnh thành phố" },
  ],

  // Tên icon Tabler (không có tiền tố "ti-") — xem thêm tại tabler.io/icons
  features: [
    { icon: "elevator", label: "Thang máy riêng" },
    { icon: "stairs", label: "Cầu thang đá marble" },
    { icon: "sun", label: "Sân thượng" },
    { icon: "building", label: "Nhà góc, 2 mặt thoáng" },
    { icon: "bulb", label: "Nhà mới xây" },
    { icon: "snowflake", label: "6 điều hòa" },
  ],

  // Tọa độ chính xác lấy từ link Google Maps, đảm bảo ghim đúng vị trí
  mapQuery: "21.0086932,105.9560685",

  agent: {
    name: "Ngọc Hoa",
    phone: "0989 812 007",
    // Chưa có email — form sẽ hướng người xem gọi trực tiếp số điện thoại.
    email: "",
  },

  // Formspree endpoint id (từ formspree.io). Để trống để dùng mailto thay thế
  // cho cả form đặt lịch xem nhà và form liên hệ.
  formspreeId: "",
};
