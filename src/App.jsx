import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { personal } from "./data";

const Marquee = lazy(() => import("./components/Marquee"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Proof = lazy(() => import("./components/Proof"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

function HomePage() {
  useEffect(() => {
    document.title = `${personal.name} — Software Engineer Portfolio`;
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={null}>
          <Marquee />
          <Skills />
          <Projects />
          <Proof />
          <About />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <WhatsAppButton />
        <Footer />
      </Suspense>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState(() => window.location.pathname);
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const routes = useMemo(() => ["/", "/projects"], []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const doneTimer = setTimeout(() => setLoading(false), 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
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

  if (loading) return <Loader fading={fading} />;

  if (page === "/projects") {
    return (
      <Suspense fallback={null}>
        <AllProjects />
      </Suspense>
    );
  }

  return <HomePage />;
}
