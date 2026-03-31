import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  const [data, setData] = useState(null);
  const [sent, setSent] = useState(false);

  useTitle("Contact | FinEase")
  useEffect(() => {
    fetch("/contactData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  const infoItems = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: data.contactInfo?.email,
      bg: "bg-primary/10",
      color: "text-primary",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: data.contactInfo?.phone,
      bg: "bg-secondary/10",
      color: "text-secondary",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: data.contactInfo?.address,
      bg: "bg-error/10",
      color: "text-error",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">

      {/* HERO */}
      <div className="bg-primary text-primary-content py-20 text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
          <FaEnvelope className="text-2xl" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>

        <p className="text-lg text-primary-content/70 max-w-xl mx-auto leading-relaxed mb-10">
          {data.subtitle}
        </p>

        <div className="flex justify-center gap-12 flex-wrap">
          {data.stats?.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-primary-content/55 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8">

        {/* FORM */}
        <div className="bg-base-100 border border-base-300 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FaPaperPlane className="text-primary text-sm" />
            </div>
            <h2 className="text-xl font-bold text-base-content">Send a Message</h2>
          </div>

          {sent && (
            <div className="bg-success/10 border border-success/30 text-success rounded-xl px-4 py-3 mb-6 text-sm font-medium">
              ✓ Message sent! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="input input-bordered w-full bg-base-200 focus:border-primary"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="input input-bordered w-full bg-base-200 focus:border-primary"
            />

            <input
              type="text"
              placeholder="Subject"
              required
              className="input input-bordered w-full bg-base-200 focus:border-primary"
            />

            <textarea
              placeholder="Write your message here..."
              required
              className="textarea textarea-bordered w-full h-36 bg-base-200 focus:border-primary resize-none"
            ></textarea>

            <button
              type="submit"
              className="btn bg-primary text-white w-full flex items-center gap-2 hover:bg-primary/90"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          {/* INFO */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-6">Contact Info</h2>

            <div className="flex flex-col gap-3">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-base-200 rounded-xl p-3">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-content/50 uppercase">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-7">
            <h3 className="text-xl font-bold mb-5">Follow Us</h3>

            <div className="flex flex-wrap gap-3">
              {data.socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm bg-primary/10 text-primary hover:bg-primary hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="bg-success/10 border border-success/25 rounded-2xl px-5 py-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-success"></span>
            <p className="text-sm text-success font-medium">
              {data.availability}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-7 text-center text-primary-content">
            <h3 className="text-lg font-bold mb-2">Need urgent help?</h3>

            <p className="text-sm mb-5 opacity-80">
              For urgent issues, email us directly and we'll respond quickly.
            </p>

            <a
              href={`mailto:${data.contactInfo?.email}`}
              className="btn bg-white text-primary font-bold hover:bg-base-200 btn-sm"
            >
              Email Us Directly
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;