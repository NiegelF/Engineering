function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-accent-400/50 bg-accent-500/20 px-6 py-3 text-sm font-medium tracking-wide text-accent-100 transition hover:-translate-y-0.5 hover:bg-accent-500/30 hover:shadow-glow"
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
