const propertyData = {
  status: "Đang bán",
  price: "14 tỷ ₫",
  address: "Địa chỉ nhà",
  cityStateZip: "Cập nhật khu vực, thành phố",
  tagline: "Nhà mới xây, 5 tầng 1 tum, đầy đủ nội thất",

  beds: 8,
  baths: 7,
  floors: "5 tầng + tum",
  floorArea: "300 m²",

  description:
    "Thay bằng 2-3 câu mô tả về căn nhà — phong cách thiết kế, nội thất, điểm nổi bật và khu vực xung quanh.",

  // Mỗi phòng có thể có 1-2 ảnh, lấy trực tiếp từ assets/images/gallery/<số>.jpg
  rooms: [
    { images: ["gallery/7.jpg", "gallery/8.jpg"], name: "Phòng khách", caption: "Thay bằng mô tả thật" },
    { images: ["gallery/6.jpg"], name: "Bếp", caption: "Thay bằng mô tả thật" },
    { images: ["gallery/10.jpg", "gallery/11.jpg"], name: "Phòng ngủ", caption: "Thay bằng mô tả thật" },
    { images: ["gallery/12.jpg", "gallery/13.jpg"], name: "Phòng tắm", caption: "Thay bằng mô tả thật" },
    { images: ["gallery/22.jpg", "gallery/23.jpg"], name: "Phòng thờ", caption: "Thay bằng mô tả thật" },
    { images: ["gallery/24.jpg", "gallery/25.jpg"], name: "Sân thượng", caption: "Thay bằng mô tả thật" },
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

  mapQuery: "Nhập địa chỉ đầy đủ ở đây",

  agent: {
    name: "Tên người liên hệ",
    phone: "(0) 000 000 000",
    email: "email@example.com",
  },

  // Formspree endpoint id (từ formspree.io). Để trống để dùng mailto thay thế
  // cho cả form đặt lịch xem nhà và form liên hệ.
  formspreeId: "",
};
