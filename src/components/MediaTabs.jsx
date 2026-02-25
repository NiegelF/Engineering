function MediaTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.12em] transition ${
            activeTab === tab.id
              ? "border-cyan-300/70 bg-cyan-500/20 text-cyan-100 shadow-glow"
              : "border-slate-600/80 bg-slate-900/70 text-slate-300 hover:border-cyan-400/55 hover:text-slate-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default MediaTabs;
