import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { toast } from "sonner";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const wished = isWished(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-card gold-border shadow-deep">
          <motion.img
            src={product.image} alt={product.name}
            loading="lazy" width={800} height={1000}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && <span className="px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase bg-gradient-gold text-onyx font-semibold rounded">New</span>}
            {product.isBestSeller && <span className="px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase bg-rose-gold text-onyx font-semibold rounded">Bestseller</span>}
          </div>

          <button
            aria-label="wishlist"
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); toast(wished ? "Removed from wishlist" : "Added to wishlist"); }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-onyx/70 backdrop-blur border flex items-center justify-center transition-all ${wished ? "border-gold bg-gold text-onyx" : "border-gold/30 text-gold hover:bg-gold hover:text-onyx"}`}
          >
            <Heart className={`w-4 h-4 ${wished ? "fill-current" : ""}`} />
          </button>

          <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button
              onClick={(e) => { e.preventDefault(); addToCart(product.id); toast.success("Added to bag"); }}
              className="w-full bg-gradient-gold text-onyx text-xs tracking-[0.25em] uppercase font-semibold py-3 rounded flex items-center justify-center gap-2 hover:shadow-gold"
            >
              <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
            </button>
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">{product.collection}</p>
          <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-gradient-gold font-semibold">₹{product.price.toLocaleString()}</span>
            {product.oldPrice && <span className="text-xs text-muted-foreground line-through">₹{product.oldPrice.toLocaleString()}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
