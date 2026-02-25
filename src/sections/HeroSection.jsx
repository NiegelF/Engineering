import { motion } from "framer-motion";
import PrimaryButton from "../components/PrimaryButton";
import EngineeringTagStrip from "../components/EngineeringTagStrip";
import UniversityBadge from "../components/UniversityBadge";

function HeroSection() {
  return (
    <section className="relative flex min-h-[72vh] items-center py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-8 top-10 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-12 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-accent-400">
            Robotics + Embedded Engineering
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300/80">
              Electrical &amp; Computer Engineering - University of Toronto
            </p>
            <UniversityBadge showText={false} className="opacity-75" />
          </div>
          <h1 className="text-5xl font-bold leading-none text-slate-100 sm:text-7xl">
            Niegel Fernandes
          </h1>
          <h2 className="text-3xl font-semibold leading-tight text-slate-200 sm:text-5xl">
            Building hardware that excites me.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I design robotics, embedded firmware, and intelligent electronics
            with the goal of enhancing my skills and allowing my imagination to become a reality.
          </p>
          <PrimaryButton href="#projects">View Projects</PrimaryButton>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-sm justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-10 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/20 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.65, 0.45] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="glass-panel relative h-72 w-72 overflow-hidden rounded-[2.5rem] border border-cyan-300/35 p-3 shadow-glow sm:h-80 sm:w-80">
            <img
              src="/profile.png"
              alt="Portrait of robotics engineer"
              className="h-full w-full rounded-[2rem] object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-2 left-0 hidden w-full justify-center lg:flex">
        <EngineeringTagStrip />
      </div>
    </section>
  );
}

export default HeroSection;
