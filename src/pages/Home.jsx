import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Reveal from "../components/Reveal";

export default function Home({
  text,
  handleHireMe,
  handleContactMe,
  socialLinks,
}) {
  return (
    <main
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between flex-grow gap-10 md:gap-6 pt-8 sm:pt-10 pb-16 md:pb-0 relative z-10"
    >
      {/* LEFT */}
      <Reveal className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-lg sm:text-xl text-gray-300">Hello, I'm</h3>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-3 leading-tight">
          Antima Chauhan
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-4 flex flex-wrap justify-center md:justify-start">
          <span className="mr-2">And I'm a</span>

          <span className="text-[#00d2ff] min-w-[220px] sm:min-w-[280px] text-left">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
          I help businesses go online and grow with custom websites, mobile
          apps and software — built end to end, from design to deployment.
        </p>

        {/* SOCIAL */}
        <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5 mt-8 sm:mt-10">
          {[
            { icon: FaGithub, link: socialLinks.github },
            { icon: FaTwitter, link: socialLinks.twitter },
            { icon: FaLinkedinIn, link: socialLinks.linkedin },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border-2 border-[#00d2ff] text-[#00d2ff]
                hover:bg-[#00d2ff] hover:text-black hover:scale-110 transition duration-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
          <button
            onClick={handleHireMe}
            className="bg-[#00d2ff] text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition"
          >
            Hire Me
          </button>

          <button
            onClick={handleContactMe}
            className="border-2 border-[#00d2ff] text-[#00d2ff] px-6 sm:px-8 py-3 rounded-full font-bold
            hover:bg-[#00d2ff] hover:text-black hover:scale-105 active:scale-95 transition"
          >
            Contact Me
          </button>
        </div>
      </Reveal>

      {/* RIGHT IMAGE */}
      <Reveal
        delay={150}
        className="relative w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-[#00d2ff] blur-[100px] sm:blur-[120px] opacity-30 animate-pulse pointer-events-none"></div>

        <div
          className="relative z-10 w-[230px] h-[270px] sm:w-[280px] sm:h-[320px] md:w-[400px] md:h-[450px]
          bg-[#0c1a2e] border-2 border-[#00d2ff] overflow-hidden shadow-xl shadow-[#00d2ff]/10"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        >
          <img
            src="/myimg.jpeg"
            alt="Antima"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>
    </main>
  );
}
