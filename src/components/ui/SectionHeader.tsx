interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-text">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
