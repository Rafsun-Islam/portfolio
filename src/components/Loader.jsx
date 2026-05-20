import { personal } from "../data";

export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-cyan" />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {personal.name}
        </p>
      </div>
    </div>
  );
}
