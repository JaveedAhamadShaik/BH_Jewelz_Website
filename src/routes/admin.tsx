import { createFileRoute } from "@tanstack/react-router";
import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/admin")({
  component: Admin,
  head: () => ({ meta: [{ title: "Admin — BH_JEWELZ" }] }),
});

function Admin() {
  const stats = [
    { icon: TrendingUp, label: "Revenue", v: "₹4,82,000" },
    { icon: ShoppingBag, label: "Orders", v: "247" },
    { icon: Package, label: "Products", v: String(PRODUCTS.length) },
    { icon: Users, label: "Customers", v: "1,284" },
  ];
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Control Center" title="Admin Dashboard" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map(s=>(
            <div key={s.label} className="gold-border p-6 rounded-lg">
              <s.icon className="w-6 h-6 text-gold mb-3" />
              <p className="text-3xl font-display text-gradient-gold">{s.v}</p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="gold-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-onyx/60">
              <tr className="text-left text-xs tracking-[0.3em] uppercase text-gold">
                <th className="p-4">Product</th><th className="p-4">Category</th><th className="p-4">Price</th><th className="p-4">Stock</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map(p=>(
                <tr key={p.id} className="border-t border-gold/10 hover:bg-onyx/40">
                  <td className="p-4 flex items-center gap-3"><img src={p.image} className="w-10 h-10 rounded object-cover" alt="" /><span>{p.name}</span></td>
                  <td className="p-4 text-muted-foreground">{p.category}</td>
                  <td className="p-4 text-gold">₹{p.price.toLocaleString()}</td>
                  <td className="p-4 text-muted-foreground">In Stock</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
