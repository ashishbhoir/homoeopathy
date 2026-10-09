import { motion } from "framer-motion";
import { NotebookText, Fingerprint, Target, ShieldCheck } from "lucide-react";
import { approach } from "../data/content";

const icons = [NotebookText, Fingerprint, Target, ShieldCheck];

export default function Approach() {
  return (
    <section id="approach" className="section-py bg-white">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="eyebrow">{approach.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-sage-950 leading-tight">
              {approach.title}
            </h2>
            <p className="mt-5 text-sage-800/80 leading-relaxed">{approach.description}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {approach.pillars.map((p, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl border border-sage-100 p-6 bg-sage-50/60"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-terracotta-500/10 text-terracotta-600">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold text-sage-950">{p.title}</h3>
                  <p className="mt-2 text-sm text-sage-800/75 leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
