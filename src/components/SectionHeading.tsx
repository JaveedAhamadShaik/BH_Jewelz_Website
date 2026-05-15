import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }}
      className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {eyebrow && <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{eyebrow}</p>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
      <div className={`mt-6 luxury-divider w-32 ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
