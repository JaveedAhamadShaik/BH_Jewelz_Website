import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SparkleField } from "@/components/SparkleField";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, IMG } from "@/lib/products";

export const Route = createFileRoute("/panchaloham")({
  component: Panchaloham,
  head: () => ({ meta: [
    { title: "Panchaloham Collection — BH_JEWELZ" },
    { name: "description", content: "Sacred Panchaloham jewelry — five-metal traditional pieces with spiritual significance." },
  ]}),
});

function Panchaloham() {
  const items = PRODUCTS.filter(p => p.collection === "Panchaloham");
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.panchaloham} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        </div>
        <SparkleField density={60} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] uppercase text-rose-gold mb-6">
            ✦ Sacred · Spiritual · Eternal ✦
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl text-gradient-gold max-w-3xl leading-tight">
            The Panchaloham Collection
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-foreground/80 leading-relaxed">
            Forged from five sacred metals — gold, silver, copper, zinc, and iron — Panchaloham jewelry carries blessings, balance, and timeless meaning.
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Heritage Pieces" title="Spiritual Adornments" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            {/* fill to feel abundant */}
            {PRODUCTS.slice(0, 4).map((p, i) => <ProductCard key={"x"+p.id} product={p} index={i+items.length} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/shop" className="border border-gold text-gold px-8 py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:bg-gold hover:text-onyx transition">Shop All</Link>
          </div>
        </div>
      </section>
    </>
  );
}
