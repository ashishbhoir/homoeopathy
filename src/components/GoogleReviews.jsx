import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { clinic, googleReviews } from "../data/content";
import { useGoogleReviews } from "../hooks/useGoogleReviews";

function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-0.5 text-terracotta-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} fill={i < rating ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const { loading, reviews, place, error } = useGoogleReviews();

  // Live Google reviews if configured & fetched successfully, otherwise the
  // static excerpts from data/content.js (see hooks/useGoogleReviews.js for setup).
  const displayReviews =
    reviews && reviews.length > 0
      ? reviews.slice(0, 6).map((r) => ({
          name: r.author_name,
          rating: r.rating,
          text: r.text,
          photo: r.profile_photo_url,
        }))
      : googleReviews;

  const isLive = Boolean(reviews && reviews.length > 0);

  return (
    <section id="reviews" className="section-py bg-cream-100">
      <div className="container-px">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Patient Experiences at {clinic.name}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-sage-950">
              What our patients say on Google
            </h2>
            {place?.rating && (
              <div className="mt-4 flex items-center gap-3">
                <Stars rating={Math.round(place.rating)} />
                <span className="text-sm font-semibold text-sage-900">
                  {place.rating.toFixed(1)} · {place.user_ratings_total} Google reviews
                </span>
              </div>
            )}
          </div>

          <a
            href={clinic.googlePlaceReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary py-2.5! px-5! whitespace-nowrap self-start sm:self-auto"
          >
            See all reviews <ExternalLink size={15} />
          </a>
        </div>

        {!isLive && !loading && (
          <p className="mt-6 text-xs text-sage-700/60 max-w-2xl">
            Showing sample reviews. To display live Google reviews, add{" "}
            <code className="px-1 py-0.5 rounded bg-sage-100 break-all">VITE_GOOGLE_MAPS_API_KEY</code> and{" "}
            <code className="px-1 py-0.5 rounded bg-sage-100">VITE_GOOGLE_PLACE_ID</code> to a{" "}
            <code className="px-1 py-0.5 rounded bg-sage-100">.env</code> file — see README.md.
          </p>
        )}

        <div className="mt-8 md:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayReviews.map((r, i) => (
            <motion.div
              key={r.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card p-6 flex flex-col"
            >
              <Stars rating={r.rating} />
              <p className="mt-4 text-sm text-sage-800/85 leading-relaxed grow">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-sage-100">
                {r.photo ? (
                  <img src={r.photo} alt={r.name} className="h-9 w-9 rounded-full object-cover" />
                ) : (
                  <span className="grid place-items-center h-9 w-9 rounded-full bg-sage-200 text-sage-800 text-xs font-semibold">
                    {r.name?.[1] === "[" ? "?" : r.name?.charAt(0)}
                  </span>
                )}
                <span className="text-sm font-semibold text-sage-900">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
