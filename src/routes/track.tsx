import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/track")({
  component: Track,
  head: () => ({ meta: [{ title: "Track Order — BH_JEWELZ" }] }),
});

function Track() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Where's My Order" title="Track Your Order" />
        <form className="gold-border rounded-lg p-8 space-y-4" onSubmit={e=>e.preventDefault()}>
          <input placeholder="Order ID" className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 focus:border-gold outline-none" />
          <input placeholder="Email or Phone" className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 focus:border-gold outline-none" />
          <button className="w-full bg-gradient-gold text-onyx py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold">Track Order</button>
        </form>
      </div>
    </div>
  );
}
