import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, MessageCircle, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  notFoundComponent: () => <div className="py-32 text-center text-gold">Product not found.</div>,
  errorComponent: ({ error }) => <div className="py-32 text-center text-destructive">{error.message}</div>,
  loader: ({ params }) => {
    const product = PRODUCTS.find(p => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const { addToCart, toggleWishlist, isWished } = useStore();
  const wished = isWished(product.id);
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <nav className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gold">Home</Link> / <Link to="/shop" className="hover:text-gold">Shop</Link> / <span className="text-gold">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-square overflow-hidden rounded-lg gold-border shadow-deep group">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <div key={i} className="aspect-square rounded overflow-hidden gold-border cursor-pointer hover:opacity-80">
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold">{product.collection} · {product.category}</p>
            <h1 className="font-display text-4xl md:text-5xl mt-3 text-gradient-gold">{product.name}</h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl text-foreground font-display">₹{product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="text-lg text-muted-foreground line-through">₹{product.oldPrice.toLocaleString()}</span>}
            </div>
            <p className="text-sm text-gold mt-1">★★★★★ <span className="text-muted-foreground">(124 reviews)</span></p>

            <div className="mt-8 luxury-divider" />

            <p className="mt-8 text-foreground/80 leading-relaxed">
              An exquisite piece from our {product.collection} line — crafted with intricate detailing, designed to be worn from sunlit mornings to candlelit evenings.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Detail label="Material" value={product.collection === "Panchaloham" ? "Five Sacred Metals" : "1 Gram Gold Plated"} />
              <Detail label="Finish" value="High-polish gold" />
              <Detail label="Care" value="Wipe with soft cloth" />
              <Detail label="Origin" value="Handcrafted in India" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-gold/30 rounded">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="w-10 h-10 text-gold">−</button>
                <span className="w-12 text-center">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="w-10 h-10 text-gold">+</button>
              </div>
              <button
                onClick={() => { addToCart(product.id, qty); toast.success("Added to bag"); }}
                className="flex-1 bg-gradient-gold text-onyx px-6 py-3 rounded text-sm tracking-[0.25em] uppercase font-semibold inline-flex items-center justify-center gap-2 hover:shadow-gold">
                <ShoppingBag className="w-4 h-4" /> Add to Bag
              </button>
            </div>
            <div className="mt-3 flex gap-3">
              <Link to="/checkout" onClick={() => addToCart(product.id, qty)} className="flex-1 border border-gold text-gold px-6 py-3 rounded text-sm tracking-[0.25em] uppercase font-semibold text-center hover:bg-gold hover:text-onyx transition">
                Buy Now
              </Link>
              <button onClick={() => toggleWishlist(product.id)} aria-label="wishlist" className={`w-12 h-12 border rounded flex items-center justify-center transition ${wished ? "bg-gold text-onyx border-gold" : "border-gold/30 text-gold hover:bg-gold hover:text-onyx"}`}><Heart className={`w-5 h-5 ${wished ? "fill-current" : ""}`} /></button>
              <a href={`https://wa.me/919121555815?text=${encodeURIComponent(`Hi BH_JEWELZ, I'm interested in ${product.name} (₹${product.price.toLocaleString()})`)}`} target="_blank" rel="noreferrer"
                className="px-4 h-12 bg-[#25D366] rounded text-white text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: ShieldCheck, label: "Secure Pay" },
                { icon: RotateCcw, label: "Easy Returns" },
              ].map(({icon:Icon,label}) => (
                <div key={label} className="gold-border p-4 rounded">
                  <Icon className="w-5 h-5 text-gold mx-auto" />
                  <p className="text-xs tracking-[0.2em] uppercase mt-2 text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <SectionHeading eyebrow="You May Also Love" title="Related Pieces" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-gold/40 pl-3">
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">{label}</p>
      <p className="text-foreground mt-1">{value}</p>
    </div>
  );
}
