import necklace from "@/assets/hero-necklace.jpg";
import bangles from "@/assets/cat-bangles.jpg";
import haram from "@/assets/cat-haram.jpg";
import rings from "@/assets/cat-rings.jpg";
import neckset from "@/assets/cat-neckset.jpg";
import panchaloham from "@/assets/cat-panchaloham.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import pChain from "@/assets/p-chain.jpg";
import pMangalsutra from "@/assets/p-mangalsutra.jpg";
import pJhumka from "@/assets/p-jhumka.jpg";
import pStuds from "@/assets/p-studs.jpg";
import pKada from "@/assets/p-kada.jpg";
import pAnklet from "@/assets/p-anklet.jpg";
import pBracelet from "@/assets/p-bracelet.jpg";
import pTikka from "@/assets/p-tikka.jpg";
import pOm from "@/assets/p-om.jpg";
import pLakshmi from "@/assets/p-lakshmi.jpg";
import pBeadset from "@/assets/p-beadset.jpg";
import pRing2 from "@/assets/p-ring2.jpg";

export const IMG = {
  necklace, bangles, haram, rings, neckset, panchaloham, earrings,
  chain: pChain, mangalsutra: pMangalsutra, jhumka: pJhumka, studs: pStuds,
  kada: pKada, anklet: pAnklet, bracelet: pBracelet, tikka: pTikka,
  om: pOm, lakshmi: pLakshmi, beadset: pBeadset, ring2: pRing2,
};

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  collection: "1 Gram Gold" | "Panchaloham";
  isNew?: boolean;
  isBestSeller?: boolean;
  description?: string;
};

