import { useState } from "react";
import { personal } from "../data";
import SectionHeading from "./SectionHeading";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Web3Forms access key missing. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const payload = {
      access_key: accessKey,
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      from_name: "Rafsun Portfolio Contact Form",
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully. Thank you — I will reply as soon as possible.",
        });

        setForm(initialForm);
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Something went wrong. Please try again or email me directly.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Network error. Please try again or email me directly at rafsunislamtaskin024@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad pb-16">
      <div className="container-page">
        <div className="glass-card overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative border-b border-border bg-white/[0.035] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute -left-20 top-20 h-52 w-52 rounded-full bg-cyan/10 blur-3xl" />

              <div className="relative z-10">
                <SectionHeading
                  eyebrow="Contact"
                  title="Let’s talk about opportunities."
                >
                  Send me a message for software engineering roles, projects,
                  collaborations, or feedback. This form sends the message
                  directly to my email inbox.
                </SectionHeading>

                <div className="mt-9 space-y-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="block rounded-3xl border border-border bg-white/5 p-5 transition-colors hover:border-cyan/50 hover:bg-cyan/10"
                  >
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Direct Email
                    </p>
                    <p className="mt-2 break-all font-semibold text-base">
                      {personal.email}
                    </p>
                  </a>
                  <a
                    href="https://wa.me/8801567998451?text=Hi%20Rafsun%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-border bg-white/5 p-5 transition-colors hover:border-cyan/50 hover:bg-cyan/10"
                  >
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Quick Message
                    </p>
                    <p className="mt-2 font-semibold text-base">WhatsApp</p>
                  </a>
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-border bg-white/5 p-5 transition-colors hover:border-cyan/50 hover:bg-cyan/10"
                  >
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Professional Network
                    </p>
                    <p className="mt-2 font-semibold text-base">LinkedIn</p>
                  </a>

                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-border bg-white/5 p-5 transition-colors hover:border-cyan/50 hover:bg-cyan/10"
                  >
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Code Archive
                    </p>
                    <p className="mt-2 font-semibold text-base">GitHub</p>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="mb-8 rounded-3xl border border-border bg-ink/50 p-5">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan">
                  Message Form
                </p>
                <p className="mt-3 text-soft">
                  Fill out the form. The message will be delivered directly to
                  my email inbox.
                </p>
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-soft">
                    Your name
                  </span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-soft">
                    Your email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-soft">Subject</span>
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Software Engineer opportunity"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-soft">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="7"
                  className="input-field resize-none"
                  placeholder="Tell me about the role, project, or collaboration..."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status.message ? (
                <p
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-cyan/30 bg-cyan/10 text-cyan"
                      : "border-red-400/30 bg-red-400/10 text-red-200"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <p className="mt-5 text-sm leading-6 text-muted">
                You can also email me directly at{" "}
                <a href={`mailto:${personal.email}`} className="text-cyan">
                  {personal.email}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
