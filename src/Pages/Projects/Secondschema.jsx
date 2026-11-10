import React from "react";

const SchemaPage = ({ project }) => {
  if (!project) return null;

  const {
    title,
    tagline,
    status,
    stats,
    links,
    heroImage,
    techStack,
    features,
    screenshots,
    overview,
    lastUpdated,
  } = project;

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="relative z-10">

        {/* HEADER */}
        <header className="py-8 bg-card/50 backdrop-blur-sm neon-border border-b">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex gap-4">
              <a href="/"><button className="neon-border font-mono uppercase">MAINFRAME</button></a>
              <a href="/projects"><button className="neon-border font-mono uppercase">BACK_TO_PROTOCOLS</button></a>
            </div>
            <span className="px-3 py-1 text-xs font-mono border border-green-400 text-green-400 bg-green-500/20 rounded">
              {status.toUpperCase()}
            </span>
          </div>
        </header>

        {/* HERO */}
        <section className="py-12 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-primary font-mono mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground font-mono mb-6">{tagline}</p>

              <div className="flex flex-wrap gap-6 mb-8 font-mono text-sm text-muted-foreground">
                <span>⭐ {stats.stars} STARS</span>
                <span>🍴 {stats.forks} FORKS</span>
                <span>👥 {stats.contributors} CONTRIBUTORS</span>
                <span>📅 UPDATED {lastUpdated}</span>
              </div>

              <div className="flex gap-4">
                {links.demo && (
                  <a href={links.demo} target="_blank">
                    <button className="neon-border bg-primary px-4 py-2 font-mono uppercase">
                      LIVE_DEMO
                    </button>
                  </a>
                )}
                {links.source && (
                  <a href={links.source} target="_blank">
                    <button className="neon-border px-4 py-2 font-mono uppercase">
                      SOURCE_CODE
                    </button>
                  </a>
                )}
              </div>
            </div>

            <div>
              <img src={heroImage} alt={title} className="rounded-lg neon-border shadow-2xl" />
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary font-mono mb-8">TECHNOLOGY_STACK.exe</h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span key={i} className="neon-border px-4 py-2 text-sm font-mono bg-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-12 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary font-mono mb-8">CORE_FEATURES.dll</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="neon-border p-6 bg-card/50">
                  <span className="font-mono text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary font-mono mb-8">VISUAL_INTERFACE.png</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((img, i) => (
                <img key={i} src={img} alt={`Screenshot ${i}`} className="rounded-lg neon-border shadow-lg" />
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-12 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary font-mono mb-8">PROJECT_OVERVIEW.txt</h2>
            <div className="neon-border p-8 bg-card/50">
              <p className="text-muted-foreground font-mono leading-relaxed text-lg">{overview}</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SchemaPage;
