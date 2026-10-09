import { useEffect, useState } from "react";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { clinic } from "../data/content";

const links = [
  { label: "Doctor", href: "#doctor" },
  { label: "Conditions", href: "#conditions" },
  { label: "Approach", href: "#approach" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Reviews", href: "#reviews" },
  { label: "Care Plans", href: "#care-plans" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream-50/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)]" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 min-w-0 font-display text-lg sm:text-xl font-semibold text-sage-800">
          <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full bg-sage-700 text-cream-50">
            <Leaf size={18} />
          </span>
          <span className="truncate">{clinic.name}</span>
        </a>

        <div className="hidden xl:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-sage-800/80 hover:text-sage-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <a href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-sage-800">
            <Phone size={16} />
            {clinic.phone}
          </a>
          <a href="#visit" className="btn-primary py-2.5! px-5!">
            Book a Consultation
          </a>
        </div>

        <button
          className="xl:hidden -mr-2 p-2 text-sage-800"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="xl:hidden bg-cream-50 border-t border-sage-100 px-5 sm:px-6 py-4 flex flex-col max-h-[calc(100dvh-4rem)] overflow-y-auto shadow-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-sage-800 border-b border-sage-100/70">
              {l.label}
            </a>
          ))}
          <a href={`tel:${clinic.phone.replace(/[^\d+]/g, "")}`} className="mt-4 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-sage-800">
            <Phone size={16} />
            {clinic.phone}
          </a>
          <a href="#visit" onClick={() => setOpen(false)} className="btn-primary w-full mt-2">
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
