
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Home({
  text,
  handleHireMe,
  handleContactMe,
  socialLinks,
}) {
  return (
    <main
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between flex-grow mt-10 relative z-10"
    >

      {/* LEFT */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-12">

        <h3 className="text-xl text-gray-300">
          Hello, I'm
        </h3>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-3">
          Antima Chauhan
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-4 flex justify-center md:justify-start">
          <span className="mr-2">And I'm a</span>

          <span className="text-[#00d2ff] min-w-[280px] text-left">
            {text}|
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-lg">
          Passionate about building scalable web and mobile applications.
          Specializing in modern frameworks.
        </p>

        {/* SOCIAL */}
        <div className="flex justify-center md:justify-start space-x-5 mt-10">

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
                className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#00d2ff] text-[#00d2ff]
                hover:bg-[#00d2ff] hover:text-black transition"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center md:justify-start space-x-6 mt-10">

          <button
            onClick={handleHireMe}
            className="bg-[#00d2ff] text-black px-8 py-3 rounded-full font-bold"
          >
            Hire Me
          </button>

          <button
            onClick={handleContactMe}
            className="border-2 border-[#00d2ff] text-[#00d2ff] px-8 py-3 rounded-full font-bold
            hover:bg-[#00d2ff] hover:text-black transition"
          >
            Contact Me
          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">

        <div className="absolute w-[300px] h-[300px] bg-[#00d2ff] blur-[120px] opacity-30"></div>

        <div
          className="relative z-10 w-[280px] h-[320px] md:w-[400px] md:h-[450px]
          bg-[#0c1a2e] border-2 border-[#00d2ff] overflow-hidden"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        >

          <img
            src="/myimg.jpeg"
            alt="Antima"
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </main>
  );
}