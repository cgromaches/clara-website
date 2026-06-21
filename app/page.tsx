import Link from "next/link";
import {
  REGISTER_LABEL,
  REGISTER_COLOR,
  REGISTER_ORDER,
  getProjectGallery,
  getHeroProjects,
  getArchiveProjects,
} from "@/lib/projects";


type WritingItem = {
  date: string;
  title: string;
  kind: string;
  href?: string;
};

const talks: WritingItem[] = [
  {
    date: "2024",
    title:
      "Housing & Lands Commons for Regen, Stable and Affordable Living: Web3 Opportunities",
    kind: "Funding the Commons, DevCon Bangkok",
    href: "https://x.com/claragromaches/status/1856261804474937653",
  },
  {
    date: "2024",
    title: "Towards a solarpunk (co)housing future: web3 opportunities",
    kind: "ETHPrague",
    href: "https://youtu.be/10xO3Jj6SDI?feature=shared&t=52",
  },
  {
    date: "2024",
    title: "Scaling Regen Housing Communities with web3",
    kind: "Regens Village, EthCC Brussels",
    href: "https://x.com/claragromaches/status/1812068835291189406",
  },
  {
    date: "2023",
    title: "Self organization and web3 to combat housing crisis",
    kind: "EthBarcelona",
    href: "https://www.youtube.com/watch?v=1kf0wxjNfMY&t=22153s",
  },
  {
    date: "2023",
    title:
      "Regen Architecture: Towards Post-Capitalist housing communities",
    kind: "MetaFest Croatia",
    href: "https://www.youtube.com/watch?v=54NOcvHybyE",
  },
  {
    date: "2022",
    title:
      "Solarpunk future: learnings from cohousing and co-op housing",
    kind: "EthBarcelona",
    href: "https://www.youtube.com/watch?v=a5mmLHWLPic&t=8207s",
  },
  {
    date: "2022",
    title: "Mobilizing unused properties to create affordable housing",
    kind: "La Cellera",
    href: "https://twitter.com/claragromaches/status/1579493255976456193",
  },
];

const research: WritingItem[] = [
  {
    date: "2024",
    title: "Network Sovereignties",
    kind: "SOAM Residency",
    href: "https://soam.earth/residency/",
  },
  {
    date: "2016 to 2017",
    title:
      "Intergenerational social center with senior cohousing residence",
    kind: "University Capstone",
  },
];

const press: WritingItem[] = [
  {
    date: "2025",
    title:
      "How Community Ownership Could Solve the Affordability Crisis",
    kind: "Progress Reimagined, with Kathleen Chu",
    href: "https://kathleeninweb3.substack.com/p/the-future-of-housing-isnt-what-you",
  },
  {
    date: "2024",
    title:
      "It takes a village.. Or a DAO? Housing affordability is in a crisis",
    kind: "Digital Frontier Magazine",
    href: "https://digitalfrontier.com/articles/Dao-housing-affordability",
  },
  {
    date: "2023",
    title: "Living Together: Friday Futures with Clara Gromaches",
    kind: "Friday Futures, with Alana Podrx",
    href: "https://www.youtube.com/watch?v=aLw9Yg5P6Mk",
  },
  {
    date: "2022",
    title: "No Bosses: What It’s Like Working at a DAO",
    kind: "Time",
    href: "https://time.com/6146406/working-at-dao-dorg/",
  },
  {
    date: "2022",
    title:
      "Els projectes d’habitatge cooperatiu poden ser tan potents que acabin regenerant la vida d’un poble",
    kind: "Arrels Magazine (Catalan)",
    href:
      "https://arrels.info/noticia/els-projectes-dhabitatge-cooperatiu-poden-ser-tan-potents-que-acabin-regenerant-la-vida-dun-poble/",
  },
];

const teaching: WritingItem[] = [
  {
    date: "2021",
    title: "Housing Co-ops & Participatory Design (Workshop)",
    kind: "University of Girona, with Undos Arquitectura",
    href: "https://twitter.com/claragromaches/status/1456708331578576900",
  },
  {
    date: "2018 to 2020",
    title: "Architecture Photography (Seminar)",
    kind: "University of Girona, with Dr Maria Pia Fontana",
    href:
      "https://www.instagram.com/stories/highlights/17906021549262764/",
  },
];

