import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { IntroAnimation } from "./IntroAnimation";
import { SearchModal } from "./SearchModal";
import { StoreProvider } from "@/lib/store";
import { motion, useScroll } from "framer-motion";
import { Toaster } from "sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("bh_intro_seen")) {
      setIntroDone(true);
    }
  }, []);

  const handleIntroDone = () => {
    sessionStorage.setItem("bh_intro_seen", "1");
    setIntroDone(true);
  };

  return (
    <StoreProvider>
      {!introDone && <IntroAnimation onDone={handleIntroDone} />}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-gold origin-left z-[60]"
      />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <SearchModal />
      <Toaster position="bottom-center" theme="dark" toastOptions={{ style: { background: "oklch(0.16 0.01 60)", border: "1px solid oklch(0.78 0.14 80 / 0.3)", color: "oklch(0.96 0.02 85)" } }} />
    </StoreProvider>
  );
}
