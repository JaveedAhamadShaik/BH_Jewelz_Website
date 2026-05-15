import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Truck, ShieldCheck, Gem, Heart } from "lucide-react";
import { SparkleField } from "@/components/SparkleField";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, IMG } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "BH_JEWELZ — Premium 1 Gram Gold & Panchaloham Jewelry" },
      { name: "description", content: "Timeless elegance crafted for every moment. Shop premium 1 Gram Gold and Panchaloham collections." },
    ],
  }),
});

const FEATURED = [
  { name: "Neck Sets", img: IMG.neckset, to: "/shop" },
  { name: "Harams", img: IMG.haram, to: "/shop" },
  { name: "Rings", img: IMG.rings, to: "/shop" },
  { name: "Bangles", img: IMG.bangles, to: "/shop" },
  { name: "Earrings", img: IMG.earrings, to: "/shop" },
  { name: "Panchaloham", img: IMG.panchaloham, to: "/panchaloham" },
];

const WHY = [
  { icon: Award, title: "Premium Quality", desc: "Handcrafted with finest materials" },
  { icon: Heart, title: "Affordable Luxury", desc: "Royal designs at sensible prices" },
  { icon: Sparkles, title: "Online Exclusive", desc: "Designs you'll find nowhere else" },
  { icon: ShieldCheck, title: "Trusted Brand", desc: "10,000+ happy customers" },
  { icon: Truck, title: "Fast Delivery", desc: "Free shipping pan-India" },
  { icon: Gem, title: "Elegant Designs", desc: "Curated by master artisans" },
];

const TESTIMONIALS = [
  { n: "Priya S.", t: "Absolutely stunning craftsmanship. Felt like real bridal gold." },
  { n: "Anitha R.", t: "The Panchaloham pendant is divine — wear it daily with pride." },
  { n: "Meera K.", t: "Best 1g gold jewelry online. Packaging was luxurious too!" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <SparkleField density={80} />
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-full md:w-3/5">
            <img src={IMG.necklace} alt="Luxury gold jewelry" width={1920} height={1080}
              className="h-full w-full object-cover opacity-60 md:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 md:via-background/40 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="text-xs tracking-[0.5em] uppercase text-gold mb-6"
            >
              ✦ BH_JEWELZ Maison ✦
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-gradient-gold"
            >
              Timeless Elegance,<br/>Crafted for<br/><em className="not-italic text-rose-gold">Every Moment</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="mt-6 max-w-lg text-lg text-foreground/80 leading-relaxed"
            >
              Discover Premium 1 Gram Gold & Panchaloham Jewelry Collections — designed to be worn, treasured, and passed down.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/shop" className="group relative bg-gradient-gold text-onyx px-8 py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold inline-flex items-center gap-3 hover:shadow-gold transition-all overflow-hidden">
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </Link>
              <Link to="/collections" className="border border-gold text-gold px-8 py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:bg-gold hover:text-onyx transition-all">
                Explore Collections
              </Link>
            </motion.div>
          </div>
        </div>

        {/* floating accents */}
        <div className="absolute bottom-10 left-10 hidden md:flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold/60">
          <span className="w-12 h-px bg-gold/40" /> Scroll to Discover
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Curated For You" title="Featured Collections" subtitle="Browse our most-loved silhouettes — from temple harams to everyday treasures." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {FEATURED.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link to={c.to} className="group block relative aspect-[4/5] overflow-hidden rounded-lg gold-border shadow-deep">
                  <img src={c.img} alt={c.name} loading="lazy" width={800} height={1000}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-2">Collection</p>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gradient-gold transition-all">{c.name}</h3>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 shimmer" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-28 px-6 bg-onyx/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Most Loved" title="Best Sellers" subtitle="Pieces our customers can't stop wearing." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 8).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/shop" className="border border-gold text-gold px-8 py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:bg-gold hover:text-onyx transition-all inline-flex items-center gap-3">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 px-6 relative overflow-hidden">
        <SparkleField density={40} />
        <div className="mx-auto max-w-7xl relative">
          <SectionHeading eyebrow="The BH_JEWELZ Promise" title="Why Choose Us" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="gold-border p-8 rounded-lg text-center group hover:shadow-gold transition-shadow"
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-onyx group-hover:animate-glow">
                  <w.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Words of Adornment" title="What Customers Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="gold-border p-8 rounded-lg relative"
              >
                <div className="text-gold text-5xl font-display leading-none">"</div>
                <p className="mt-2 text-foreground/85 italic leading-relaxed">{t.t}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-onyx font-semibold">{t.n[0]}</div>
                  <div>
                    <p className="text-sm text-foreground">{t.n}</p>
                    <p className="text-xs text-gold tracking-widest">★★★★★</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section className="py-28 px-6 bg-onyx/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="@bh_jewelz" title="Follow the Sparkle" subtitle="Tag us in your moments — be featured on our gallery." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[IMG.necklace, IMG.haram, IMG.bangles, IMG.earrings, IMG.rings, IMG.neckset, IMG.panchaloham, IMG.necklace].map((img, i) => (
              <motion.a
                key={i} href="https://www.instagram.com/bh_jewelz/" target="_blank" rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className={`relative overflow-hidden rounded-lg group ${i % 3 === 0 ? "row-span-2 aspect-[4/5]" : "aspect-square"}`}
              >
                <img src={img} alt="" loading="lazy" width={600} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-colors flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
