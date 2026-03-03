import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
function App() {

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Next.js Developer",
    "Flutter Developer",
    "UI/UX Enthusiast",
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

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

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContactMe = () => {
    window.location.href = "antimachauhan888@gmail.com";
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

  return (
    <div
      className={`min-h-screen font-sans px-6 md:px-16 lg:px-28 flex flex-col
      ${darkMode ? "bg-[#050f1c] text-white" : "bg-white text-black"}`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleDownloadCV={handleDownloadCV}
      />

      <Home
        text={text}
        handleHireMe={handleHireMe}
        handleContactMe={handleContactMe}
        socialLinks={socialLinks}
      />

      <Skills />
      <Services />
<Projects />
      <div id="contact" className="h-24"></div>
    </div>
  );
}

export default App;