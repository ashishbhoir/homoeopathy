import { motion } from "framer-motion";
import { carePlans } from "../data/content";

export default function CarePlans() {
  return (
    <section id="care-plans" className="section-py bg-sage-50">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">{carePlans.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-sage-950">{carePlans.title}</h2>
          <p className="mt-4 text-sage-800/80 leading-relaxed">{carePlans.description}</p>
        </div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {carePlans.steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="text-4xl sm:text-5xl font-display font-semibold text-sage-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold text-sage-950">{s.title}</h3>
              <p className="mt-2 text-sm text-sage-800/75 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {carePlans.plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-semibold text-sage-950">{p.name}</h3>
              <p className="mt-2 text-sm text-sage-800/75 leading-relaxed">{p.description}</p>
              <a href="#visit" className="mt-4 inline-block text-sm font-semibold text-terracotta-600">
                Enquire →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
