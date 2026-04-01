import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Jarvis: Python-based Voice Assistant",
    description: "A Python-based voice assistant to perform basic tasks using voice commands.",
    tags: ["Python", "Speech Recognition", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/saranyasa-siza/Jarvis",
  },
  {
    id: 2,
    title: "Chetna: Mental Wellness App",
    description: "a mental health support application with team 'Deep_Learners'",
    tags: ["Vanilla JS", "Express.js", "Node.js", "PostgreSQL", "Basic NLP"],
    demoUrl: "https://chetana-two.vercel.app/",
    githubUrl: "https://github.com/ItsMeSwagnik/Chetana-1.0",
  },
  {
    id: 3,
    title: "Smart Helmet: Wear Detection",
    description: "An IoT-based helmet detection system to ensure vehicle ignition only when the helmet is worn, with a team.",
    tags: ["My Role: Circuit Designer"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const headingRef = useScrollReveal();
  const subtitleRef = useScrollReveal();
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();
  const card3Ref = useScrollReveal();

  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 ref={headingRef} className="reveal text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p ref={subtitleRef} className="reveal reveal-delay-1 text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
            const cardRef = key === 0 ? card1Ref : key === 1 ? card2Ref : card3Ref;
            const delayClass = key === 0 ? "reveal-delay-1" : key === 1 ? "reveal-delay-2" : "reveal-delay-3";
            return (
              <div
                key={key}
                ref={cardRef}
                className={`reveal ${delayClass} group bg-card rounded-lg overflow-hidden shadow-xs card-hover`}
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Code2 size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/saranyasa-siza"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};