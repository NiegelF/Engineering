import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";

function VisionSection() {
  return (
    <SectionShell id="vision" eyebrow="Startup Vision" title="Building what comes next">
      <GlassCard className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          Long term, I want to build a massively impactful hardware company focused on robotics, advanced
          electronics, and future-leaning systems like wireless energy. My goal isn’t just to ship products, it’s to
          invent things that feel almost impossible at first and turn them into real technology people use. I’m
          working toward building a small, elite team that pushes engineering forward through bold ideas, fast
          execution, and relentless iteration.
        </p>

        <aside className="rounded-2xl border border-cyan-300/35 bg-slate-900/80 p-5 shadow-glow">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            Mission Statement
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            "Technology should feel like magic, but be engineered with
            precision."
          </p>
        </aside>
      </GlassCard>
    </SectionShell>
  );
}

export default VisionSection;
