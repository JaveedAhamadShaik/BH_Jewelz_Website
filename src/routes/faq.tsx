import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({ meta: [{ title: "FAQ — BH_JEWELZ" }] }),
});

const QA = [
  ["What is 1 Gram Gold jewelry?", "1 Gram Gold jewelry is high-quality gold-plated jewelry that mimics solid gold at a fraction of the cost. It's perfect for daily and occasion wear."],
  ["What is Panchaloham?", "Panchaloham is jewelry made from five sacred metals — gold, silver, copper, zinc, and iron — traditionally believed to bring spiritual balance."],
  ["Do you offer free shipping?", "Yes, we offer free shipping across India on all orders."],
  ["What is your return policy?", "We accept returns within 7 days of delivery in original condition."],
  ["Can I order via WhatsApp?", "Absolutely! Click the floating WhatsApp icon or use the 'Order via WhatsApp' button on any product."],
];

function FAQ() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Questions" title="Frequently Asked" />
        <Accordion type="single" collapsible className="space-y-3">
          {QA.map(([q,a],i)=>(
            <AccordionItem key={i} value={`i${i}`} className="gold-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-lg text-foreground hover:text-gold">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
