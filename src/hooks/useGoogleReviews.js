import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

let scriptPromise = null;

function loadGoogleMapsScript(apiKey) {
  if (window.google?.maps?.places) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptPromise;
}

// Fetches live reviews + rating from a Google Business Profile using the
// Maps JavaScript API (Places library). Requires:
//   VITE_GOOGLE_MAPS_API_KEY  — an API key with "Maps JavaScript API" +
//                                "Places API" enabled and billing active
//   VITE_GOOGLE_PLACE_ID      — the clinic's Google Place ID
// If either is missing, or the request fails, `reviews` stays null and the
// caller should fall back to the static testimonials in data/content.js.
export function useGoogleReviews() {
  const [state, setState] = useState({ loading: Boolean(API_KEY && PLACE_ID), reviews: null, place: null, error: null });

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) return;

    let cancelled = false;

    loadGoogleMapsScript(API_KEY)
      .then(() => {
        if (cancelled) return;
        const service = new window.google.maps.places.PlacesService(document.createElement("div"));
        service.getDetails(
          { placeId: PLACE_ID, fields: ["reviews", "rating", "user_ratings_total", "name"] },
          (place, status) => {
            if (cancelled) return;
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
              setState({ loading: false, reviews: place.reviews ?? [], place, error: null });
            } else {
              setState({ loading: false, reviews: null, place: null, error: status });
            }
          }
        );
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, reviews: null, place: null, error: err });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
