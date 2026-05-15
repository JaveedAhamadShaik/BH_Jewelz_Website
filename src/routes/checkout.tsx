import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
  head: () => ({ meta: [{ title: "Checkout — BH_JEWELZ" }] }),
});

function Checkout() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Final Step" title="Secure Checkout" />
        <form className="grid md:grid-cols-2 gap-6 gold-border p-8 rounded-lg" onSubmit={e=>e.preventDefault()}>
          {["Full Name","Email","Phone","City","Address","Pincode"].map(f=>(
            <label key={f} className="block">
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-2 block">{f}</span>
              <input className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 text-foreground focus:border-gold outline-none" />
            </label>
          ))}
          <div className="md:col-span-2 luxury-divider my-2" />
          <div className="md:col-span-2">
            <h3 className="font-display text-xl text-gold mb-4">Payment Method</h3>
            <div className="grid grid-cols-3 gap-3">
              {["Razorpay","UPI","Cash on Delivery"].map(p=>(
                <label key={p} className="gold-border p-4 rounded text-center cursor-pointer hover:bg-gold/10">
                  <input type="radio" name="pay" className="sr-only" defaultChecked={p==="Razorpay"} />
                  <span className="text-sm tracking-wider">{p}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="md:col-span-2 bg-gradient-gold text-onyx py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:shadow-gold transition">Place Order</button>
        </form>
      </div>
    </div>
  );
}
