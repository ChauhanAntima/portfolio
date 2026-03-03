import React from "react";
import { FaMobileAlt, FaLink } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-20">

      {/* ===== Heading ===== */}
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        My Projects
      </h2>

      {/* ===== Featured Live Projects ===== */}
      <div className="space-y-12">

        {/* Shree Antarmana */}
        <div className="border border-cyan-500/40 p-10 rounded-2xl hover:border-cyan-400 transition">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Shree Antarmana Jewellery Website
          </h3>
          <p className="text-gray-400 mb-4">
            Full-stack jewellery e-commerce website with responsive frontend
            and backend management features.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Role: Frontend + Backend Developer <br />
            Type: Live Client Project
          </p>
          <a
            href="https://www.shreeantarmana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Visit Website →
          </a>
        </div>

        {/* Enzo International */}
        <div className="border border-cyan-500/40 p-10 rounded-2xl hover:border-cyan-400 transition">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Enzo International Corporate Website
          </h3>
          <p className="text-gray-400 mb-4">
            Responsive corporate website with modern UI and clean navigation.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Role: Frontend + Backend Developer <br />
            Type: Live Client Project
          </p>
          <a
            href="https://www.enzointernational.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Visit Website →
          </a>
        </div>

      </div>

      {/* ===== Other Projects Grid ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {/* Weather App */}
        <div className="border border-cyan-500/30 p-8 rounded-xl text-center hover:border-cyan-400 transition">
          <FaMobileAlt className="text-4xl mx-auto mb-6 text-cyan-400" />
          <h3 className="text-xl font-semibold mb-4">Weather App</h3>
          <p className="text-gray-400 mb-6">
            Flutter based weather app using real-time API integration.
          </p>
          <a
            href="https://github.com/ChauhanAntima/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View Code →
          </a>
        </div>

        {/* HerShield App */}
        <div className="border border-cyan-500/30 p-8 rounded-xl text-center hover:border-cyan-400 transition">
          <FaMobileAlt className="text-4xl mx-auto mb-6 text-cyan-400" />
          <h3 className="text-xl font-semibold mb-4">HerShield Mobile App</h3>
          <p className="text-gray-400 mb-6">
            Women safety mobile application with SOS alerts & live assistance.
          </p>
          <a
            href="https://github.com/ChauhanAntima/HerShield"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View Code →
          </a>
        </div>

        {/* URL Shortener */}
        <div className="border border-cyan-500/30 p-8 rounded-xl text-center hover:border-cyan-400 transition">
          <FaLink className="text-4xl mx-auto mb-6 text-cyan-400" />
          <h3 className="text-xl font-semibold mb-4">URL Shortener</h3>
          <p className="text-gray-400 mb-6">
            Simple and efficient URL shortening service built from scratch.
          </p>
          <a
            href="https://github.com/ChauhanAntima/URL_Shortener"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View Code →
          </a>
        </div>

      </div>

    </section>
  );
}

export default Projects;