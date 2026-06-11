import profileImage from "../assets/profile.png";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { PrimaryButton } from "./ui/PrimaryButton";

type HeroProps = {
  onContact: () => void;
};

export function Hero({ onContact }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-24 md:px-6"
    >
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated via-surface to-surface pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-turquoise-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* TEXT */}
          <div className="order-2 space-y-4 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-turquoise-400/25 bg-turquoise-400/10 px-3 py-1.5 text-xs font-semibold text-turquoise-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-turquoise-400" />
              {t.hero.available}
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-gradient-primary">
                {t.hero.hi} {staticPortfolio.firstName}
              </span>{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">
                👋🏾
              </span>
            </h1>

            <p className="text-lg font-semibold text-copy md:text-xl">
              {t.hero.subtitle}
            </p>

            <p className="text-base leading-relaxed text-copy-muted">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 md:gap-4">
              <PrimaryButton onClick={onContact}>{t.hero.hireMe}</PrimaryButton>

              <a
                href="/curriculo.pdf"
                download="Curriculo_Zilton_Dev.pdf"
                className="btn-secondary"
              >
                📄 {t.hero.downloadResume}
              </a>

              <a
                href={staticPortfolio.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary opacity-80 transition-opacity hover:opacity-100"
              >
                GitHub
              </a>
            </div>

            {/* METRICS */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {t.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="text-center transition-transform hover:scale-[1.03] md:text-left"
                >
                  <p className="text-2xl font-bold text-gradient-primary md:text-3xl">
                    {metric.value}
                  </p>
                  <p className="text-xs text-copy-muted md:text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-[17rem] w-64 md:h-[22rem] md:w-80">
              {/* GLOW */}
              <div className="absolute inset-0 scale-105 rotate-12 rounded-[40%_60%_70%_30%_/_40%_60%_30%_70%] bg-gradient-to-br from-turquoise-400/25 to-accent-purple/25 blur-2xl pointer-events-none" />

              {/* IMAGE */}
              <div className="relative h-full w-full overflow-hidden rounded-[40%_60%_70%_30%_/_40%_60%_30%_70%] border-2 border-turquoise-400/35 shadow-glow-turquoise-soft">
                <img
                  src={profileImage}
                  alt={staticPortfolio.name}
                  className="h-full w-full scale-[1.08] object-cover object-[50%_38%] animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
