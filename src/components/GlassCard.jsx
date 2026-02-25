function GlassCard({ className = "", children }) {
  return (
    <div className={`glass-panel rounded-2xl shadow-glow ${className}`}>
      {children}
    </div>
  );
}

export default GlassCard;
