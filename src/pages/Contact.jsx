import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Reveal from "../components/Reveal";

// Get your free access key from https://web3forms.com (just enter your email, no signup)
// and paste it below to start receiving contact form submissions in your inbox.
const WEB3FORMS_ACCESS_KEY = "afc74d13-a2d9-452e-b882-702578f286f6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New enquiry from ${formData.name} — Portfolio Website`,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Reveal
        as="h2"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00d2ff] mb-4"
      >
        Get In Touch
      </Reveal>

      <Reveal
        as="p"
        delay={100}
        className="text-gray-400 text-center max-w-xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base"
      >
        Have a project or an opportunity in mind? Send me a message and I'll
        get back to you soon.
      </Reveal>

      <div className="grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <Reveal delay={150} className="md:col-span-2 space-y-5 sm:space-y-6">
          <a
            href="mailto:antimachauhan888@gmail.com"
            className="flex items-center gap-4 bg-[#0c1a2e] border border-[#00d2ff]/30 rounded-xl p-5 hover:border-[#00d2ff] hover:scale-[1.02] transition"
          >
            <FaEnvelope className="text-2xl text-[#00d2ff] flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-medium break-all">
                antimachauhan888@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+919511276852"
            className="flex items-center gap-4 bg-[#0c1a2e] border border-[#00d2ff]/30 rounded-xl p-5 hover:border-[#00d2ff] hover:scale-[1.02] transition"
          >
            <FaPhoneAlt className="text-2xl text-[#00d2ff] flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-400">Phone</p>
              <p className="text-sm font-medium">+91 95112 76852</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-[#0c1a2e] border border-[#00d2ff]/30 rounded-xl p-5">
            <FaMapMarkerAlt className="text-2xl text-[#00d2ff] flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-400">Location</p>
              <p className="text-sm font-medium">Mumbai, India</p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={200} className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-[#0c1a2e] border border-[#00d2ff]/30 rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#050f1c] border border-[#00d2ff]/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00d2ff] transition"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-[#050f1c] border border-[#00d2ff]/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00d2ff] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full bg-[#050f1c] border border-[#00d2ff]/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00d2ff] transition"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-[#050f1c] border border-[#00d2ff]/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00d2ff] transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00d2ff] text-black px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <FaPaperPlane className={status === "sending" ? "animate-pulse" : ""} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                Thanks! Your message has been sent — I'll get back to you
                soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email me directly
                at antimachauhan888@gmail.com.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
