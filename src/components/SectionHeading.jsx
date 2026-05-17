export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="kicker">{eyebrow}</p>

      <h2 className="section-title mt-3">{title}</h2>

      {children ? (
        <p className={`section-copy mt-4 ${centered ? "mx-auto" : ""}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}
