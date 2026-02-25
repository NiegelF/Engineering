import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "../components/ProjectDetailModal";
import SectionShell from "../components/SectionShell";
import { featuredProjects } from "../data/projects";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionShell id="projects" eyebrow="Featured Work" title="Projects">
      {/* Projects are data-driven so adding a new card only requires updating src/data/projects.js */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionShell>
  );
}

export default ProjectsSection;