export const PRODUCTS: Product[] = [
  // ===== 1 Gram Gold — Neck Sets =====
  { id: "ng1", name: "Royal Filigree Neck Set", price: 4499, oldPrice: 5999, image: neckset, category: "Neck Sets", collection: "1 Gram Gold", isBestSeller: true },
  { id: "ng2", name: "Antique Bridal Neck Set", price: 5999, image: neckset, category: "Neck Sets", collection: "1 Gram Gold", isBestSeller: true },
  { id: "ng3", name: "Pearl Choker Neck Set", price: 4799, oldPrice: 5499, image: pBeadset, category: "Neck Sets", collection: "1 Gram Gold", isNew: true },
  { id: "ng4", name: "Kundan Stone Neck Set", price: 6299, image: neckset, category: "Neck Sets", collection: "1 Gram Gold" },
  { id: "ng5", name: "Layered Temple Neck Set", price: 5499, image: pBeadset, category: "Neck Sets", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Harams =====
  { id: "hg1", name: "Temple Haram Long", price: 7299, oldPrice: 8999, image: haram, category: "Harams", collection: "1 Gram Gold", isBestSeller: true },
  { id: "hg2", name: "Lakshmi Coin Haram", price: 8499, image: haram, category: "Harams", collection: "1 Gram Gold", isNew: true },
  { id: "hg3", name: "Mango Mala Haram", price: 6999, image: haram, category: "Harams", collection: "1 Gram Gold" },
  { id: "hg4", name: "Pearl Drop Long Haram", price: 7799, image: haram, category: "Harams", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Finger Rings =====
  { id: "fr1", name: "Heritage Stone Rings Set", price: 1499, image: rings, category: "Finger Rings", collection: "1 Gram Gold", isNew: true },
  { id: "fr2", name: "Solitaire Finger Ring", price: 1199, image: rings, category: "Finger Rings", collection: "1 Gram Gold" },
  { id: "fr3", name: "Bridal Multi-Stone Ring", price: 1899, image: pRing2, category: "Finger Rings", collection: "1 Gram Gold", isBestSeller: true },
  { id: "fr4", name: "Adjustable Floral Ring", price: 999, image: rings, category: "Finger Rings", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Daily Wear Chains =====
  { id: "dc1", name: "Daily Wear Gold Chain", price: 1299, image: pChain, category: "Daily Wear Chains", collection: "1 Gram Gold", isBestSeller: true },
  { id: "dc2", name: "Box Link Gold Chain", price: 1499, image: pChain, category: "Daily Wear Chains", collection: "1 Gram Gold" },
  { id: "dc3", name: "Rope Twist Chain", price: 1699, image: pChain, category: "Daily Wear Chains", collection: "1 Gram Gold", isNew: true },

  // ===== 1 Gram Gold — Black Beads =====
  { id: "bb1", name: "Mangalsutra Black Beads", price: 1799, image: pMangalsutra, category: "Black Beads", collection: "1 Gram Gold", isNew: true },
  { id: "bb2", name: "Short Mangalsutra Daily", price: 1599, image: pMangalsutra, category: "Black Beads", collection: "1 Gram Gold" },
  { id: "bb3", name: "Long Black Beads Chain", price: 2199, image: pMangalsutra, category: "Black Beads", collection: "1 Gram Gold", isBestSeller: true },

  // ===== 1 Gram Gold — Bangles =====
  { id: "ba1", name: "Pavé Bangles Stack", price: 2899, oldPrice: 3499, image: bangles, category: "Bangles", collection: "1 Gram Gold" },
  { id: "ba2", name: "Antique Carved Bangles", price: 3299, image: pKada, category: "Bangles", collection: "1 Gram Gold", isNew: true },
  { id: "ba3", name: "Slim Daily Bangles Set", price: 1899, image: bangles, category: "Bangles", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Kadas =====
  { id: "kd1", name: "Bridal Kada Pair", price: 3499, image: pKada, category: "Kadas", collection: "1 Gram Gold", isBestSeller: true },
  { id: "kd2", name: "Temple Carved Kada", price: 3899, image: pKada, category: "Kadas", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Mangtikka =====
  { id: "mt1", name: "Maang Tikka Classic", price: 999, image: pTikka, category: "Mangtikka", collection: "1 Gram Gold", isNew: true },
  { id: "mt2", name: "Bridal Mathapatti Set", price: 2499, image: pTikka, category: "Mangtikka", collection: "1 Gram Gold", isBestSeller: true },
  { id: "mt3", name: "Stone Drop Mangtikka", price: 1299, image: pTikka, category: "Mangtikka", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Earrings =====
  { id: "er1", name: "Ruby Jhumka Earrings", price: 1899, image: pJhumka, category: "Earrings", collection: "1 Gram Gold", isBestSeller: true },
  { id: "er2", name: "Stud Earrings Pearl", price: 899, image: pStuds, category: "Earrings", collection: "1 Gram Gold" },
  { id: "er3", name: "Chand Bali Earrings", price: 1699, image: pJhumka, category: "Earrings", collection: "1 Gram Gold", isNew: true },
  { id: "er4", name: "Hoop Earrings Gold", price: 1199, image: earrings, category: "Earrings", collection: "1 Gram Gold" },
  { id: "er5", name: "Long Drop Earrings", price: 1499, image: pJhumka, category: "Earrings", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Anklets =====
  { id: "an1", name: "Anklet Pair Ghungroo", price: 1599, image: pAnklet, category: "Anklets", collection: "1 Gram Gold" },
  { id: "an2", name: "Slim Chain Anklet", price: 1199, image: pAnklet, category: "Anklets", collection: "1 Gram Gold", isNew: true },

  // ===== 1 Gram Gold — Bracelets =====
  { id: "br1", name: "Charm Bracelet Gold", price: 1999, image: pBracelet, category: "Bracelets", collection: "1 Gram Gold" },
  { id: "br2", name: "Diamond-Look Tennis Bracelet", price: 2899, image: pBracelet, category: "Bracelets", collection: "1 Gram Gold", isBestSeller: true },
  { id: "br3", name: "Cuff Bracelet Carved", price: 2499, image: pBracelet, category: "Bracelets", collection: "1 Gram Gold" },

  // ===== 1 Gram Gold — Beads Neck Sets =====
  { id: "bn1", name: "Beaded Neck Set Gold", price: 2599, image: pBeadset, category: "Beads Neck Sets", collection: "1 Gram Gold" },
  { id: "bn2", name: "Pearl Beads Choker", price: 2899, image: pBeadset, category: "Beads Neck Sets", collection: "1 Gram Gold", isNew: true },

  // ===== Panchaloham =====
  { id: "pr1", name: "Panchaloham Sacred Ring", price: 2199, image: rings, category: "Rings", collection: "Panchaloham", isBestSeller: true },
  { id: "pr2", name: "Panchaloham Gemstone Ring", price: 2599, image: pRing2, category: "Rings", collection: "Panchaloham" },
  { id: "pc1", name: "Sacred Panchaloham Chain", price: 4199, image: pChain, category: "Chains", collection: "Panchaloham" },
  { id: "pc2", name: "Long Panchaloham Chain", price: 4699, image: pChain, category: "Chains", collection: "Panchaloham", isNew: true },
  { id: "pb1", name: "Spiritual Bracelet", price: 2499, image: pBracelet, category: "Bracelets", collection: "Panchaloham" },
  { id: "pb2", name: "Panchaloham Kada", price: 3299, image: pKada, category: "Bracelets", collection: "Panchaloham" },
  { id: "pp1", name: "Lakshmi Devi Pendant", price: 3299, image: pLakshmi, category: "Pendants", collection: "Panchaloham", isNew: true, isBestSeller: true },
  { id: "pp2", name: "Ganesha Sacred Pendant", price: 2899, image: pLakshmi, category: "Pendants", collection: "Panchaloham" },
  { id: "pp3", name: "Sai Baba Pendant", price: 2699, image: pLakshmi, category: "Pendants", collection: "Panchaloham" },
  { id: "pn1", name: "Traditional Neck Set", price: 5499, image: neckset, category: "Neck Sets", collection: "Panchaloham" },
  { id: "pn2", name: "Temple Bridal Neck Set", price: 6299, image: pBeadset, category: "Neck Sets", collection: "Panchaloham", isBestSeller: true },
  { id: "pt1", name: "Temple Traditional Haram", price: 6299, image: haram, category: "Traditional", collection: "Panchaloham", isNew: true },
  { id: "pt2", name: "Antique Temple Haram", price: 7499, image: haram, category: "Traditional", collection: "Panchaloham" },
  { id: "ps1", name: "Spiritual Om Pendant", price: 1899, image: pOm, category: "Spiritual", collection: "Panchaloham", isBestSeller: true },
  { id: "ps2", name: "Navagraha Pendant", price: 2199, image: pOm, category: "Spiritual", collection: "Panchaloham", isNew: true },
  { id: "ps3", name: "Trishul Spiritual Pendant", price: 1799, image: pOm, category: "Spiritual", collection: "Panchaloham" },
];

PRODUCTS.forEach(p => {
  p.description = `Exquisitely handcrafted ${p.category.toLowerCase()} from our ${p.collection} line — designed for timeless elegance and daily wear.`;
});

export const CATEGORIES = {
  "1 Gram Gold": ["Neck Sets","Harams","Finger Rings","Daily Wear Chains","Black Beads","Bangles","Kadas","Mangtikka","Earrings","Anklets","Bracelets","Beads Neck Sets"],
  "Panchaloham": ["Rings","Chains","Bracelets","Pendants","Neck Sets","Traditional","Spiritual"],
};

export const ALL_CATEGORIES = Array.from(new Set([
  ...CATEGORIES["1 Gram Gold"],
  ...CATEGORIES["Panchaloham"],
]));
