import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SparkleField } from "./SparkleField";
import { BRAND } from "@/lib/brand";

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => finish(), 2800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    setShow(false);
    setTimeout(onDone, 800);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
        >
          <SparkleField density={120} />

          {/* Radial golden glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1.4 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute h-[600px] w-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(241,196,100,0.25), transparent 70%)" }}
          />

          {/* Logo SVG drawn in gold */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-48 h-48 rounded-full overflow-hidden ring-2 ring-gold/50 shadow-gold bg-[#fdf6e8] flex items-center justify-center"
            >
              <img src={BRAND.logo} alt="BH_JEWELZ" className="w-[150%] h-[150%] object-cover scale-110" />
              <span className="absolute inset-0 rounded-full shimmer opacity-60" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="mt-8 font-display text-4xl md:text-5xl text-gradient-gold relative"
            >
              BH_JEWELZ
              <motion.span
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{ duration: 1.2, delay: 1.8, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,240,200,0.65), transparent)",
                  mixBlendMode: "overlay",
                }}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="mt-3 text-xs md:text-sm tracking-[0.35em] uppercase text-gold-soft/80"
            >
              Elegance That Shines Forever
            </motion.p>
          </div>

          <button
            onClick={finish}
            className="absolute bottom-8 right-8 text-xs tracking-[0.3em] uppercase text-gold-soft/60 hover:text-gold transition-colors border border-gold/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
