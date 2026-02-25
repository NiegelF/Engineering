import { useMemo, useState } from "react";

function toEmbedUrl(url) {
  if (!url) {
    return "";
  }

  const youtubeWatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (youtubeWatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeWatch[1]}`;
  }

  const youtubeShort = url.match(/youtu\.be\/([^?&]+)/);
  if (youtubeShort?.[1]) {
    return `https://www.youtube.com/embed/${youtubeShort[1]}`;
  }

  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo?.[1]) {
    return `https://player.vimeo.com/video/${vimeo[1]}`;
  }

  const drive = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (drive?.[1]) {
    return `https://drive.google.com/file/d/${drive[1]}/preview`;
  }

  return "";
}

function VideoEmbed({ videoUrl, videoFile }) {
  const [videoError, setVideoError] = useState(false);
  const embedUrl = useMemo(() => toEmbedUrl(videoUrl), [videoUrl]);
  const isDirectVideo =
    Boolean(videoUrl) && /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl);
  const playableFile = videoFile || (isDirectVideo ? videoUrl : "");

  if (!videoUrl && !videoFile) {
    return null;
  }

  return (
    <div className="glass-panel rounded-2xl border border-cyan-300/25 p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">
          Demo Video
        </p>
        {videoUrl ? (
          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/50 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Watch Demo
          </a>
        ) : null}
      </div>

      <div className="relative overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950">
        <div className="aspect-video w-full">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Project demo video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : playableFile ? (
            <>
              <video
                className="h-full w-full object-cover"
                controls
                onError={() => setVideoError(true)}
              >
                <source src={playableFile} type="video/mp4" />
                Your browser does not support embedded video playback.
              </video>
              {videoError ? (
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 px-3 py-2 text-xs text-slate-300">
                  Local demo file not found. Add a video file at{" "}
                  <span className="text-cyan-200">{playableFile}</span>.
                </div>
              ) : null}
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              Video link format not recognized.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoEmbed;
