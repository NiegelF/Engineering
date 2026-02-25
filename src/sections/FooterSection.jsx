import UniversityBadge from "../components/UniversityBadge";

function FooterSection() {
  return (
    <footer className="mt-12 border-t border-slate-800/80 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-100">Niegel Fernandes</p>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Electrical &amp; Computer Engineering
          </p>
        </div>

        <UniversityBadge
          className="self-start border-slate-600/70 bg-slate-900/40 opacity-80 sm:self-auto"
          textClassName="text-slate-300/75"
        />
      </div>
    </footer>
  );
}

export default FooterSection;
