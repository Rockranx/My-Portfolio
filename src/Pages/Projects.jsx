import React from "react";
import { Link } from "react-router-dom";
import projects from "./Projects/data";
const Projects = () => {
  const allProjects = Object.values(projects);
  return (
    <>
      <div className="min-h-screen bg-background cyber-grid">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "0%",
              animationDelay: "0s",
              animationDuration: "5.636624500110765s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "8%",
              animationDelay: "0.8s",
              animationDuration: "6.2780026498446695s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "16%",
              animationDelay: "1.6s",
              animationDuration: "5.747118160725801s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "24%",
              animationDelay: "2.4000000000000004s",
              animationDuration: "5.947267651719749s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "32%",
              animationDelay: "3.2s",
              animationDuration: "6.621148217988525s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "40%",
              animationDelay: "4s",
              animationDuration: "6.626652874082495s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "48%",
              animationDelay: "4.800000000000001s",
              animationDuration: "5.582503740224293s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "56%",
              animationDelay: "5.6000000000000005s",
              animationDuration: "6.111339092236321s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "64%",
              animationDelay: "6.4s",
              animationDuration: "6.876127319197772s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "72%",
              animationDelay: "7.2s",
              animationDuration: "5.637084264907896s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "80%",
              animationDelay: "8s",
              animationDuration: "5.203358043448279s",
            }}
          ></div>
          <div
            className="absolute text-primary/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: "88%",
              animationDelay: "8.8s",
              animationDuration: "6.769241054642704s",
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <header className="py-8 bg-card/50 backdrop-blur-sm neon-border border-b">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between">
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
                      className="lucide lucide-arrow-left w-4 h-4 mr-2"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    RETURN_TO_MAINFRAME
                  </button>
                </Link>
                <h1 className="text-3xl font-bold text-primary animate-neon-pulse font-mono">
                  ACTIVE_PROTOCOLS.exe
                </h1>
              </div>
            </div>
          </header>
          <section className="py-8 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border animate-neon-pulse"
                >
                  ALL_PROTOCOLS
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border bg-transparent hover:bg-primary/20"
                >
                  NEURAL_NETWORKS
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border bg-transparent hover:bg-primary/20"
                >
                  CYBER_DEFENSE
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border bg-transparent hover:bg-primary/20"
                >
                  DISTRIBUTED_LEDGER
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border bg-transparent hover:bg-primary/20"
                >
                  SENSOR_NETWORKS
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border bg-transparent hover:bg-primary/20"
                >
                  AUGMENTED_REALITY
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 font-mono uppercase text-sm neon-border bg-transparent hover:bg-primary/20"
                >
                  OPTIMIZATION_TOOLS
                </button>
              </div>
            </div>
          </section>
          <main className="py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project) => (
                  <div key={project.id}>
                    <div
                      data-slot="card"
                      className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                    >
                      <div
                        data-slot="card-header"
                        className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                      >
                        <div className="relative">
                          <img
                           src={project.heroImage} alt={project.title}
                            className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-green-500/20 text-green-400 border-green-400"
                          >
                          {project.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div data-slot="card-content" className="p-6">
                        <div
                          data-slot="card-title"
                          className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                        >
                         {project.title}
                        </div>
                        <div
                          data-slot="card-description"
                          className="text-muted-foreground mb-4 font-mono text-sm"
                        >
                          AI-powered analytics platform with real-time data
                          processing and cybernetic interfaces. Features quantum
                          encryption and biometric authentication.

                          <br />
                          <br />
                          <br />
                          <br />
                          {project.tagline}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech, i) => (
                            // <span  className="neon-border px-3 py-1 font-mono text-sm"></span>
                            <span
                              key={i}
                              data-slot="badge"
                              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                       
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/projects/${project.id}`}>
                            <button
                              data-slot="button"
                              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                                className="lucide lucide-eye w-4 h-4 mr-2"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              ACCESS_DATA
                            </button>
                          </Link>
                          <button
                            data-slot="button"
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                              className="lucide lucide-github w-4 h-4"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                              <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                  >
                    <div className="relative">
                      <img
                        src="modern-ecommerce-interface.png"
                        alt="Neural Network Dashboard"
                        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-green-500/20 text-green-400 border-green-400"
                      >
                        ACTIVE
                      </span>
                    </div>
                  </div>
                  <div data-slot="card-content" className="p-6">
                    <div
                      data-slot="card-title"
                      className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                    >
                      Neural Network Dashboard
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground mb-4 font-mono text-sm"
                    >
                      AI-powered analytics platform with real-time data
                      processing and cybernetic interfaces. Features quantum
                      encryption and biometric authentication.
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star w-4 h-4"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        247
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-git-fork w-4 h-4"
                        >
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        89
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        React
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        TensorFlow.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        WebGL
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-accent/20"
                      >
                        +2
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link href="projects/neural-network-dashboard">
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            className="lucide lucide-eye w-4 h-4 mr-2"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          ACCESS_DATA
                        </button>
                      </Link>
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                          className="lucide lucide-github w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                  >
                    <div className="relative">
                      <img
                        src="task-management-dashboard.png"
                        alt="Quantum Task Manager"
                        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-green-500/20 text-green-400 border-green-400"
                      >
                        ACTIVE
                      </span>
                    </div>
                  </div>
                  <div data-slot="card-content" className="p-6">
                    <div
                      data-slot="card-title"
                      className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                    >
                      Quantum Task Manager
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground mb-4 font-mono text-sm"
                    >
                      Next-gen project management with encrypted communications
                      and biometric authentication. Supports multi-dimensional
                      task tracking.
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star w-4 h-4"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        156
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-git-fork w-4 h-4"
                        >
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        43
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Next.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        TypeScript
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        WebCrypto
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-accent/20"
                      >
                        +2
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/projects/quantum-task-manager">
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            className="lucide lucide-eye w-4 h-4 mr-2"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          ACCESS_DATA
                        </button>
                      </Link>
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                          className="lucide lucide-github w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                  >
                    <div className="relative">
                      <img
                        src="weather-dashboard.png"
                        alt="Atmospheric Data Grid"
                        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-green-500/20 text-green-400 border-green-400"
                      >
                        ACTIVE
                      </span>
                    </div>
                  </div>
                  <div data-slot="card-content" className="p-6">
                    <div
                      data-slot="card-title"
                      className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                    >
                      Atmospheric Data Grid
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground mb-4 font-mono text-sm"
                    >
                      Real-time environmental monitoring system with holographic
                      data visualization and IoT sensor integration.
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star w-4 h-4"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        89
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-git-fork w-4 h-4"
                        >
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        27
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Vue.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Three.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        WebRTC
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-accent/20"
                      >
                        +2
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/projects/atmospheric-data-grid">
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            className="lucide lucide-eye w-4 h-4 mr-2"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          ACCESS_DATA
                        </button>
                      </Link>
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                          className="lucide lucide-github w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                  >
                    <div className="relative">
                      <img
                        src="cybersecurity-threat-dashboard.png"
                        alt="Cybersecurity Threat Matrix"
                        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-yellow-500/20 text-yellow-400 border-yellow-400"
                      >
                        BETA
                      </span>
                    </div>
                  </div>
                  <div data-slot="card-content" className="p-6">
                    <div
                      data-slot="card-title"
                      className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                    >
                      Cybersecurity Threat Matrix
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground mb-4 font-mono text-sm"
                    >
                      Real-time threat detection and analysis system with
                      machine learning-powered pattern recognition.
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star w-4 h-4"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        312
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-git-fork w-4 h-4"
                        >
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        78
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Python
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        TensorFlow
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Redis
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-accent/20"
                      >
                        +2
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/projects/cybersecurity-threat-matrix">
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            className="lucide lucide-eye w-4 h-4 mr-2"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          ACCESS_DATA
                        </button>
                      </Link>
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                          className="lucide lucide-github w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                  >
                    <div className="relative">
                      <img
                        src="blockchain-identity-management-interface.png"
                        alt="Blockchain Identity Vault"
                        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-blue-500/20 text-blue-400 border-blue-400"
                      >
                        DEVELOPMENT
                      </span>
                    </div>
                  </div>
                  <div data-slot="card-content" className="p-6">
                    <div
                      data-slot="card-title"
                      className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                    >
                      Blockchain Identity Vault
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground mb-4 font-mono text-sm"
                    >
                      Decentralized identity management system with
                      quantum-resistant encryption and biometric verification.
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star w-4 h-4"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        198
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-git-fork w-4 h-4"
                        >
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        56
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Solidity
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Web3.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        IPFS
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-accent/20"
                      >
                        +2
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/projects/blockchain-identity-vault">
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            className="lucide lucide-eye w-4 h-4 mr-2"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          ACCESS_DATA
                        </button>
                      </Link>
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                          className="lucide lucide-github w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                  >
                    <div className="relative">
                      <img
                        src="augmented-reality-code-visualization.png"
                        alt="AR Code Visualizer"
                        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:animate-glitch"></div>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground absolute top-4 right-4 font-mono text-xs bg-purple-500/20 text-purple-400 border-purple-400"
                      >
                        PROTOTYPE
                      </span>
                    </div>
                  </div>
                  <div data-slot="card-content" className="p-6">
                    <div
                      data-slot="card-title"
                      className="leading-none font-semibold mb-2 group-hover:text-primary transition-colors duration-200 font-mono"
                    >
                      AR Code Visualizer
                    </div>
                    <div
                      data-slot="card-description"
                      className="text-muted-foreground mb-4 font-mono text-sm"
                    >
                      Augmented reality tool for visualizing code architecture
                      and data flow in 3D space.
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star w-4 h-4"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        445
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-git-fork w-4 h-4"
                        >
                          <circle cx="12" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="18" cy="6" r="3"></circle>
                          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                          <path d="M12 12v3"></path>
                        </svg>
                        123
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        WebXR
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Three.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        AR.js
                      </span>
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-accent/20"
                      >
                        +2
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/projects/ar-code-visualizer">
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            className="lucide lucide-eye w-4 h-4 mr-2"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          ACCESS_DATA
                        </button>
                      </Link>
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 bg-transparent neon-border font-mono"
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
                          className="lucide lucide-github w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Projects;
