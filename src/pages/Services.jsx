import { FaCode, FaMobileAlt, FaPaintBrush, FaRocket } from "react-icons/fa";

export default function Services() {
  return (

    <section
      id="services"
      className="min-h-screen px-6 md:px-16 lg:px-28 py-20 bg-[#050f1c] text-white"
    >

      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#00d2ff] mb-14">
        My Services
      </h1>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


        {/* Web Dev */}
        <div className="bg-[#0c1a2e] p-8 rounded-xl border border-[#00d2ff]/30 text-center hover:scale-105 transition shadow-lg">

          <FaCode className="text-4xl text-[#00d2ff] mx-auto mb-5" />

          <h3 className="text-xl font-bold mb-3">
            Web Development
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Modern, fast, and responsive websites using React, Next.js,
            and Tailwind CSS.
          </p>

        </div>


        {/* App Dev */}
        <div className="bg-[#0c1a2e] p-8 rounded-xl border border-[#00d2ff]/30 text-center hover:scale-105 transition shadow-lg">

          <FaMobileAlt className="text-4xl text-[#00d2ff] mx-auto mb-5" />

          <h3 className="text-xl font-bold mb-3">
            App Development
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Cross-platform mobile apps using Flutter and React Native.
          </p>

        </div>


        {/* UI/UX */}
        <div className="bg-[#0c1a2e] p-8 rounded-xl border border-[#00d2ff]/30 text-center hover:scale-105 transition shadow-lg">

          <FaPaintBrush className="text-4xl text-[#00d2ff] mx-auto mb-5" />

          <h3 className="text-xl font-bold mb-3">
            UI / UX Design
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Clean, user-friendly, and modern interface designs.
          </p>

        </div>


        {/* SEO */}
        <div className="bg-[#0c1a2e] p-8 rounded-xl border border-[#00d2ff]/30 text-center hover:scale-105 transition shadow-lg">

          <FaRocket className="text-4xl text-[#00d2ff] mx-auto mb-5" />

          <h3 className="text-xl font-bold mb-3">
            Performance & SEO
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Speed optimization and SEO-friendly website structure.
          </p>

        </div>

      </div>

    </section>
  );
}