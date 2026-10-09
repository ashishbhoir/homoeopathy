// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. Text wrapped in [brackets] is a
// placeholder and should be replaced with real clinic details.
// ─────────────────────────────────────────────────────────────────────────

export const clinic = {
  name: "Sunflora Homoeopathy",
  tagline: "Gentle, Natural Healing for Body, Mind & Spirit",
  subTagline:
    "Personalized homoeopathic care rooted in listening, understanding, and treating the root cause — not just the symptom.",
  phone: "[+91 98765 43210]",
  whatsapp: "[+91 98765 43210]",
  email: "[care@sunflorahomoeopathy.com]",
  address: "[Shop No. 4, Green Avenue, Near City Garden, Mumbai, Maharashtra 400001]",
  mapEmbedUrl:
    "https://www.google.com/maps?q=[Your+Clinic+Address]&output=embed",
  mapLinkUrl: "https://maps.google.com/?q=[Your+Clinic+Address]",
  googlePlaceReviewUrl: "https://g.page/r/[your-google-place-id]/review",
  instagram: "https://instagram.com/[sunflorahomoeopathy]",
  facebook: "https://facebook.com/[sunflorahomoeopathy]",
};

export const hours = [
  { day: "Monday", time: "6:00 PM – 10:00 PM" },
  { day: "Tuesday", time: "6:00 PM – 10:00 PM" },
  { day: "Wednesday", time: "6:00 PM – 10:00 PM" },
  { day: "Thursday", time: "6:00 PM – 10:00 PM" },
  { day: "Friday", time: "6:00 PM – 10:00 PM" },
  { day: "Saturday", time: "6:00 PM – 10:00 PM" },
  { day: "Sunday", time: "Only on Appointment" },
];

export const doctor = {
  name: "Dr. [Doctor's Full Name]",
  credentials: "BHMS, MD (Homoeopathy)",
  photo: "",
  bio: [
    "With over [X] years of clinical experience, Dr. [Name] blends classical homoeopathic principles with a modern, patient-first approach to healing.",
    "Every case begins with a conversation — understanding not just the illness, but the person behind it. This individualized method has helped hundreds of patients find lasting relief from chronic and lifestyle-related conditions.",
    "Dr. [Name] is registered with the [State Board of Homoeopathy / CCH Registration No. XXXXX] and is committed to safe, ethical, and evidence-informed homoeopathic care.",
  ],
  highlights: [
    "[X]+ Years of Clinical Practice",
    "[X],000+ Patients Treated",
    "Registered Homoeopathic Practitioner",
    "Specialist in Chronic & Lifestyle Disorders",
  ],
};

export const conditions = [
  {
    title: "Emotional & Psychological Wellbeing",
    icon: "BrainCircuit",
    description:
      "Anxiety, stress, depression, mood swings, sleep disorders, and emotional imbalances addressed with gentle, constitutional remedies.",
  },
  {
    title: "Skin Health",
    icon: "Sparkles",
    description:
      "Acne, eczema, psoriasis, urticaria, hair fall, and chronic skin conditions treated at the root — not just on the surface.",
  },
  {
    title: "Women's Health",
    icon: "Flower2",
    description:
      "PCOS/PCOD, menstrual irregularities, fertility support, menopause, and hormonal balance for every stage of a woman's life.",
  },
  {
    title: "Genetic & Hereditary Health Concerns",
    icon: "Dna",
    description:
      "Thyroid disorders, allergies, asthma, and hereditary predispositions managed with long-term, individualized care plans.",
  },
  {
    title: "Lifestyle Related Health Concerns",
    icon: "Activity",
    description:
      "Diabetes, hypertension, obesity, migraines, and digestive disorders supported through holistic, sustainable treatment.",
  },
];

export const approach = {
  eyebrow: "Our Approach",
  title: "Healing that looks at the whole person, not just the diagnosis",
  description:
    "Homoeopathy works on the principle that the body has an innate capacity to heal itself. Our approach combines detailed case-taking, constitutional analysis, and carefully selected remedies to support that natural process — safely and gently.",
  pillars: [
    {
      title: "In-Depth Case Study",
      description:
        "Every consultation begins with understanding your complete health history, lifestyle, and emotional state — not just your symptoms.",
    },
    {
      title: "Individualized Treatment",
      description:
        "No two patients are alike. Remedies are selected specifically for you, based on your unique constitution.",
    },
    {
      title: "Root-Cause Focused",
      description:
        "We aim to address the underlying imbalance driving your condition, not merely suppress symptoms.",
    },
    {
      title: "Safe for All Ages",
      description:
        "Gentle enough for infants and the elderly, with no harmful side effects and no drug dependency.",
    },
  ],
};

