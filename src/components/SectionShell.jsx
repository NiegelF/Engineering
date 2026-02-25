import { motion } from "framer-motion";

function SectionShell({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-8">
        {eyebrow ? (
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-accent-400">
            {eyebrow}
          </p>
        ) : null}
        {title ? <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2> : null}
      </div>
      {children}
    </motion.section>
  );
}

export default SectionShell;
