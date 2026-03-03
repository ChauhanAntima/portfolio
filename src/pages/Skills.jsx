export default function Skills() {
  return (

    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 lg:px-28 py-20 bg-[#050f1c] text-white"
    >

      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#00d2ff] mb-14">
        My Skills
      </h1>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {[
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Git & GitHub",
          "Firebase",
          "Flutter",
        ].map((skill, i) => (

          <div
            key={i}
            className="bg-[#0c1a2e] border border-[#00d2ff]/30 rounded-xl py-6 text-center
            hover:scale-105 transition duration-300 shadow-lg"
          >

            <h3 className="text-lg font-semibold text-white">
              {skill}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}