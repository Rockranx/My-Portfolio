import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdJavascript } from "react-icons/md";
import { FaReact, FaNodeJs, FaCss3 } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";
import projects from "./Projects/data";
function useScrollAnimation(selector, animationClass) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);

            // Progress bar special handling
            if (selector === ".progress-bar") {
              const percent = entry.target.getAttribute("data-percent") || "0%";
              entry.target.style.width = percent;
            }

            // 🔥 Stop observing after first trigger
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, animationClass]);
}

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Initialize scroll animations
  // Initialize scroll animations
  // Initialize scroll animations
  useScrollAnimation(".fade-in-up", "animate-fade-in-up");
  useScrollAnimation(".slide-in-left", "animate-slide-in-left");
  useScrollAnimation(".slide-in-right", "animate-slide-in-right");
  useScrollAnimation(".scale-in", "animate-scale-in");
  useScrollAnimation(".neon-text", "animate-neon-pulse");
  useScrollAnimation(".progress-bar", "progress-animate");
  useScrollAnimation(".matrix-rain", "animate-matrix-rain");
  const featuredProjects = Object.values(projects).filter((p) => p.featured);
  // Animate progress bars after a delay
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     document.querySelectorAll(".progress-bar").forEach((bar) => {
  //       const width = bar.parentElement.getAttribute("data-percent") || "0%";
  //       bar.style.width = width;
  //     });
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);
  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="font-sans __variable_fb8f2c __variable_f910ec __variable_65f816">
        <div className="min-h-screen bg-background cyber-grid">
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "0%",
                animationDelay: "0s",
                animationDuration: "3.2187500311193524s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "5%",
                animationDelay: "0.5s",
                animationDuration: "3.755801477036416s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "10%",
                animationDelay: "1s",
                animationDuration: "4.789271462875371s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "15%",
                animationDelay: "1.5s",
                animationDuration: "4.338644286129201s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "20%",
                animationDelay: "2s",
                animationDuration: "4.024433341224297s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "25%",
                animationDelay: "2.5s",
                animationDuration: "3.756779129034012s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "30%",
                animationDelay: "3s",
                animationDuration: "3.9146103429397296s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "35%",
                animationDelay: "3.5s",
                animationDuration: "4.641124542750482s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "40%",
                animationDelay: "4s",
                animationDuration: "3.67796001763264s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "45%",
                animationDelay: " 4.5s",
                animationDuration: "4.330646747757533s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "50%",
                animationDelay: "5s",
                animationDuration: "3.9534588108838786s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "55%",
                animationDelay: " 5.5s",
                animationDuration: "3.8062233584597815s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "60%",
                animationDelay: "6s",
                animationDuration: "3.0820567670640195s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "65%",
                animationDelay: "6.5s",
                animationDuration: "3.3359439940343445s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "70%",
                animationDelay: " 7s",
                animationDuration: "4.057776855207521s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "75%",
                animationDelay: " 7.5s",
                animationDuration: "4.892658339758858s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "80%",
                animationDelay: "8s",
                animationDuration: "4.579373755866911s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "85%",
                animationDelay: " 8.5s",
                animationDuration: "4.24181825246901s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "90%",
                animationDelay: "9s",
                animationDuration: "4.017164734692989s",
              }}
            ></div>
            <div
              className="absolute text-primary/20 text-xs font-mono matrix-rain-rain"
              style={{
                left: "95%",
                animationDelay: " 9.5s",
                animationDuration: "3.84683951384123s",
              }}
            ></div>
          </div>
          <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
              isScrolled
                ? "bg-background/95 backdrop-blur-sm neon-border"
                : "bg-transparent"
            }`}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex justify-between items-center ">
                <h1 className="text-xl font-bold text-primary neon-pulse font-mono">
                  DEV_RANX.exe
                </h1>
                <div className="hidden md:flex space-x-8">
                  <a
                    href="#about"
                    className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform font-mono uppercase tracking-wider hover:glitch"
                  >
                    About
                  </a>
                  <a
                    className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform font-mono uppercase tracking-wider hover:glitch"
                    href="#projects"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform font-mono uppercase tracking-wider hover:glitch"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform font-mono uppercase tracking-wider hover:glitch"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
              style={{ transform: "translateY(0px)" }}
            ></div>
            <div className="text-center z-10 fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono text-balance neon-pulse">
                <span className="glitch-text relative" data-text="SUGHTER_ACHI">
                  SUGHTER_ACHI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-mono">
                Interfacing with the digital realm • Creating User experiences •
                Hacking reality with AI
              </p>
              <div className="flex gap-4 justify-center mb-12">
                <Link to="/projects">
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 hover:scale-105 transform transition-all duration-200 neon-border neon-pulse font-mono uppercase"
                  >
                    ACCESS_PORTFOLIO
                  </button>
                </Link>
                <a href="#contact">
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 hover:scale-105 transform transition-all duration-200 bg-transparent neon-border font-mono uppercase"
                  >
                    INITIATE_CONTACT
                  </button>
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <Link to="https://github.com/Rockranx">
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
                    className="lucide lucide-github w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200 hover:scale-110 transform hover:glitch"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
                <Link to="https://linkedin.com/in/Sughter">
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
                    className="lucide lucide-linkedin w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200 hover:scale-110 transform hover:glitch"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <a href="#contact">
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
                    className="lucide lucide-mail w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200 hover:scale-110 transform hover:glitch"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
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
              className="lucide lucide-arrow-down absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 text-muted-foreground bounce"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </section>
          <section id="about" className="py-20 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto slide-in-left">
                <h2 className="text-4xl font-bold mb-8 text-center font-mono neon-pulse">
                  SYSTEM_PROFILE
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="neon-border p-6 bg-card/30 backdrop-blur-sm">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-mono">
                      Full Stack Developer focused on building fast, scalable,
                      and user-friendly web applications. I work mainly with
                      React and Node.js, and I enjoy turning complex ideas into
                      clean, intuitive products.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                      I'm especially interested in Web3, DeFi, and AI-driven
                      applications. I like shipping quickly, iterating often,
                      and learning in public.
                    </p>
                    <br />
                    <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                      When not jacked into the mainframe, I'm usually exploring
                      new crypto protocols, breaking down technical ideas, or
                      engaging with the builder community on X.
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src="wer.jpg"
                      alt="Cyber Developer"
                      className="rounded-lg neon-border  transform transition-all duration-300 hover:glitch"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold font-mono neon-pulse">
                  ACTIVE_PROTOCOLS
                </h2>
                <Link to="/projects">
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 hover:scale-105 transform transition-all duration-200 bg-transparent neon-border font-mono uppercase hover:bg-primary hover:text-primary-foreground"
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
                      className="lucide lucide-terminal w-4 h-4 mr-2"
                    >
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" x2="20" y1="19" y2="19"></line>
                    </svg>
                    GO_TO_PROJECTS
                  </button>
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <div key={project.id}>
                    <div
                      data-slot="card"
                      className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm scale-in"
                      style={{ animationDelay: "0s" }}
                      
                    >
                      <div
                        data-slot="card-header"
                        className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
                      >
                        <div className="relative">
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:glitch"></div>
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
                          processing and cybernetic interfaces
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
                        <Link to={`/projects/${project.id}`}>
                          <button
                            data-slot="button"
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                            ACCESS_DATA
                          </button>
                        </Link>
                      </div>
                    </div>  
                  </div>
                ))}
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm scale-in"
                  style={{ animationDelay: "0.1s" }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:glitch"></div>
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
                      and biometric authentication
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
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        Biometric API
                      </span>
                    </div>
                    <Link to="/projects/quantum-task-manager">
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                        ACCESS_DATA
                      </button>
                    </Link>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 hover:scale-105 transform neon-border bg-card/30 backdrop-blur-sm scale-in"
                  style={{ animationDelay: "0.2s" }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg group-hover:glitch"></div>
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
                      data visualization
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
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-xs font-mono neon-border bg-primary/20"
                      >
                        IoT Sensors
                      </span>
                    </div>
                    <Link to="/projects/atmospheric-data-grid">
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent neon-border font-mono uppercase"
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
                        ACCESS_DATA
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="skills" className="py-20 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center font-mono fade-in-up">
                NEURAL_CAPABILITIES
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="mb-8 neon-border p-4 bg-card/30 backdrop-blur-sm fade-in-up">
                  <div className="flex items-center mb-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-zap w-5 h-5 text-primary mr-3"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg> */}
                    <MdJavascript className=" w-8 h-10  text-primary mr-3" />
                    <span className="font-semibold font-mono">JavaScript</span>
                    <span className="ml-auto flex item-center flex-row font-semibold font-mono">
                      <FaReact className=" w-6 h-8  text-primary mr-3" />

                      <div className="flex items-center justify-center">
                        <span className="font-semibold font-mono mr-3">
                          React
                        </span>
                      </div>
                    </span>
                  </div>
                </div>

                <div
                  className="mb-8 neon-border p-4 bg-card/30 backdrop-blur-sm fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-center mb-2">
                    <FaNodeJs className=" w-6 h-8  text-primary mr-3" />
                    <span className="font-semibold font-mono">Node.Js</span>
                    <span className="ml-auto flex item-center flex-row font-semibold font-mono">
                      <SiMongodb className=" w-6 h-8  text-primary mr-3" />

                      <div className="flex items-center justify-center">
                        <span className="font-semibold font-mono mr-3">
                          MongoDB
                        </span>
                      </div>
                    </span>
                  </div>
                </div>

                <div
                  className="mb-8 neon-border p-4 bg-card/30 backdrop-blur-sm fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center mb-2">
                    <SiTailwindcss className=" w-8 h-10  text-primary mr-3" />
                    <span className="font-semibold font-mono">Tailwind</span>
                    <span className="ml-auto flex item-center flex-row font-semibold font-mono">
                      <FaCss3 className=" w-6 h-8  text-primary mr-3" />

                      <div className="flex items-center justify-center">
                        <span className="font-semibold font-mono mr-3">
                          CSS3
                        </span>
                      </div>
                    </span>
                  </div>
                </div>

                <div
                  className="mb-8 neon-border p-4 bg-card/30 backdrop-blur-sm fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center mb-2">
                    <SiFirebase className=" w-8 h-10  text-primary mr-3" />
                    <span className="font-semibold font-mono">Firebase</span>
                    <span className="ml-auto flex item-center flex-row font-semibold font-mono">
                      <SiNetlify className=" w-6 h-8  text-primary mr-3" />

                      <div className="flex items-center justify-center">
                        <span className="font-semibold font-mono mr-3">
                          Netlify
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto fade-in-up">
                <h2 className="text-4xl font-bold mb-8 text-center font-mono neon-pulse">
                  ESTABLISH_CONNECTION
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-lg font-mono">
                  Ready to interface with the digital realm? Let&#x27;s sync our
                  neural networks!
                </p>
                <form className="space-y-6 neon-border p-8 bg-card/30 backdrop-blur-sm">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      data-slot="input"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-200 focus:scale-105 transform neon-border bg-background/50 font-mono"
                      placeholder="USER_ID"
                    />
                    <input
                      type="email"
                      data-slot="input"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-200 focus:scale-105 transform neon-border bg-background/50 font-mono"
                      placeholder="NEURAL_LINK"
                    />
                  </div>
                  <input
                    data-slot="input"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-200 focus:scale-105 transform neon-border bg-background/50 font-mono"
                    placeholder="PROTOCOL_TYPE"
                  />
                  <textarea
                    data-slot="textarea"
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200 focus:scale-105 transform neon-border bg-background/50 font-mono"
                    placeholder="DATA_TRANSMISSION"
                    rows="5"
                  ></textarea>
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full hover:scale-105 transform transition-all duration-200 neon-border neon-pulse font-mono uppercase"
                    type="submit"
                  >
                    TRANSMIT_DATA
                  </button>
                </form>
              </div>
            </div>
          </section>
          <footer className="py-8 bg-card/50 backdrop-blur-sm neon-border border-t">
            <div className="container mx-auto px-6 text-center">
              <p className="text-muted-foreground font-mono">
                © 2024 CYBER_DEV.exe • Neural networks powered by quantum
                algorithms • Built in the digital realm
              </p>
            </div>
          </footer>
        </div>
        {/* <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template> */}
      </div>
    </>
  );
};

export default Home;
