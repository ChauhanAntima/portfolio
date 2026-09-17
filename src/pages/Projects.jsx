import { FaMobileAlt, FaRobot, FaFilm } from "react-icons/fa";
import Reveal from "../components/Reveal";

const featuredProjects = [
  {
    title: "Shree Antarmana Jewellery Website",
    desc: "Full-stack jewellery e-commerce website with responsive frontend and backend management features.",
    role: "Frontend + Backend Developer",
    type: "Live Client Project",
    link: "https://www.shreeantarmana.com/",
    linkLabel: "Visit Website →",
  },
  {
    title: "Enzo International Corporate Website",
    desc: "Responsive corporate website with modern UI and clean navigation.",
    role: "Frontend + Backend Developer",
    type: "Live Client Project",
    link: "https://www.enzointernational.in/",
    linkLabel: "Visit Website →",
  },
];

const otherProjects = [
  {
    title: "MirrorTV",
    desc: "Netflix-style OTT streaming app with content browsing, video playback, and user profiles.",
    icon: FaFilm,
    link: null,
    linkLabel: "Private Client Project",
  },
  {
    title: "HerShield Mobile App",
    desc: "Women safety mobile application with SOS alerts & live assistance.",
    icon: FaMobileAlt,
    link: "https://github.com/ChauhanAntima/HerShield",
    linkLabel: "View Code →",
  },
  {
    title: "Customer Outreach Agent",
    desc: "Self-hosted n8n workflow that automates personalized WhatsApp marketing campaigns at scale, with live status tracking via Google Sheets.",
    icon: FaRobot,
    link: null,
    linkLabel: "Private Client Project",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Reveal
        as="h2"
        className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-cyan-400"
      >
        My Projects
      </Reveal>

      {/* Featured Live Projects */}
      <div className="space-y-8 sm:space-y-12">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div className="border border-cyan-500/40 p-6 sm:p-8 md:p-10 rounded-2xl hover:border-cyan-400 hover:scale-[1.01] transition">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {project.desc}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Role: {project.role} <br />
                Type: {project.type}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                {project.linkLabel}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {otherProjects.map((project, i) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={i * 80}>
              <div className="border border-cyan-500/30 p-6 sm:p-8 rounded-xl text-center hover:border-cyan-400 hover:scale-105 transition h-full flex flex-col">
                <Icon className="text-4xl mx-auto mb-6 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base flex-grow">
                  {project.desc}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    {project.linkLabel}
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm font-medium">
                    {project.linkLabel}
                  </span>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
