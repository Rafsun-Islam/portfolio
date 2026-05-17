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
  const [page, setPage] = useState(() => window.location.pathname);
  const routes = useMemo(() => ["/", "/projects"], []);

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

  if (page === "/projects") return <AllProjects />;

  return <HomePage />;
}
