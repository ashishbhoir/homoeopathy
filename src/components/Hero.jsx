import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, Users } from "lucide-react";
import { clinic } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-32 md:pt-44 md:pb-28 overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-100 via-cream-50 to-cream-50" />
      <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-sage-200/60 blur-3xl" />
      <div className="absolute top-40 -left-32 -z-10 h-72 w-72 rounded-full bg-terracotta-500/10 blur-3xl" />

      <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">Classical Homoeopathic Care</span>
          <h1 className="mt-4 text-[2.25rem] sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-sage-950">
            {clinic.tagline}
          </h1>
          <p className="mt-5 md:mt-6 text-base sm:text-lg text-sage-800/80 max-w-xl leading-relaxed">
            {clinic.subTagline}
          </p>

          <div className="mt-8 md:mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a href="#visit" className="btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </a>
            <a href="#doctor" className="btn-secondary">
              Meet the Doctor
            </a>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            <Stat icon={<Users size={18} />} value="[X],000+" label="Patients Treated" />
            <Stat icon={<Leaf size={18} />} value="[X]+" label="Years of Care" />
            <Stat icon={<ShieldCheck size={18} />} value="100%" label="Natural Remedies" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-sage-200 to-sage-300 shadow-soft overflow-hidden grid place-items-center">
            {/* Replace with a real clinic / doctor photo */}
            <span className="text-sage-700/60 text-sm px-10 text-center">
              [Doctor / Clinic Photo]
            </span>
          </div>
          <div className="absolute -bottom-5 left-3 sm:-bottom-6 sm:-left-6 card px-5 py-4 sm:px-6 sm:py-5 max-w-[220px]">
            <p className="text-sm font-semibold text-sage-900">Gentle care for every age</p>
            <p className="text-xs text-sage-700/70 mt-1">Infants to elderly — safe, individualized treatment.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-sage-700">
        <span className="hidden sm:inline-flex">{icon}</span>
        <span className="text-lg sm:text-xl font-display font-semibold text-sage-950">{value}</span>
      </div>
      <p className="text-xs text-sage-700/70 mt-1">{label}</p>
    </div>
  );
}
