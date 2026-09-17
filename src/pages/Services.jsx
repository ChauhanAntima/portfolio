import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
  FaPlug,
  FaRobot,
  FaShoppingCart,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import Reveal from "../components/Reveal";

const services = [
  {
    icon: FaCode,
    title: "Website Development",
    desc: "Fast, responsive business websites, portfolios & landing pages built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Cross-platform Android & iOS apps built with Flutter and React Native, from idea to Play Store / App Store launch.",
  },
  {
    icon: FaServer,
    title: "Full Stack Web Applications",
    desc: "End-to-end web apps with the MERN stack — React, Node.js, Express and MongoDB, built for scale.",
  },
  {
    icon: FaChartLine,
    title: "Custom Software & Admin Dashboards",
    desc: "Tailored admin panels, internal tools and management dashboards that fit your exact business workflow.",
  },
  {
    icon: FaPlug,
    title: "API Development & Integration",
    desc: "Secure REST APIs and third-party integrations (payments, Firebase, maps, and more) that connect your systems.",
  },
  {
    icon: FaRobot,
    title: "Business Process Automation",
    desc: "Automate repetitive work with tools like n8n and WhatsApp automation — save hours every week.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    desc: "Online stores and catalog/booking platforms with smooth checkout and easy-to-manage inventory.",
  },
  {
    icon: FaPaintBrush,
    title: "UI / UX Design",
    desc: "Clean, modern and user-friendly interface design that keeps visitors engaged and converts them into clients.",
  },
  {
    icon: FaRocket,
    title: "Performance, SEO & Maintenance",
    desc: "Speed optimization, SEO-friendly structure and ongoing support to keep your product running smoothly.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#050f1c] text-white">
      <Reveal
        as="h1"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00d2ff] mb-4"
      >
        My Services
      </Reveal>

      <Reveal
        as="p"
        delay={100}
        className="text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base"
      >
        From a single landing page to a full product — I design, build and
        automate websites, mobile apps and custom software end to end.
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 60}>
            <div className="bg-[#0c1a2e] p-6 sm:p-8 rounded-xl border border-[#00d2ff]/30 text-center hover:scale-105 hover:border-[#00d2ff] transition shadow-lg h-full">
              <Icon className="text-4xl text-[#00d2ff] mx-auto mb-5" />
              <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="text-center mt-14 sm:mt-16">
        <p className="text-gray-400 mb-6">
          Have a project in mind? Let's build it together.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#00d2ff] text-black px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition"
        >
          Get a Quote
        </a>
      </Reveal>
    </section>
  );
}
