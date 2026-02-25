function UniversityBadge({
  className = "",
  textClassName = "",
  showText = true,
  variant = "mono",
}) {
  const logoTone =
    variant === "tinted"
      ? "opacity-85 saturate-[0.55] hue-rotate-[155deg] brightness-125"
      : "opacity-75 grayscale brightness-200";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/60 px-2.5 py-1.5 ${className}`}
    >
      <img
        src="/uoft-logo.svg"
        alt="University of Toronto logo"
        className={`h-5 w-5 object-contain ${logoTone}`}
      />
      {showText ? (
        <span
          className={`text-[11px] uppercase tracking-[0.14em] text-slate-300/85 ${textClassName}`}
        >
          University of Toronto
        </span>
      ) : null}
    </span>
  );
}

export default UniversityBadge;
