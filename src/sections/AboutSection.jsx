import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";
import UniversityBadge from "../components/UniversityBadge";

function AboutSection() {
  return (
    <SectionShell id="about" eyebrow="Who I Am" title="I build to learn and to improve">
      <GlassCard className="p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <UniversityBadge
            showText={false}
            className="border-slate-600/70 bg-slate-900/50 opacity-80"
          />
          <p className="text-xs uppercase tracking-[0.16em] text-slate-300/80">
            Electrical &amp; Computer Engineering, University of Toronto
          </p>
        </div>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I like building things that push my abilities and do something real. Most of my time goes into
          designing hardware, prototyping systems, and pushing ideas until they work outside of simulation. I’m
          driven by curiosity, but what matters to me is execution and iteration. I’m working toward building
          advanced robotic and electrical systems that feel futuristic because they’re built from the ground up.
        </p>
      </GlassCard>
    </SectionShell>
  );
}

export default AboutSection;
