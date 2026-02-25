import { motion } from "framer-motion";

const tags = [
  "Robotics",
  "Embedded Systems",
  "Rapid Prototyping",
  "Hardware Innovation",
];

function EngineeringTagStrip() {
  return (
    <motion.div
      className="glass-panel hidden max-w-full items-center gap-2 rounded-full px-3 py-2 lg:flex"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.div
        className="flex items-center gap-2"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {tags.map((tag) => (
          <motion.span
            key={tag}
            className="rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-200"
            whileHover={{ y: -2, borderColor: "rgba(34, 211, 238, 0.8)" }}
            transition={{ type: "spring", stiffness: 340, damping: 20 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default EngineeringTagStrip;