export const clinicalOutcomes = {
  eyebrow: "Our Clinical Outcomes & Case Experiences",
  title: "Results our patients can feel — and see",
  description:
    "Over the years, we've had the privilege of supporting patients through some genuinely life-changing recoveries. Here's a glimpse of the impact of consistent, individualized homoeopathic care.",
  stats: [
    { value: "[X]+", label: "Years of Practice" },
    { value: "[X],000+", label: "Patients Treated" },
    { value: "[X]+", label: "Conditions Managed" },
    { value: "[X]%", label: "Patient Satisfaction" },
  ],
  cases: [
    {
      title: "Chronic Skin Condition — Long-Term Remission",
      summary:
        "A patient suffering from recurring eczema for [X] years found significant, lasting relief within [X] months of individualized treatment.",
    },
    {
      title: "PCOD & Hormonal Balance",
      summary:
        "Regularized menstrual cycles and improved hormonal balance achieved through a sustained, personalized care plan.",
    },
    {
      title: "Childhood Allergies & Asthma",
      summary:
        "Reduced frequency and severity of allergic episodes in a pediatric patient over a [X]-month treatment course.",
    },
  ],
};

// Static fallback testimonials — replace with live Google Reviews via the
// embed instructions in GoogleReviews.jsx once you have a Google Place ID.
export const googleReviews = [
  {
    name: "[Patient Name]",
    rating: 5,
    text:
      "[Excerpt of a real Google review — e.g. “Dr. ___ took the time to understand my entire history before suggesting anything. Three months in and my skin has never looked better.”]",
  },
  {
    name: "[Patient Name]",
    rating: 5,
    text:
      "[Excerpt of a real Google review praising the clinic's care, attentiveness, or results.]",
  },
  {
    name: "[Patient Name]",
    rating: 5,
    text:
      "[Excerpt of a real Google review — keep these short and authentic, pulled directly from your Google Business Profile.]",
  },
];

export const testimonials = [
  {
    name: "[Patient Name]",
    condition: "[Condition Treated]",
    quote:
      "[A short, honest patient testimony about their experience and results at Sunflora Homoeopathy.]",
  },
  {
    name: "[Patient Name]",
    condition: "[Condition Treated]",
    quote:
      "[A short, honest patient testimony about their experience and results at Sunflora Homoeopathy.]",
  },
  {
    name: "[Patient Name]",
    condition: "[Condition Treated]",
    quote:
      "[A short, honest patient testimony about their experience and results at Sunflora Homoeopathy.]",
  },
];

export const carePlans = {
  eyebrow: "Consultation & Care Plans",
  title: "Personalized attention begins with a conversation",
  description:
    "We believe good treatment starts with being truly heard. Our consultation process is designed to give you the time, attention, and clarity you deserve.",
  steps: [
    {
      title: "Initial Consultation",
      description:
        "A detailed conversation covering your medical history, lifestyle, and current concerns — in person or online.",
    },
    {
      title: "Case Analysis",
      description:
        "Your case is carefully studied to identify the most suitable constitutional remedy for you.",
    },
    {
      title: "Personalized Remedy Plan",
      description:
        "A tailored treatment and lifestyle plan is prescribed, explained clearly so you know what to expect.",
    },
    {
      title: "Follow-Up & Monitoring",
      description:
        "Regular follow-ups to track progress and fine-tune your treatment for the best possible outcome.",
    },
  ],
  plans: [
    {
      name: "First Consultation",
      description: "In-depth case taking for new patients, in-clinic or online.",
    },
    {
      name: "Follow-Up Consultation",
      description: "For existing patients continuing an ongoing treatment plan.",
    },
    {
      name: "Chronic Care Plan",
      description: "Extended, structured care for long-term and complex conditions.",
    },
    {
      name: "Online Consultation",
      description: "Video/audio consultations for patients outside the city.",
    },
  ],
};

export const clinicalHighlights = {
  eyebrow: "Our Clinical Highlights",
  items: [
    { value: "[X]+", label: "Years of Experience" },
    { value: "[X],000+", label: "Happy Patients" },
    { value: "[X]+", label: "Conditions Treated" },
    { value: "[X]%", label: "Positive Google Reviews" },
    { value: "[X]+", label: "Successful Chronic Cases" },
    { value: "24/7", label: "WhatsApp Support" },
  ],
};
