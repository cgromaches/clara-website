import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  projects,
  getProject,
  REGISTER_LABEL,
  REGISTER_COLOR,
  LINK_KIND_LABEL,
  getProjectGallery,
} from "@/lib/projects";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.body,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const gallery = getProjectGallery(p.slug);
  const visibleLinks = (p.links ?? []).filter((l) => l.kind !== "gallery");

  return (
    <div className="page">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="nav__brand">
          Clara G
        </Link>
        <div className="nav__links">
          <Link href="/#work">Work</Link>
          <Link href="/#comms">Comms</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <article className="project-detail section">
        <Link href="/#work" className="project-detail__back">
          ← Back to work
        </Link>

        <span
          className="eyebrow project-detail__eyebrow"
          style={{ color: REGISTER_COLOR[p.register] }}
        >
          {REGISTER_LABEL[p.register]}
        </span>

        <h1 className="project-detail__title">{p.title}</h1>

        <p className="project-detail__meta">
          {p.place}
          {p.year !== undefined ? ` · ${p.year}` : ""}
        </p>

        {gallery.length > 0 && (
          <div
            className="project-detail__gallery"
            role="region"
            aria-label={`${p.title} gallery`}
          >
            {gallery.map((src, i) => (
              <figure key={src} className="project-detail__gallery-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${p.title}, ${i + 1} of ${gallery.length}`}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </figure>
            ))}
          </div>
        )}

        <p className="project-detail__body">{p.body}</p>

        {p.cta && (
          <a
            href={p.cta.href}
            className="project-detail__cta"
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-detail__cta-label">{p.cta.label}</span>
            <span className="project-detail__cta-arrow">→</span>
          </a>
        )}

        {p.partners && p.partners.length > 0 && (
          <div className="project-detail__partners">
            <span className="eyebrow project-detail__partners-label">
              Partners
            </span>
            <ul className="project-detail__partners-list">
              {p.partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        )}

        {visibleLinks.length > 0 && (
          <div className="project-detail__links">
            <span className="eyebrow project-detail__partners-label">
              Links
            </span>
            <ul className="project-detail__links-list">
              {visibleLinks.map((link) => (
                <li key={link.href} className="project-detail__link-item">
                  <span className="project-detail__link-kind">
                    {LINK_KIND_LABEL[link.kind]}
                  </span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-detail__link-label"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
