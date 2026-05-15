import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { IMG } from "@/lib/products";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About — BH_JEWELZ" }, { name: "description", content: "The story of BH_JEWELZ — luxury jewelry for everyday royalty." }] }),
});

function About() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Our Story" title="Born From Tradition, Crafted for Today" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="aspect-[16/8] overflow-hidden rounded-lg gold-border shadow-deep mb-12">
          <img src={IMG.necklace} alt="BH_JEWELZ" className="h-full w-full object-cover" />
        </motion.div>
        <div className="prose prose-invert max-w-none space-y-6 text-foreground/85 text-lg leading-relaxed">
          <p>BH_JEWELZ was born from a simple belief — that every woman deserves to feel royal, every day. We bring together the timeless artistry of Indian craftsmanship with the convenience of modern online shopping.</p>
          <p>Our signature 1 Gram Gold collection mirrors the look of solid gold heirlooms at a fraction of the cost, while our Panchaloham line honors centuries-old spiritual tradition with pieces blessed for everyday wear.</p>
          <p>From bridal harams to delicate daily chains — every piece is curated, inspected, and wrapped with intention. Welcome to the Maison.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[["10K+", "Happy Customers"], ["500+", "Curated Designs"], ["100%", "Quality Promise"]].map(([n, l]) => (
            <div key={l} className="gold-border rounded-lg p-8 text-center">
              <p className="font-display text-5xl text-gradient-gold">{n}</p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
