import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { PRODUCTS } from "@/lib/products";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");

  useEffect(() => { if (!searchOpen) setQ(""); }, [searchOpen]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.collection.toLowerCase().includes(term)
    ).slice(0, 8);
  }, [q]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-onyx/85 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-2xl gold-border rounded-lg overflow-hidden shadow-deep"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/20">
              <Search className="w-4 h-4 text-gold" />
              <input autoFocus value={q} onChange={e => setQ(e.target.value)}
                placeholder="Search rings, harams, panchaloham..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
              <button onClick={() => setSearchOpen(false)} className="text-muted-foreground hover:text-gold">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-96 overflow-auto">
              {q && results.length === 0 && (
                <p className="p-8 text-center text-muted-foreground text-sm">No products found.</p>
              )}
              {results.map(p => (
                <Link key={p.id} to="/product/$id" params={{ id: p.id }} onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-4 px-5 py-3 hover:bg-gold/10 transition border-b border-gold/10 last:border-0">
                  <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold/70">{p.collection} · {p.category}</p>
                    <p className="font-display text-foreground truncate">{p.name}</p>
                  </div>
                  <span className="text-gradient-gold font-semibold">₹{p.price.toLocaleString()}</span>
                </Link>
              ))}
              {!q && (
                <div className="p-6 text-sm text-muted-foreground">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Try</p>
                  <div className="flex flex-wrap gap-2">
                    {["ring", "haram", "gold", "panchaloham", "earrings"].map(t => (
                      <button key={t} onClick={() => setQ(t)} className="px-3 py-1 border border-gold/30 rounded-full text-xs hover:bg-gold/10">{t}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
