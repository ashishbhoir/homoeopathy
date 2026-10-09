import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { clinic, hours } from "../data/content";

export default function VisitUs() {
  return (
    <section id="visit" className="section-py bg-sage-800 text-cream-50">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow text-terracotta-500!">Visit Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            We'd love to hear your story, in person
          </h2>
        </div>

        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-cream-50/10">
                <MapPin size={19} />
              </span>
              <div className="min-w-0">
                <p className="font-semibold">Address</p>
                <p className="text-cream-100/75 text-sm mt-1 leading-relaxed">{clinic.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-cream-50/10">
                <Phone size={19} />
              </span>
              <div className="min-w-0">
                <p className="font-semibold">Phone / WhatsApp</p>
                <p className="text-cream-100/75 text-sm mt-1">{clinic.phone}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-cream-50/10">
                <Mail size={19} />
              </span>
              <div className="min-w-0">
                <p className="font-semibold">Email</p>
                <p className="text-cream-100/75 text-sm mt-1 break-words">{clinic.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-cream-50/10">
                <Clock size={19} />
              </span>
              <div className="w-full min-w-0">
                <p className="font-semibold mb-2">Opening Hours</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-cream-100/80 max-w-sm">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4 border-b border-cream-50/10 py-1.5 col-span-2 sm:col-span-1">
                      <span>{h.day}</span>
                      <span className="text-cream-50 font-medium text-right">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`} className="btn-primary bg-terracotta-500! hover:bg-terracotta-600! mt-4 w-full sm:w-auto">
              Call to Book an Appointment
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-cream-50/10 min-h-[300px] sm:min-h-[360px]"
          >
            <iframe
              title="Clinic Location"
              src={clinic.mapEmbedUrl}
              width="100%"
              height="100%"
              className="min-h-[300px] sm:min-h-[360px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
