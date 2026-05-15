import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-onyx/60">
      <div className="luxury-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-gold/40 bg-[#fdf6e8] flex items-center justify-center">
              <img src={BRAND.logo} alt="BH_JEWELZ logo" className="w-[150%] h-[150%] object-cover scale-110" />
            </div>
            <h3 className="font-display text-2xl text-gradient-gold tracking-[0.25em]">BH_JEWELZ</h3>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium 1 Gram Gold & Panchaloham jewelry, handcrafted to make every moment timeless.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><Phone className="w-4 h-4 text-gold" /> {BRAND.phoneDisplay}</a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="w-4 h-4 text-gold" /> {BRAND.email}</a>
          </div>
          <div className="flex gap-3 mt-6">
            <SocialIcon href={BRAND.instagram} label="Instagram"><Instagram className="w-4 h-4" /></SocialIcon>
            <SocialIcon href={waLink()} label="WhatsApp"><MessageCircle className="w-4 h-4" /></SocialIcon>
            <SocialIcon href={`mailto:${BRAND.email}`} label="Email"><Mail className="w-4 h-4" /></SocialIcon>
          </div>
        </div>
        <FooterCol title="Shop" links={[
          ["Neck Sets", "/shop"], ["Harams", "/shop"], ["Rings", "/shop"], ["Bangles", "/shop"], ["Panchaloham", "/panchaloham"],
        ]} />
        <FooterCol title="Help" links={[
          ["FAQ", "/faq"], ["Track Order", "/track"], ["Contact", "/contact"], ["Reviews", "/reviews"],
        ]} />
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs tracking-[0.3em] uppercase text-muted-foreground">
        © {new Date().getFullYear()} BH_JEWELZ · Crafted with elegance
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-onyx transition-all">
      {children}
    </a>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([l, h]) => (
          <li key={l}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
        ))}
      </ul>
    </div>
  );
}
