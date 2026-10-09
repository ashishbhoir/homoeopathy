import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { doctor } from "../data/content";

export default function MeetDoctor() {
  return (
    <section id="doctor" className="section-py bg-white">
      <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1 w-full max-w-md mx-auto lg:mx-0"
        >
          <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] bg-sage-100 shadow-soft grid place-items-center overflow-hidden">
            <span className="text-sage-600/60 text-sm px-10 text-center">[Doctor's Photo]</span>
          </div>
          <div className="absolute -top-5 right-3 sm:-top-6 sm:-right-4 card px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-terracotta-500/10 text-terracotta-600">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-sage-900">{doctor.credentials}</p>
              <p className="text-xs text-sage-700/70">Registered Practitioner</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow">Meet Your Doctor</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-sage-950">{doctor.name}</h2>
          <p className="mt-2 text-sage-700/80 font-medium">{doctor.credentials}</p>

          <div className="mt-6 space-y-4">
            {doctor.bio.map((p, i) => (
              <p key={i} className="text-sage-800/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {doctor.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-xl bg-sage-50 px-4 py-3 text-sm font-medium text-sage-900">
                <span className="h-2 w-2 rounded-full bg-terracotta-500 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
