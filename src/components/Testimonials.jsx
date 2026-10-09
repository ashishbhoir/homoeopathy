import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section-py bg-white">
      <div className="container-px">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Patient's Testimony</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-sage-950">
            Real stories, real recovery
          </h2>
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-sage-50 p-6 sm:p-8 relative"
            >
              <Quote className="text-sage-300" size={32} />
              <p className="mt-4 text-sage-800/85 leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-sage-200/70">
                <p className="font-semibold text-sage-950">{t.name}</p>
                <p className="text-xs text-sage-700/70 mt-0.5">{t.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
