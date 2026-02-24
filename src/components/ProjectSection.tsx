interface ProjectSectionProps {
  id: string;
  title: string;
  status: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const ProjectSection = ({
  id,
  title,
  status,
  description,
  details,
  image,
  imageAlt,
  reverse = false,
}: ProjectSectionProps) => {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center border-b border-border"
    >
      <div
        className={`w-full grid grid-cols-1 lg:grid-cols-2 ${
          reverse ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Image */}
        <div className={`h-[50vh] lg:h-screen ${reverse ? "lg:order-2" : ""}`}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text content */}
        <div
          className={`flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-body mb-4">
            {status}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
            {title}
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
          <ul className="space-y-3">
            {details.map((detail, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-muted-foreground font-body"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
