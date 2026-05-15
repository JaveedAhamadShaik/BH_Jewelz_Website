import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SparkleField } from "@/components/SparkleField";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "Sign In — BH_JEWELZ" }] }),
});

function Login() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      <SparkleField density={50} />
      <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
        className="relative z-10 w-full max-w-md gold-border rounded-lg p-10 shadow-deep bg-card/80 backdrop-blur">
        <h1 className="font-display text-4xl text-gradient-gold text-center">Welcome Back</h1>
        <p className="text-center text-sm text-muted-foreground mt-2">Sign in to your BH_JEWELZ account</p>
        <form className="mt-8 space-y-4" onSubmit={e=>e.preventDefault()}>
          <input placeholder="Email" className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 focus:border-gold outline-none" />
          <input type="password" placeholder="Password" className="w-full bg-onyx/60 border border-gold/20 rounded px-4 py-3 focus:border-gold outline-none" />
          <button className="w-full bg-gradient-gold text-onyx py-4 rounded text-sm tracking-[0.3em] uppercase font-semibold hover:shadow-gold transition">Sign In</button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">
          New here? <Link to="/login" className="text-gold hover:underline">Create account</Link>
        </p>
      </motion.div>
    </div>
  );
}
