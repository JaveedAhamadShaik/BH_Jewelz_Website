import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
  head: () => ({ meta: [{ title: "Reviews — BH_JEWELZ" }] }),
});

const R = [
  { n: "Priya S.", t: "Stunning craftsmanship — looks like real gold!", r: 5 },
  { n: "Anitha R.", t: "Fast delivery and luxury packaging.", r: 5 },
  { n: "Meera K.", t: "Wearing my Panchaloham pendant daily — beautiful.", r: 5 },
  { n: "Divya P.", t: "Bought a haram for my wedding. Compliments everywhere!", r: 5 },
];

function Reviews() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Real Customers" title="Reviews & Ratings" />
        <div className="grid md:grid-cols-2 gap-6">
          {R.map((r, i) => (
            <div key={i} className="gold-border rounded-lg p-6">
              <p className="text-gold tracking-widest">{"★".repeat(r.r)}</p>
              <p className="mt-3 italic text-foreground/85">"{r.t}"</p>
              <p className="mt-4 text-sm text-muted-foreground">— {r.n}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
