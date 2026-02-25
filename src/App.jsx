import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  VisionSection,
} from "./sections";

function App() {
  return (
    <div className="dark min-h-screen bg-surface-900 text-slate-100 selection:bg-accent-500/30">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-grid" />

      {/* Main composition: each section is isolated for easy growth and maintenance. */}
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <VisionSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
