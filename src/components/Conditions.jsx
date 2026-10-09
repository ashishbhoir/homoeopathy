import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Flower2, Dna, Activity } from "lucide-react";
import { conditions } from "../data/content";

const icons = { BrainCircuit, Sparkles, Flower2, Dna, Activity };

export default function Conditions() {
  return (
    <section id="conditions" className="section-py bg-sage-50">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Conditions We Help With</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-sage-950">
            Health Concerns We Treat
          </h2>
          <p className="mt-4 text-sage-800/80 leading-relaxed">
            From emotional wellbeing to chronic, hereditary and lifestyle-related conditions —
            our treatment plans are built around you.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {conditions.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 sm:p-7 hover:-translate-y-1.5 transition-transform duration-300"
              >
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-sage-700 text-cream-50">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-sage-950">{c.title}</h3>
                <p className="mt-2.5 text-sm text-sage-800/75 leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
