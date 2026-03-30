import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/contactData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          {data.title}
        </h1>
        <p className="mt-4 text-lg opacity-90">
          {data.subtitle}
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="backdrop-blur-lg bg-white/70 border border-base-300 rounded-2xl shadow-xl p-8 transition hover:shadow-2xl hover:scale-[1.02]">
          
          <h2 className="text-2xl font-bold text-primary mb-6">
            Send a Message ✉️
          </h2>

          <form className="space-y-5">

            <div>
              <label className="label font-medium">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="label font-medium">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label className="label font-medium">Message</label>
              <textarea
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full h-32 focus:outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full flex items-center gap-2 text-lg transition transform hover:scale-105">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="backdrop-blur-lg bg-white/70 border border-base-300 rounded-2xl shadow-xl p-6 transition hover:shadow-2xl hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Contact Info 📍
            </h2>

            <div className="space-y-4 text-base-content">

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary text-xl">
                  <FaEnvelope />
                </div>
                <span>{data.contactInfo.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary text-xl">
                  <FaPhone />
                </div>
                <span>{data.contactInfo.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-error/10 p-3 rounded-full text-error text-xl">
                  <FaMapMarkerAlt />
                </div>
                <span>{data.contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="backdrop-blur-lg bg-white/70 border border-base-300 rounded-2xl shadow-xl p-6 transition hover:shadow-2xl hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4 text-accent">
              Follow Us 🚀
            </h3>

            <div className="flex flex-wrap gap-3">
              {data.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-primary hover:scale-105 transition"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;