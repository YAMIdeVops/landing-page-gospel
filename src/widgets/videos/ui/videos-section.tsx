import { siteData } from "@/shared/config/site";

export function VideosSection() {
  return (
    <section className="videos" id="videos" aria-labelledby="videos-title">
      <div className="section-heading">
        <div>
          <h2 id="videos-title">Assista aos vídeos</h2>
        </div>
      </div>

      <div className="video-grid">
        {siteData.videos.map((video) => (
          <article className="video-card" key={video.id}>
            <a
              className="video-trigger"
              href={video.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir vídeo de Vanessa Soares no YouTube"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt="Capa do vídeo de Vanessa Soares"
              />
              <span className="play-mark" aria-hidden="true"></span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
