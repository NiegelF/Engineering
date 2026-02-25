import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";
import { engineeringSkills } from "../data/skills";

function SkillsSection() {
  return (
    <SectionShell id="skills" eyebrow="Capability Stack" title="Engineering Skills">
      <GlassCard className="p-6 sm:p-8">
        <ul className="grid gap-4 sm:grid-cols-2">
          {engineeringSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </GlassCard>
    </SectionShell>
  );
}

export default SkillsSection;
