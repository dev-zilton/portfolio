type SectionHeadingProps = {
  title: string;
  highlight: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  title,
  highlight,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 space-y-4 ${className}`}>
      <h2 className="section-heading">
        {title}{" "}
        <span className="font-normal text-gradient-primary">{highlight}</span>
      </h2>
      {subtitle ? (
        <p className="section-subheading mx-auto max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}