function CommsGroup({
  label,
  items,
}: {
  label: string;
  items: WritingItem[];
}) {
  return (
    <div className="comms__group">
      <span className="eyebrow comms__group-label">{label}</span>
      <ul className="writing__list">
        {items.map((w) => (
          <li key={w.title} className="writing__item">
            <span className="writing__date">{w.date}</span>
            {w.href ? (
              <a
                className="writing__title"
                href={w.href}
                target="_blank"
                rel="noreferrer"
              >
                {w.title}
              </a>
            ) : (
              <span className="writing__title">{w.title}</span>
            )}
            <span className="writing__item__kind">{w.kind}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page">
      <nav className="nav" aria-label="Primary">
        <span className="nav__brand">Clara G</span>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#archive">Archive</a>
          <a href="#comms">Comms</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero section">
        <h1 className="hero__name">Clara Gromaches</h1>
        <p className="hero__role">
          Architect working at the intersection of regenerative architecture,
          housing collectives, and distributed technologies.
        </p>
        <p className="hero__mission">
          From Catalonia, I work on housing and land commons: co-operative
          incubation, place-based policy, bio-architecture, and the system
          design that lets it scale.
        </p>
      </header>

      <section className="section">
        <div className="registers">
          <div>
            <span
              className="eyebrow"
              style={{ color: REGISTER_COLOR["system-design"] }}
            >
              System design
            </span>
            <h3 className="register__title">Where the three meet.</h3>
            <p className="register__body">
              Designing the mechanisms that hold a project together: a
              protective institutional membrane, a value-routing instrument,
              a civic infrastructure prototype. Komma is where most of this
              work lives.
            </p>
          </div>
          <div>
            <span
              className="eyebrow"
              style={{ color: REGISTER_COLOR["edge-tech"] }}
            >
              Edge technologies
            </span>
            <h3 className="register__title">
              Coordination, at scale.
            </h3>
            <p className="register__body">
              Web3 and AI let community coordination scale: automating
              routine tasks, and forming a collective brain that thinks
              across distance and time.
            </p>
          </div>
          <div>
            <span
              className="eyebrow"
              style={{ color: REGISTER_COLOR["housing-commons"] }}
            >
              Housing commons
            </span>
            <h3 className="register__title">
              Co-operative incubation, policy and stewardship.
            </h3>
            <p className="register__body">
              Co-op incubation, stewardship-model housing, and policy work with
              rural municipalities, foundations and tenants&rsquo;
              organisations in Catalonia.
            </p>
          </div>
          <div>
            <span className="eyebrow">Regenerative architecture</span>
            <h3 className="register__title">A contemporary vernacular.</h3>
            <p className="register__body">
              Bio-architecture: traditional materials in a contemporary
              architectural language. Earth, clay and lime as regeneration.
              Photography to give this kind of work its due.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-heading">
        <h2 className="h2" id="work-heading">
          Selected works
        </h2>

        {[null].map(() => {
          const items = getHeroProjects();
          return (
            <div key="hero" className="work__group">
              <div className="work__grid">
                {items.map((p) => {
                  const gallery = getProjectGallery(p.slug);
                  const hasGallery = gallery.length > 0;
                  return (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className={`project${hasGallery ? " project--has-gallery" : ""}`}
                    >
                      <div className="project__text">
                        <span
                          className="project__indicator"
                          aria-hidden="true"
                        >
                          →
                        </span>
                        <h3 className="project__title">{p.title}</h3>
                        <p className="project__body">{p.body}</p>
                        {p.partners && p.partners.length > 0 && (
                          <p className="project__partners">
                            <span className="project__partners-label">
                              Partners
                            </span>{" "}
                            {p.partners.join(", ")}
                          </p>
                        )}
                        <span className="project__meta">
                          {p.place}
                          {p.year !== undefined ? ` · ${p.year}` : ""}
                        </span>
                      </div>
                      {hasGallery && (
                        <div
                          className="project__gallery"
                          aria-label={`${p.title} gallery`}
                        >
                          {gallery.map((src, i) => (
                            <figure
                              key={src}
                              className="project__gallery-item"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={src}
                                alt={`${p.title}, ${i + 1} of ${gallery.length}`}
                                loading="lazy"
                              />
                            </figure>
                          ))}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section
        className="section"
        id="archive"
        aria-labelledby="archive-heading"
      >
        <h2 className="h2" id="archive-heading">
          Archive
        </h2>
        {REGISTER_ORDER.map((reg) => {
          const items = getArchiveProjects().filter(
            (p) => p.register === reg,
          );
          if (items.length === 0) return null;
          return (
            <div key={reg} className="archive__group">
              <span
                className="eyebrow archive__group-label"
                style={{ color: REGISTER_COLOR[reg] }}
              >
                {REGISTER_LABEL[reg]}
              </span>
              <ul className="archive__list">
                {items.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className="archive__item">
                      <span className="archive__title">{p.title}</span>
                      <span className="archive__meta">
                        {p.place}
                        {p.year !== undefined ? ` · ${p.year}` : ""}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section
        className="section"
        id="comms"
        aria-labelledby="comms-heading"
      >
        <span className="eyebrow">Comms</span>
        <h2 className="h2" id="comms-heading">
          Talks, writing, teaching.
        </h2>
        <CommsGroup label="Talks" items={talks} />
        <CommsGroup label="Research" items={research} />
        <CommsGroup label="Press & interviews" items={press} />
        <CommsGroup label="Teaching" items={teaching} />
      </section>

      <footer className="section" id="contact">
        <span className="eyebrow">Contact</span>
        <h2 className="h2">In conversation.</h2>
        <div className="footer__row">
          <div className="footer__col">
            <span className="footer__label">Reach</span>
            <a className="footer__link" href="mailto:clara@komma.systems">
              clara@komma.systems
            </a>
            <a
              className="footer__link"
              href="https://twitter.com/claragromaches"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/cgromaches/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer__link"
              href="https://www.instagram.com/claragromaches/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="footer__col">
            <span className="footer__label">Based</span>
            <p className="footer__based">
              Catalonia. Working across rural municipalities, housing
              co-operatives, foundations and venture collectives.
            </p>
          </div>
        </div>
        <div className="colophon">
          <span>
            Set in Source Serif 4 and JetBrains Mono. Cream paper, near-black
            ink.
          </span>
          <span>Catalonia, 2026</span>
        </div>
      </footer>
    </div>
  );
}
