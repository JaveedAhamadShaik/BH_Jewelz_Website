import logo from "@/assets/bh-logo.jpg";

export const BRAND = {
  name: "BH_JEWELZ",
  logo,
  whatsappNumber: "919121555815",
  whatsappDisplay: "+91 91215 55815",
  phone: "+919121555815",
  phoneDisplay: "+91 91215 55815",
  email: "bhjewelz1320@gmail.com",
  instagram: "https://www.instagram.com/bh_jewelz/",
  instagramHandle: "@bh_jewelz",
  facebook: "https://www.facebook.com/",
};

export const waLink = (msg = "Hi BH_JEWELZ, I'm interested in your jewelry") =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(msg)}`;
