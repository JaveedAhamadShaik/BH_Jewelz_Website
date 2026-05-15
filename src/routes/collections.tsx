import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CATEGORIES, IMG } from "@/lib/products";

export const Route = createFileRoute("/collections")({
  component: Collections,
  head: () => ({ meta: [{ title: "Collections — BH_JEWELZ" }, { name: "description", content: "Explore all jewelry collections from BH_JEWELZ." }] }),
});

const IMAGES: Record<string, string> = {
  "Neck Sets": IMG.neckset, "Harams": IMG.haram, "Finger Rings": IMG.rings, "Bangles": IMG.bangles,
  "Earrings": IMG.earrings, "Daily Wear Chains": IMG.necklace, "Black Beads": IMG.necklace,
  "Kadas": IMG.bangles, "Mangtikka": IMG.haram, "Anklets": IMG.bangles, "Bracelets": IMG.bangles,
  "Beads Neck Sets": IMG.neckset,
};

function Collections() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Browse" title="Our Collections" subtitle="From everyday delights to ceremonial heirlooms." />

        <div className="mb-20">
          <h3 className="font-display text-3xl text-gold mb-8 tracking-wide">1 Gram Gold</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {CATEGORIES["1 Gram Gold"].map((c, i) => (
              <motion.div key={c}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Link to="/shop" search={{ collection: "1 Gram Gold", category: c, sort: "featured" }} className="group block aspect-square relative overflow-hidden rounded-lg gold-border">
                  <img src={IMAGES[c] || IMG.necklace} alt={c} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 font-display text-xl text-foreground group-hover:text-gradient-gold">{c}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl text-rose-gold mb-8 tracking-wide">Panchaloham</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {CATEGORIES["Panchaloham"].map((c, i) => (
              <motion.div key={c}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Link to="/shop" search={{ collection: "Panchaloham", category: c, sort: "featured" }} className="group block aspect-square relative overflow-hidden rounded-lg gold-border">
                  <img src={IMG.panchaloham} alt={c} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 font-display text-xl text-foreground group-hover:text-gradient-gold">{c}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
