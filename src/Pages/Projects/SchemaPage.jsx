import React from "react";
import projects from "./data";
import { Link, useParams } from "react-router-dom";

const SchemaPage = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="p-10 font-mono text-red-500">PROJECT_NOT_FOUND.exe</div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-background cyber-grid">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "0%",
              animationDelay: "0s",
              animationDuration: "5.857395665522332s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "8%",
              animationDelay: "0.8s",
              animationDuration: "5.866743221428576s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "16%",
              animationDelay: "1.6s",
              animationDuration: " 6.175538424032762s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "24%",
              animationDelay: "2.4000000000000004s",
              animationDuration: "5.935710227515552s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "32%",
              animationDelay: "3.2s",
              animationDuration: "6.398950522810438s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "40%",
              animationDelay: "4s",
              animationDuration: "6.9543917337889525s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "48%",
              animationDelay: "4.800000000000001s",
              animationDuration: "6.617226022857087s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "56%",
              animationDelay: "5.6000000000000005s",
              animationDuration: "6.154486593433758s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "64%",
              animationDelay: "6.4s",
              animationDuration: "5.16802699850512s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "72%",
              animationDelay: "7.2s",
              animationDuration: "5.666022620045345s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "80%",
              animationDelay: "8s",
              animationDuration: "5.318520231731608s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "88%",
              animationDelay: "8.8s",
              animationDuration: "5.157162904783104s",
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <header className="py-8 bg-card/50 backdrop-blur-sm neon-border border-b">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link to="/">
                    <button
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 neon-border bg-transparent font-mono uppercase"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-house w-4 h-4 mr-2"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                      MAINFRAME
                    </button>
                  </Link>
                  <Link to="/projects">
                    <button
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 neon-border bg-transparent font-mono uppercase"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-left w-4 h-4 mr-2"
                      >
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                      </svg>
                      BACK_TO_PROTOCOLS
                    </button>
                  </Link>
                </div>
                
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-green-500/20 text-green-400 border-green-400 font-mono"
                >
                  ACTIVE
                </span>
              </div>
            </div>
          </header>
          <section className="py-12 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold text-primary animate-neon-pulse font-mono mb-4">
                    {project.title}
                  </h1>
                  <p className="text-lg text-muted-foreground font-mono mb-6">
                    AI-powered analytics platform with real-time data processing
                    and cybernetic interfaces
                    <br />
                    <br />
                    <br />
                    {project.tagline}
                  </p>

                  <div className="flex gap-4">
                    {project.links.demo && (


                    <Link to={project.links.demo}
                    onClick={(e) => e.stopPropagation()}
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[&gt;svg]:px-3 neon-border bg-primary hover:bg-primary/80 font-mono uppercase"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link w-4 h-4 mr-2"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      LIVE_DEMO
                    </Link>
                    )}
                    <button
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 neon-border bg-transparent font-mono uppercase"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github w-4 h-4 mr-2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      SOURCE_CODE
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={project.heroImage2}
                    alt={project.title}
                    className="w-full rounded-lg neon-border shadow-2xl hover:animate-glitch"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-primary font-mono mb-8 animate-neon-pulse">
                TECHNOLOGY_STACK.exe
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                  >
                    {tech}
                  </span>
                ))}
                {/* <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  React
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  TensorFlow.js
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  WebGL
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  Socket.io
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  Quantum Encryption
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  Node.js
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  MongoDB
                </span>
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground text-sm font-mono neon-border bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2"
                >
                  Redis
                </span> */}
              </div>
            </div>
          </section>
          <section className="py-12 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-primary font-mono mb-8 animate-neon-pulse">
                CORE_FEATURES.dll
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((f, i) => (
                  <div key={i}>
                    <div
                      data-slot="card"
                      className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors"
                    >
                      <div data-slot="card-content" className="p-6">
                        <div className="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-zap w-5 h-5 text-primary"
                          >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                          <span className="font-mono text-sm">{f}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors"
                >
                  <div data-slot="card-content" className="p-6">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-5 h-5 text-primary"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                      <span className="font-mono text-sm">
                        Cybernetic interface design
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-primary font-mono mb-8 animate-neon-pulse">
                VISUAL_INTERFACE.png
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((img, i) => (
                  // <img key={i} src={img} alt="" className="rounded neon-border" />
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt="Screenshot 1"
                      className="w-full rounded-lg neon-border shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg group-hover:animate-glitch"></div>
                  </div>
                ))}
                {/* <div className="relative group">
                  <img
                    src="../task-management-dashboard.png"
                    alt="Screenshot 2"
                    className="w-full rounded-lg neon-border shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg group-hover:animate-glitch"></div>
                </div> */}
              </div>
            </div>
          </section>
          <section className="py-12 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-primary font-mono mb-8 animate-neon-pulse">
                PROJECT_OVERVIEW.txt
              </h2>
              <div
                data-slot="card"
                className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm neon-border bg-card/50 backdrop-blur-sm"
              >
                <div data-slot="card-content" className="p-8">
                  <p className="text-muted-foreground font-mono leading-relaxed text-lg">
                    A comprehensive dashboard that processes neural network data
                    in real-time, featuring advanced visualization techniques
                    and secure data transmission protocols. This platform
                    integrates cutting-edge machine learning algorithms with
                    quantum encryption to provide unparalleled security and
                    performance in data analytics.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {project.overview}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SchemaPage;
