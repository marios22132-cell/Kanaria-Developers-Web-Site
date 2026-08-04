"use client";

import { motion } from "framer-motion";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const KANARIA_LOCATION = { lat: 34.7769012, lng: 32.4404949 };
const MAP_ID = "kanaria_dark";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${KANARIA_LOCATION.lat},${KANARIA_LOCATION.lng}`;

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8e8e8e" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c9c9c9" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#8e8e8e" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1f2a1f" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b8e6b" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1a1a1a" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9a9a9a" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3a3a3a" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1a1a1a" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f5f0eb" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d1418" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4a6a7a" }] },
];

export default function LocationSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section className="bg-[#121212] px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex items-center gap-6 mb-14 md:mb-20"
      >
        <span className="text-[10px] tracking-[0.35em] text-[#f5f0eb]/70 uppercase">
          Location
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif font-light text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] text-[#f5f0eb] max-w-4xl mb-6"
      >
        Paphos, Cyprus.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="text-sm md:text-base leading-[1.9] text-[#f5f0eb]/60 font-light max-w-2xl mb-14 md:mb-16"
      >
        Moments from the sea, essential amenities, and the vibrant character of
        the city — while preserving the calm of a private residential setting.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0 border border-white/10 overflow-hidden"
      >
        <div className="relative h-[420px] md:h-[560px] w-full bg-[#1a1a1a]">
          {apiKey ? (
            <APIProvider apiKey={apiKey}>
              <Map
                mapId={MAP_ID}
                defaultCenter={KANARIA_LOCATION}
                defaultZoom={15}
                gestureHandling="cooperative"
                disableDefaultUI={false}
                zoomControl
                mapTypeControl={false}
                streetViewControl={false}
                fullscreenControl={false}
                styles={darkMapStyle}
                className="w-full h-full"
              >
                <AdvancedMarker position={KANARIA_LOCATION}>
                  <KanariaPin />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          ) : (
            <MapFallback />
          )}
        </div>

        <aside className="p-8 md:p-10 bg-[#181818] flex flex-col justify-between gap-10">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/40 uppercase mb-3">
                Address
              </p>
              <p className="font-serif font-light text-2xl text-[#f5f0eb] leading-tight">
                Kanaria Residence
              </p>
              <p className="text-sm font-light text-[#f5f0eb]/60 mt-2">
                Paphos, Cyprus
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/40 uppercase mb-3">
                Coordinates
              </p>
              <p className="text-sm font-light text-[#f5f0eb]/70 tabular-nums">
                {KANARIA_LOCATION.lat.toFixed(6)},{" "}
                {KANARIA_LOCATION.lng.toFixed(6)}
              </p>
            </div>
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 border border-[#f5f0eb]/40 text-[#f5f0eb] text-xs tracking-[0.25em] uppercase px-5 py-4 hover:bg-[#f5f0eb]/5 transition-colors"
          >
            <span>Get Directions</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </aside>
      </motion.div>
    </section>
  );
}

function KanariaPin() {
  return (
    <div className="relative -translate-y-1/2 flex flex-col items-center">
      <div className="w-11 h-11 bg-[#f5f0eb] flex items-center justify-center shadow-lg shadow-black/40 border border-[#121212]/10">
        <span className="font-serif text-[#121212] text-xl font-light leading-none">K</span>
      </div>
      <div className="w-px h-3 bg-[#f5f0eb]" />
    </div>
  );
}

function MapFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6">
      <p className="text-[10px] tracking-[0.3em] text-[#f5f0eb]/50 uppercase">
        Map Unavailable
      </p>
      <p className="text-sm text-[#f5f0eb]/60 max-w-sm font-light">
        Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local to enable the
        interactive map.
      </p>
    </div>
  );
}
