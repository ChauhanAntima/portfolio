import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Full Stack Developer",
    "UI/UX Enthusiast",
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [showTop, setShowTop] = useState(false);

  const socialLinks = {
    github: "https://github.com/ChauhanAntima",
    twitter: "https://x.com/chauhan__antima",
    linkedin: "https://www.linkedin.com/in/antima-chauhan-2b4b45287/",
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Antima_Resume.pdf";
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleHireMe = scrollToContact;
  const handleContactMe = scrollToContact;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const i = loopNum % titles.length;
    const fullText = titles[i];

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden font-sans flex flex-col
      ${darkMode ? "bg-[#050f1c] text-white" : "bg-white text-black"}`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleDownloadCV={handleDownloadCV}
      />

      <div className="px-4 sm:px-6 md:px-16 lg:px-28 flex flex-col flex-grow">
        <Home
          text={text}
          handleHireMe={handleHireMe}
          handleContactMe={handleContactMe}
          socialLinks={socialLinks}
        />

        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full
        bg-[#00d2ff] text-black flex items-center justify-center shadow-lg shadow-[#00d2ff]/30
        transition-all duration-300 hover:scale-110 active:scale-95
        ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
