import { useEffect, useMemo, useState } from "react";
import MediaTabs from "./MediaTabs";
import VideoEmbed from "./VideoEmbed";
import ImageGallery from "./ImageGallery";

function ProjectMedia({ project }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setActiveTab("overview");
  }, [project.title]);

  const tabs = useMemo(() => {
    const nextTabs = [{ id: "overview", label: "Overview" }];

    if (project.videoUrl || project.videoFile) {
      nextTabs.push({ id: "video", label: "Demo Video" });
    }
    if (project.codeUrl) {
      nextTabs.push({ id: "code", label: "Code" });
    }
    if (project.cadImages?.length) {
      nextTabs.push({ id: "cad", label: "CAD / Mechanical" });
    }
    if (project.schematics?.length) {
      nextTabs.push({ id: "schematics", label: "Electronics / Schematics" });
    }
    if (project.buildPhotos?.length || project.images?.length) {
      nextTabs.push({ id: "photos", label: "Build Photos" });
    }

    return nextTabs;
  }, [project]);

  const overviewImages = project.images?.length
    ? project.images
    : [
        ...(project.thumbnail
          ? [{ src: project.thumbnail, alt: `${project.title} thumbnail` }]
          : []),
        ...(project.buildPhotos || []),
        ...(project.cadImages || []),
        ...(project.schematics || []),
      ].slice(0, 4);

  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4">
      <MediaTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "overview" ? (
        <div className="space-y-3">
          {project.videoUrl || project.videoFile ? (
            <div className="glass-panel flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyan-300/30 px-3 py-2.5">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">
                Video Attached
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("video")}
                  className="rounded-full border border-cyan-300/55 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cyan-100 transition hover:bg-cyan-500/20"
                >
                  Open Demo Tab
                </button>
                {project.videoUrl ? (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-500/80 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-200 transition hover:border-cyan-300/55"
                  >
                    Watch Demo
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
          <ImageGallery images={overviewImages} label="Overview Gallery" />
        </div>
      ) : null}

      {activeTab === "video" ? (
        <VideoEmbed videoUrl={project.videoUrl} videoFile={project.videoFile} />
      ) : null}

      {activeTab === "code" ? (
        <div className="glass-panel rounded-2xl border border-cyan-300/25 p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-cyan-300">
            Source Code
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-300">
            Explore the firmware and project implementation details in the
            repository.
          </p>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-cyan-300/55 px-4 py-2 text-xs uppercase tracking-[0.12em] text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Open Repository
          </a>
        </div>
      ) : null}

      {activeTab === "cad" ? (
        <ImageGallery images={project.cadImages} label="CAD / Mechanical" />
      ) : null}

      {activeTab === "schematics" ? (
        <ImageGallery
          images={project.schematics}
          label="Electronics / Schematics"
        />
      ) : null}

      {activeTab === "photos" ? (
        <ImageGallery
          images={
            project.buildPhotos?.length
              ? project.buildPhotos
              : project.images || []
          }
          label="Build Photos"
        />
      ) : null}
    </div>
  );
}

export default ProjectMedia;
