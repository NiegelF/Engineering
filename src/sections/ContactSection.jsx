import GlassCard from "../components/GlassCard";
import SectionShell from "../components/SectionShell";

function ContactSection() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let's build the future">
      <GlassCard className="p-6 sm:p-8">
        <div className="flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:text-base">
          <p>Open to robotics, embedded systems, hardware, and engineering opportunities.</p>
          <a
            href="mailto:niegel.fernandes@mail.utoronto.ca"
            className="rounded-full border border-accent-400/50 px-5 py-2 text-accent-300 transition hover:bg-accent-500/20 hover:text-accent-100"
          >
            niegel.fernandes@mail.utoronto.ca
          </a>
        </div>
      </GlassCard>
    </SectionShell>
  );
}

export default ContactSection;
