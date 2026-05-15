import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  component: Wishlist,
  head: () => ({ meta: [{ title: "Wishlist — BH_JEWELZ" }] }),
});

function Wishlist() {
  const { wishlist } = useStore();
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Saved For Later" title="Your Wishlist" />
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Your wishlist is empty.</p>
            <Link to="/shop" className="inline-block mt-6 bg-gradient-gold text-onyx px-8 py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold">Discover Pieces</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}
