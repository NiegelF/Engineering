import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function normalize(items = []) {
  return items.map((item, index) =>
    typeof item === "string"
      ? { src: item, alt: `Project media ${index + 1}` }
      : {
          src: item.src,
          alt: item.alt || `Project media ${index + 1}`,
        },
  );
}

function ImageGallery({ images = [], label = "Media Gallery" }) {
  const entries = useMemo(() => normalize(images), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!entries.length) {
    return null;
  }

  const activeImage = entries[Math.min(activeIndex, entries.length - 1)];

  return (
    <>
      <div className="glass-panel rounded-2xl border border-cyan-300/25 p-3">
        <p className="mb-3 text-xs uppercase tracking-[0.14em] text-cyan-300">
          {label}
        </p>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group relative block w-full overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.01]"
          />
        </button>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {entries.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-24 flex-none overflow-hidden rounded-lg border transition ${
                activeIndex === index
                  ? "border-cyan-300/80 shadow-glow"
                  : "border-slate-700/70 hover:border-cyan-400/50"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-cyan-300/35 bg-slate-900 p-3 shadow-glow"
              initial={{ scale: 0.96, y: 14 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full border border-slate-600 bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.1em] text-slate-200 transition hover:border-cyan-400/60"
                onClick={() => setLightboxOpen(false)}
              >
                Close
              </button>
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default ImageGallery;
