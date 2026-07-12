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

  // Sơ đồ mặt bằng từng tầng — minh họa, kích thước tương đối (không theo tỉ lệ thật).
  // Mỗi phòng có thể có "roomRef" trỏ tới đúng "name" trong mảng rooms[] ở trên để
  // bấm vào phòng sẽ mở ảnh tương ứng. Để trống roomRef nếu phòng đó chưa có ảnh riêng.
  // type: "core" = khu vực kỹ thuật (thang bộ/thang máy, không bấm được)
  //       "outdoor" = ban công/sân ngoài trời (viền nét đứt)
  //       (không có type) = phòng thường
  floorPlans: [
    {
      id: "t1",
      label: "Tầng 1",
      viewBox: "0 0 500 1200",
      rooms: [
        { name: "Gara / Sảnh vào", x: 0, y: 0, width: 500, height: 440 },
        { name: "Thang bộ + Thang máy", x: 0, y: 440, width: 500, height: 320, type: "core" },
        { name: "WC chung", x: 0, y: 760, width: 500, height: 440, roomRef: "Phòng tắm" },
      ],
    },
    {
      id: "t2",
      label: "Tầng 2",
      viewBox: "0 0 500 1200",
      rooms: [
        { name: "Phòng khách", x: 0, y: 0, width: 500, height: 440, roomRef: "Phòng khách" },
        { name: "Thang bộ + Thang máy", x: 0, y: 440, width: 500, height: 320, type: "core" },
        { name: "Bếp + Ăn", x: 0, y: 760, width: 500, height: 440, roomRef: "Bếp" },
      ],
    },
    {
      id: "t3",
      label: "Tầng 3",
      viewBox: "0 0 500 1200",
      rooms: [
        { name: "Phòng ngủ 1", x: 0, y: 0, width: 350, height: 440, roomRef: "Phòng ngủ" },
        { name: "WC1", x: 350, y: 0, width: 150, height: 440, roomRef: "Phòng tắm" },
        { name: "Thang bộ + Thang máy", x: 0, y: 440, width: 500, height: 320, type: "core" },
        { name: "Phòng ngủ 2", x: 0, y: 760, width: 350, height: 440, roomRef: "Phòng ngủ" },
        { name: "WC2", x: 350, y: 760, width: 150, height: 440, roomRef: "Phòng tắm" },
      ],
    },
    {
      id: "t4",
      label: "Tầng 4",
      viewBox: "0 0 500 1200",
      rooms: [
        { name: "Phòng ngủ 3", x: 0, y: 0, width: 350, height: 440, roomRef: "Phòng ngủ" },
        { name: "WC3", x: 350, y: 0, width: 150, height: 440, roomRef: "Phòng tắm" },
        { name: "Thang bộ + Thang máy", x: 0, y: 440, width: 500, height: 320, type: "core" },
        { name: "Phòng ngủ 4", x: 0, y: 760, width: 350, height: 440, roomRef: "Phòng ngủ" },
        { name: "WC4", x: 350, y: 760, width: 150, height: 440, roomRef: "Phòng tắm" },
      ],
    },
    {
      id: "t5",
      label: "Tầng 5",
      viewBox: "0 0 500 1200",
      rooms: [
        { name: "Phòng quần áo", x: 0, y: 0, width: 330, height: 440 },
        { name: "WC", x: 330, y: 0, width: 170, height: 440, roomRef: "Phòng tắm" },
        { name: "Thang bộ + Thang máy", x: 0, y: 440, width: 500, height: 320, type: "core" },
        { name: "Phòng ngủ 5", x: 0, y: 760, width: 330, height: 440, roomRef: "Phòng ngủ" },
        { name: "WC5", x: 330, y: 760, width: 170, height: 440, roomRef: "Phòng tắm" },
      ],
    },
    {
      id: "tum",
      label: "Tầng thượng (Tum)",
      viewBox: "0 0 500 1200",
      rooms: [
        { name: "Sân thượng", x: 0, y: 0, width: 500, height: 440, roomRef: "Sân thượng", type: "outdoor" },
        { name: "Phòng thờ", x: 0, y: 440, width: 500, height: 760, roomRef: "Phòng thờ" },
      ],
    },
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
