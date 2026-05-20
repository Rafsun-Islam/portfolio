import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Proof from "./components/Proof";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllProjects from "./pages/AllProjects";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import { personal } from "./data";

function HomePage() {
  useEffect(() => {
    document.title = `${personal.name} — Software Engineer Portfolio`;
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <Proof />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [page, setPage] = useState(() => window.location.pathname);
  const routes = useMemo(() => ["/", "/projects"], []);

  useEffect(() => {
    let hideLoaderTimer;
    const loadTimer = window.setTimeout(() => {
      setShowPage(true);
      hideLoaderTimer = window.setTimeout(() => setShowLoader(false), 450);
    }, 1700);

    return () => {
      window.clearTimeout(loadTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => setPage(window.location.pathname);

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!routes.includes(href)) return;

      event.preventDefault();

      window.history.pushState(null, "", href);
      setPage(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [routes]);

  return (
    <div className="relative min-h-screen">
      {showLoader && (
        <div
          className={`fixed inset-0 z-[120] transition-opacity duration-500 ${
            showPage ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}

      <div
        className={`transition-opacity duration-500 ${
          showPage ? "opacity-100" : "opacity-0"
        }`}
      >
        {page === "/projects" ? <AllProjects /> : <HomePage />}
      </div>
    </div>
  );
}
