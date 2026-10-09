import { motion } from "framer-motion";
import { clinicalOutcomes } from "../data/content";

export default function ClinicalOutcomes() {
  return (
    <section id="outcomes" className="section-py bg-sage-800 text-cream-50 relative overflow-hidden">
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sage-700/50 blur-3xl" />
      <div className="container-px relative">
        <div className="max-w-2xl">
          <span className="eyebrow text-terracotta-500!">{clinicalOutcomes.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">{clinicalOutcomes.title}</h2>
          <p className="mt-4 text-cream-100/80 leading-relaxed">{clinicalOutcomes.description}</p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-8">
          {clinicalOutcomes.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-3xl md:text-4xl font-display font-semibold">{s.value}</p>
              <p className="mt-1.5 text-sm text-cream-100/70">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-4 sm:gap-6">
          {clinicalOutcomes.cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-cream-50/5 border border-cream-50/10 p-6 sm:p-7 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2.5 text-sm text-cream-100/75 leading-relaxed">{c.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
