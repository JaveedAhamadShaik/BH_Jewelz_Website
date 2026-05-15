import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { BRAND } from "@/lib/brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/panchaloham", label: "Panchaloham" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { cartCount, wishlist, setSearchOpen } = useStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-gold/15">
      <div className="luxury-divider absolute bottom-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/50 shadow-gold bg-[#fdf6e8] flex items-center justify-center">
            <img src={BRAND.logo} alt="BH_JEWELZ" className="w-[150%] h-[150%] object-cover scale-110" />
            <span className="absolute inset-0 rounded-full shimmer opacity-40 pointer-events-none" />
          </div>
          <span className="font-display text-xl tracking-[0.25em] text-gradient-gold">BH_JEWELZ</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm tracking-[0.2em] uppercase text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <IconBtn label="Search" onClick={() => setSearchOpen(true)}><Search className="w-4 h-4" /></IconBtn>
          <Link to="/wishlist"><IconBtn label="Wishlist">
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && <Badge>{wishlist.length}</Badge>}
          </IconBtn></Link>
          <Link to="/login"><IconBtn label="Account"><User className="w-4 h-4" /></IconBtn></Link>
          <Link to="/cart">
            <IconBtn label="Cart">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && <Badge>{cartCount}</Badge>}
            </IconBtn>
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden ml-1 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold">
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 border-t border-gold/15"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-foreground/80 hover:text-gold">
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="absolute -top-1 -right-1 bg-gradient-gold text-onyx text-[10px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center">{children}</span>;
}

function IconBtn({ children, label, onClick }: { children: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} aria-label={label} className="relative w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-foreground/80 hover:text-gold hover:border-gold/60 hover:shadow-gold transition-all">
      {children}
    </button>
  );
}
