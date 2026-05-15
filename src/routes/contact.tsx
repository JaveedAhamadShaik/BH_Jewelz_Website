import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, Phone, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact — BH_JEWELZ" }, { name: "description", content: "Reach BH_JEWELZ via WhatsApp, email, or Instagram." }] }),
});

function Contact() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Say Hello" title="We're Here For You" subtitle="Reach us anytime — we love talking jewelry." />
        <div className="grid lg:grid-cols-2 gap-10">
          <form
            className="gold-border rounded-lg p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Hi BH_JEWELZ!%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0AMessage: ${fd.get("message")}`;
              window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${msg}`, "_blank");
            }}
          >
            <Field label="Name"><input name="name" required className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 text-foreground focus:border-gold outline-none" placeholder="Your name" /></Field>
            <Field label="Email"><input name="email" type="email" required className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 text-foreground focus:border-gold outline-none" placeholder="you@email.com" /></Field>
            <Field label="Message"><textarea name="message" required rows={5} className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 text-foreground focus:border-gold outline-none" placeholder="How can we help?" /></Field>
            <button className="w-full bg-gradient-gold text-onyx py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:shadow-gold transition">Send via WhatsApp</button>
          </form>

          <div className="space-y-4">
            <ContactCard icon={MessageCircle} title="WhatsApp" desc={`${BRAND.phoneDisplay} — instant replies`} href={waLink()} />
            <ContactCard icon={Mail} title="Email" desc={BRAND.email} href={`mailto:${BRAND.email}`} />
            <ContactCard icon={Phone} title="Call Us" desc={`${BRAND.phoneDisplay} · 10am – 8pm`} href={`tel:${BRAND.phone}`} />
            <ContactCard icon={Instagram} title="Instagram" desc={`${BRAND.instagramHandle} — daily inspiration`} href={BRAND.instagram} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Field({label, children}: {label:string; children:React.ReactNode}) {
  return <label className="block"><span className="text-xs tracking-[0.3em] uppercase text-gold mb-2 block">{label}</span>{children}</label>;
}
function ContactCard({icon:Icon, title, desc, href}: any) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-5 gold-border p-6 rounded-lg hover:shadow-gold transition">
      <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-onyx group-hover:animate-glow"><Icon className="w-6 h-6" /></div>
      <div><p className="font-display text-xl text-foreground group-hover:text-gold">{title}</p><p className="text-sm text-muted-foreground">{desc}</p></div>
    </a>
  );
}
