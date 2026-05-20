import { useEffect, useState } from "react";
import { navLinks, personal } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Only for scrolled state (throttled via rAF)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Active section detection via IntersectionObserver (no scroll jank)
  useEffect(() => {
    const sections = navLinks
      .map((link) => link.href.replace("#", ""))
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition duration-300 ${
          scrolled || open
            ? "border-b border-border bg-ink/90 shadow-[0_10px_40px_rgba(2,6,23,0.25)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3"
            aria-label="Go to home section"
          >
            <img
              src="/favicon.png"
              alt="Rafsun Islam Taskin logo"
              className="h-9 w-9 shrink-0 rounded-xl sm:h-10 sm:w-10"
            />

            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-base sm:text-base">
                {personal.name}
              </span>
              <span className="mt-0.5 hidden text-xs text-muted sm:block">
                {personal.role}
              </span>
            </span>
          </a>

          <div className="hidden items-center rounded-full border border-border bg-white/[0.04] p-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-cyan text-ink"
                      : "text-soft hover:bg-white/[0.06] hover:text-base"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={personal.social.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-2.5"
            >
              Resume
            </a>

            <a href="#contact" className="btn-primary py-2.5">
              Hire Me
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-white/5 transition hover:border-cyan/50 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-base transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-base transition ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-base transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-ink/96 backdrop-blur-2xl lg:hidden">
          <div className="container-page flex min-h-screen min-h-dvh flex-col pb-6 pt-20">
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between rounded-3xl border px-5 py-4 transition ${
                      active
                        ? "border-cyan/50 bg-cyan/10"
                        : "border-border bg-white/[0.04] hover:border-cyan/50 hover:bg-cyan/10"
                    }`}
                  >
                    <span>
                      <span
                        className={`block text-base font-semibold ${
                          active ? "text-cyan" : "text-base"
                        }`}
                      >
                        {link.label}
                      </span>

                      <span className="mt-1 block text-xs text-muted">
                        Go to {link.label.toLowerCase()} section
                      </span>
                    </span>

                    <span
                      className={`font-mono text-xs ${
                        active
                          ? "text-cyan"
                          : "text-muted group-hover:text-cyan"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={personal.social.resume}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="btn-secondary px-3 py-3 text-sm"
              >
                Resume
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary px-3 py-3 text-sm"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
