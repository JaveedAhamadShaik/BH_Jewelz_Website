import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  component: Cart,
  head: () => ({ meta: [{ title: "Cart — BH_JEWELZ" }] }),
});

function Cart() {
  const { cartItems, cartTotal, setQty, removeFromCart } = useStore();

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Your Bag" title="Shopping Bag" />
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Your bag is empty.</p>
            <Link to="/shop" className="inline-block mt-6 bg-gradient-gold text-onyx px-8 py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold">Shop Now</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            <div className="space-y-4">
              {cartItems.map(i => (
                <div key={i.id} className="gold-border p-4 rounded-lg flex gap-4 items-center">
                  <img src={i.image} alt={i.name} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1">
                    <p className="text-xs tracking-[0.2em] uppercase text-gold">{i.collection}</p>
                    <h3 className="font-display text-lg">{i.name}</h3>
                    <p className="text-gradient-gold font-semibold">₹{i.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center border border-gold/30 rounded">
                    <button onClick={()=>setQty(i.id, i.qty-1)} className="w-9 h-9 text-gold">−</button>
                    <span className="w-8 text-center">{i.qty}</span>
                    <button onClick={()=>setQty(i.id, i.qty+1)} className="w-9 h-9 text-gold">+</button>
                  </div>
                  <button onClick={()=>removeFromCart(i.id)} className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
            <aside className="gold-border rounded-lg p-6 h-fit space-y-4">
              <h3 className="font-display text-2xl text-gradient-gold">Order Summary</h3>
              <div className="luxury-divider" />
              <Row label="Subtotal" value={`₹${cartTotal.toLocaleString()}`} />
              <Row label="Shipping" value="Free" />
              <div className="luxury-divider" />
              <Row label="Total" value={`₹${cartTotal.toLocaleString()}`} bold />
              <Link to="/checkout" className="block w-full text-center bg-gradient-gold text-onyx py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:shadow-gold transition">Checkout</Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
function Row({label, value, bold}:{label:string;value:string;bold?:boolean}) {
  return <div className={`flex justify-between ${bold?"text-lg":"text-sm text-muted-foreground"}`}><span>{label}</span><span className={bold?"text-gradient-gold font-semibold":"text-foreground"}>{value}</span></div>;
}
