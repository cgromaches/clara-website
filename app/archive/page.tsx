import Link from "next/link";
import type { Metadata } from "next";
import {
  projects,
  REGISTER_LABEL,
  REGISTER_COLOR,
  REGISTER_ORDER,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The complete list of work across edge technologies, housing commons and regenerative architecture.",
};

export default function ArchivePage() {
  return (
    <div className="page">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="nav__brand">
          Clara G
        </Link>
        <div className="nav__links">
          <Link href="/#work">Work</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/#comms">Comms</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <section className="section">
        <h1 className="h2">Archive</h1>
        <p
          style={{
            maxWidth: "640px",
            marginTop: "16px",
            color: "var(--ink-soft)",
          }}
        >
          The full body of work, grouped by register. Each entry links to a
          project page with the gallery, partners and links available.
        </p>

        {REGISTER_ORDER.map((reg) => {
          const items = projects.filter((p) => p.register === reg);
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
    </div>
  );
}
