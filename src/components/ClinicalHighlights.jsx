import { motion } from "framer-motion";
import { clinicalHighlights } from "../data/content";

export default function ClinicalHighlights() {
  return (
    <section className="section-py bg-white">
      <div className="container-px">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">{clinicalHighlights.eyebrow}</span>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {clinicalHighlights.items.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center rounded-2xl border border-sage-100 py-6 sm:py-8 px-3 bg-sage-50/50"
            >
              <p className="text-2xl md:text-3xl font-display font-semibold text-sage-800">{h.value}</p>
              <p className="mt-1.5 text-xs text-sage-700/70 leading-snug">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
