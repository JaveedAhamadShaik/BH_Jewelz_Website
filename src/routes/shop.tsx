import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";

const searchSchema = z.object({
  collection: fallback(z.enum(["All", "1 Gram Gold", "Panchaloham"]), "All").default("All"),
  category: fallback(z.string(), "").default(""),
  sort: fallback(z.enum(["featured", "low", "high"]), "featured").default("featured"),
});

export const Route = createFileRoute("/shop")({
  validateSearch: zodValidator(searchSchema),
  component: Shop,
  head: () => ({ meta: [
    { title: "Shop — BH_JEWELZ" },
    { name: "description", content: "Browse our full collection of 1 Gram Gold and Panchaloham jewelry." },
  ]}),
});

function Shop() {
  const { collection, category, sort } = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const update = (patch: Partial<{ collection: typeof collection; category: string; sort: typeof sort }>) =>
    navigate({ search: (prev: typeof patch) => ({ ...prev, ...patch }) });

  let items = PRODUCTS.slice();
  if (collection !== "All") items = items.filter(p => p.collection === collection);
  if (category) items = items.filter(p => p.category === category);
  if (sort === "low") items = items.sort((a,b) => a.price - b.price);
  if (sort === "high") items = items.sort((a,b) => b.price - a.price);

  const visibleCats: string[] = collection === "All"
    ? Array.from(new Set([...CATEGORIES["1 Gram Gold"], ...CATEGORIES["Panchaloham"]]))
    : CATEGORIES[collection as "1 Gram Gold" | "Panchaloham"];

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Boutique" title="Shop The Collection" subtitle="Filter by collection, price, and what's new — find your forever piece." />

        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="space-y-8">
            <FilterBlock title="Collection">
              {(["All", "1 Gram Gold", "Panchaloham"] as const).map(c => (
                <button key={c} onClick={() => update({ collection: c, category: "" })}
                  className={`block w-full text-left py-1.5 text-sm tracking-wider transition ${collection===c ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}>
                  {c}
                </button>
              ))}
            </FilterBlock>
            <FilterBlock title="Categories">
              <div className="space-y-1 max-h-72 overflow-auto pr-2">
                <button onClick={() => update({ category: "" })}
                  className={`block w-full text-left py-1 text-sm transition ${category==="" ? "text-gold" : "text-muted-foreground hover:text-gold"}`}>
                  All Categories
                </button>
                {visibleCats.map((c: string) => (
                  <button key={c} onClick={() => update({ category: c })}
                    className={`block w-full text-left py-1 text-sm transition ${category===c ? "text-gold" : "text-muted-foreground hover:text-gold"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </FilterBlock>
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/15">
              <p className="text-sm text-muted-foreground">{items.length} pieces{category && ` in ${category}`}</p>
              <select value={sort} onChange={e=>update({ sort: e.target.value as typeof sort })}
                className="bg-card border border-gold/20 text-sm px-4 py-2 rounded text-foreground">
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
            {items.length === 0 ? (
              <div className="py-20 text-center gold-border rounded-lg">
                <p className="font-display text-2xl text-gradient-gold">No products available in this category</p>
                <p className="text-muted-foreground mt-2 text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-3 pb-2 border-b border-gold/15">{title}</h4>
      <div>{children}</div>
    </div>
  );
}
