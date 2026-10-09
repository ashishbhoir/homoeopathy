import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { clinic, hours } from "../data/content";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-cream-100/80">
      <div className="container-px py-12 md:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-sage-700">
              <Leaf size={17} />
            </span>
            {clinic.name}
          </a>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">{clinic.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href={clinic.instagram} target="_blank" rel="noreferrer" className="grid place-items-center h-9 w-9 rounded-full bg-cream-50/10 hover:bg-cream-50/20 transition-colors">
              <InstagramIcon />
            </a>
            <a href={clinic.facebook} target="_blank" rel="noreferrer" className="grid place-items-center h-9 w-9 rounded-full bg-cream-50/10 hover:bg-cream-50/20 transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream-50 mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#doctor" className="hover:text-cream-50">Meet Your Doctor</a></li>
            <li><a href="#conditions" className="hover:text-cream-50">Conditions We Treat</a></li>
            <li><a href="#outcomes" className="hover:text-cream-50">Clinical Outcomes</a></li>
            <li><a href="#reviews" className="hover:text-cream-50">Patient Reviews</a></li>
            <li><a href="#care-plans" className="hover:text-cream-50">Care Plans</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream-50 mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0" /> {clinic.address}</li>
            <li className="flex items-center gap-2.5"><Phone size={16} className="shrink-0" /> {clinic.phone}</li>
            <li className="flex items-center gap-2.5 min-w-0"><Mail size={16} className="shrink-0" /> <span className="break-all">{clinic.email}</span></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-cream-50 mb-4">Opening Hours</p>
          <ul className="space-y-1.5 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-cream-100/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10 py-6">
        <p className="container-px text-xs text-cream-100/50">
          © {new Date().getFullYear()} {clinic.name}. All rights reserved. This website does not
          provide medical advice; consult a registered practitioner for diagnosis and treatment.
        </p>
      </div>
    </footer>
  );
}
