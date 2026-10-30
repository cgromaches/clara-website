"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import {
  type Register,
  REGISTER_LABEL,
  REGISTER_ORDER,
} from "@/lib/registers";

type Item = Project & { gallery: string[] };

export default function SelectedWorks({ items }: { items: Item[] }) {
  // All registers active by default; clicking a tag drops that register.
  const [dropped, setDropped] = useState<Set<Register>>(new Set());

  const toggle = (reg: Register) =>
    setDropped((prev) => {
      const next = new Set(prev);
      if (next.has(reg)) next.delete(reg);
      else next.add(reg);
      return next;
    });

  // A project belongs to its primary register plus any extra tags; it stays
  // visible as long as at least one of its categories is still active.
  const categoriesOf = (p: Item): Register[] => [
    p.register,
    ...(p.tags ?? []),
  ];
  const visible = items.filter((p) =>
    categoriesOf(p).some((c) => !dropped.has(c)),
  );

  type Group =
    | { kind: "row"; project: Item; gallery: string[] }
    | { kind: "pair"; projects: Item[] };
  const groups: Group[] = [];
  let buffer: Item[] = [];
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
  for (const p of visible) {
    if (p.gallery.length > 0) {
      flush();
      groups.push({ kind: "row", project: p, gallery: p.gallery });
    } else {
      buffer.push(p);
    }
  }
  flush();

  const renderProjectInner = (p: Item) => (
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
    <>
      <div className="work__filters" role="group" aria-label="Filter by register">
        {REGISTER_ORDER.map((reg) => {
          const active = !dropped.has(reg);
          return (
            <button
              key={reg}
              type="button"
              className={`work__filter${active ? " is-active" : ""}`}
              aria-pressed={active}
              onClick={() => toggle(reg)}
            >
              {REGISTER_LABEL[reg]}
            </button>
          );
        })}
      </div>

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
    </>
  );
}
