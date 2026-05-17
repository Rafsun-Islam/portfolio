import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col gap-4 text-sm font-medium text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with React and
          Tailwind.
        </p>

        <div className="flex gap-5">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan"
          >
            GitHub
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan"
          >
            LinkedIn
          </a>

          <a href={`mailto:${personal.email}`} className="hover:text-cyan">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
