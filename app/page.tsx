import Link from "next/link";
import {
  REGISTER_COLOR,
  getProjectGallery,
  getHeroProjects,
} from "@/lib/projects";


type WritingItem = {
  date: string;
  title: string;
  kind: string;
  href?: string;
};

const talks: WritingItem[] = [
  {
    date: "2025",
    title: "Decommodifying housing and land",
    kind: "Collective Finance Gathering 3, Commons Hub Austria",
    href: "https://collaborative-finance.net/",
  },
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
    title: "Network Sovereignties as Vehicles for Land and Housing Commons: The Case of Catalonian Fundació Emprius",
    kind: "SOAM Residency, with BlockchainGov. Edited by Sofia Cossar.",
    href: "https://soam-essays.vercel.app/essays/03_clara/",
  },
  {
    date: "2016 to 2017",
    title:
      "Intergenerational social center with senior cohousing residence",
    kind: "University of Girona",
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
    kind: "Time Magazine",
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

const workshops: WritingItem[] = [
  {
    date: "2026",
    title: "Thresholds Workshop",
    kind: "The Hus Institute, Liechtenstein",
    href: "https://thehus.institute/",
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
          <Link href="/archive">Archive</Link>
          <a href="#comms">Comms</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero section">
        <h1 className="hero__name">Clara Gromaches</h1>
        <p className="hero__role">
          Architect, designing systems and pilots for housing and land
          commons.
        </p>
        <p className="hero__mission">
          Drawing on years of co-operative incubation, place-based policy,
          bio-architecture practice and edge technologies.
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
            <h3 className="register__title">Where the practice converges.</h3>
            <p className="register__body">
              Designing the legal, social, economic and technical mechanisms
              that advance housing and land commons, and running the pilots
              that demonstrate them. Through{" "}
              <a
                href="https://komma.systems"
                target="_blank"
                rel="noreferrer"
              >
                Komma
              </a>
              , registered in Germany and Liechtenstein.
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
              Digital cooperative business.
            </h3>
            <p className="register__body">
              Web3, blockchain and AI for cooperative business. Running
              cooperative business on-chain at dOrg since 2021, advising on
              co-living architecture, and prototyping community housing DAOs.
              Currently moving into AI-runned business and coordination.
            </p>
          </div>
          <div>
            <span
              className="eyebrow"
              style={{ color: REGISTER_COLOR["housing-commons"] }}
            >
              Housing commons
            </span>
            <h3 className="register__title">Coordinating viability.</h3>
            <p className="register__body">
              Project viability research, community incubation and policy
              work for social housing co-ops, alongside rural municipalities,
              foundations and tenants&rsquo; organisations in Catalonia.
            </p>
          </div>
          <div>
            <span className="eyebrow">Regenerative architecture</span>
            <h3 className="register__title">A contemporary vernacular.</h3>
            <p className="register__body">
              Bio-architecture: vernacular construction reinterpreted in a
              contemporary architectural language, with native materials of
              proven durability, allowed to age with dignity. Photography to
              give this kind of work its due.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-heading">
        <h2 className="h2" id="work-heading">
          Selected works
        </h2>

        {(() => {
          const items = getHeroProjects();
          type Group =
            | { kind: "row"; project: (typeof items)[number]; gallery: string[] }
            | { kind: "pair"; projects: (typeof items)[number][] };
          const groups: Group[] = [];
          let buffer: (typeof items)[number][] = [];
          const flush = () => {
            while (buffer.length >= 2) {
              groups.push({ kind: "pair", projects: buffer.slice(0, 2) });
              buffer = buffer.slice(2);
            }
            if (buffer.length === 1) {
              groups.push({ kind: "pair", projects: buffer });
              buffer = [];
            }
          };
          for (const p of items) {
            const gallery = getProjectGallery(p.slug);
            if (gallery.length > 0) {
              flush();
              groups.push({ kind: "row", project: p, gallery });
            } else {
              buffer.push(p);
            }
          }
          flush();

          const renderProjectInner = (p: (typeof items)[number]) => (
            <div className="project__text">
              <span className="project__indicator" aria-hidden="true">
                →
              </span>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__body">{p.body}</p>
              {p.partners && p.partners.length > 0 && (
                <p className="project__partners">
                  <span className="project__partners-label">Partners</span>{" "}
                  {p.partners.join(", ")}
                </p>
              )}
              <span className="project__meta">
                {p.place}
                {p.year !== undefined ? ` · ${p.year}` : ""}
              </span>
            </div>
          );

          return (
            <div className="work__grid">
              {groups.map((g, idx) => {
                if (g.kind === "pair") {
                  return (
                    <div key={`pair-${idx}`} className="work__pair">
                      {g.projects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/work/${p.slug}`}
                          className="project project--compact"
                        >
                          {renderProjectInner(p)}
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link
                    key={g.project.slug}
                    href={`/work/${g.project.slug}`}
                    className="project project--has-gallery"
                  >
                    {renderProjectInner(g.project)}
                    <div
                      className="project__gallery"
                      aria-label={`${g.project.title} gallery`}
                    >
                      {g.gallery.map((src, i) => (
                        <figure key={src} className="project__gallery-item">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt={`${g.project.title}, ${i + 1} of ${g.gallery.length}`}
                            loading="lazy"
                          />
                        </figure>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })()}
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
        <CommsGroup label="Workshops" items={workshops} />
        <CommsGroup label="Research" items={research} />
        <CommsGroup label="Press & interviews" items={press} />
        <CommsGroup label="Teaching" items={teaching} />
      </section>

      <footer className="section" id="contact">
        <h2 className="h2">Contact</h2>
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
          </div>
          <div className="footer__col">
            <span className="footer__label">Based</span>
            <p className="footer__based">
              Clara is based in Catalonia. Komma is registered in Germany
              and Liechtenstein. Working with municipalities, foundations
              and venture collectives across Europe and beyond.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
