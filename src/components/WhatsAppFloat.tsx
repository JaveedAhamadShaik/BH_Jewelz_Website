import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/brand";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink()}
      target="_blank" rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl animate-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </motion.a>
  );
}
