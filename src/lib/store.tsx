import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { PRODUCTS, type Product } from "./products";

type CartItem = { id: string; qty: number };

type Ctx = {
  cart: CartItem[];
  cartCount: number;
  cartItems: (Product & { qty: number })[];
  cartTotal: number;
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isWished: (id: string) => boolean;
  // search modal
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
};

const StoreCtx = createContext<Ctx | null>(null);

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => load("bh_cart", []));
  const [wishlist, setWishlist] = useState<string[]>(() => load("bh_wishlist", []));
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => { localStorage.setItem("bh_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("bh_wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const value = useMemo<Ctx>(() => {
    const cartItems = cart
      .map(c => { const p = PRODUCTS.find(p => p.id === c.id); return p ? { ...p, qty: c.qty } : null; })
      .filter(Boolean) as (Product & { qty: number })[];
    return {
      cart, cartItems,
      cartCount: cart.reduce((s, c) => s + c.qty, 0),
      cartTotal: cartItems.reduce((s, i) => s + i.price * i.qty, 0),
      addToCart: (id, qty = 1) => setCart(c => {
        const ex = c.find(x => x.id === id);
        return ex ? c.map(x => x.id === id ? { ...x, qty: x.qty + qty } : x) : [...c, { id, qty }];
      }),
      removeFromCart: (id) => setCart(c => c.filter(x => x.id !== id)),
      setQty: (id, qty) => setCart(c => c.map(x => x.id === id ? { ...x, qty: Math.max(1, qty) } : x)),
      clearCart: () => setCart([]),
      wishlist,
      toggleWishlist: (id) => setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]),
      isWished: (id) => wishlist.includes(id),
      searchOpen, setSearchOpen,
    };
  }, [cart, wishlist, searchOpen]);

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStore must be inside StoreProvider");
  return ctx;
}
