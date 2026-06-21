import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
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

      <main className="hero section" style={{ paddingBottom: "0" }}>
        <h1 className="hero__name">404.</h1>
        <p className="hero__role">
          This page does not exist. The work is at{" "}
          <Link href="/#work" style={{ borderBottom: "1px solid var(--rule)" }}>
            /work
          </Link>
          , the writing at{" "}
          <Link href="/#comms" style={{ borderBottom: "1px solid var(--rule)" }}>
            /comms
          </Link>
          , reach out at{" "}
          <Link
            href="/#contact"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            /contact
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
