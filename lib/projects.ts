import {
  type Register,
  REGISTER_LABEL,
  REGISTER_COLOR,
  REGISTER_ORDER,
} from "./registers";

export { REGISTER_LABEL, REGISTER_COLOR, REGISTER_ORDER };
export type { Register };

export type LinkKind = "site" | "social" | "press" | "gallery" | "video" | "repo";

export type ProjectLink = {
  label: string;
  href: string;
  kind: LinkKind;
};

export type ProjectCta = {
  label: string;
  href: string;
};

export type ProjectVideo = {
  label: string;
  embed: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  year?: number | string;
  place: string;
  register: Register;
  // Additional categories this project also belongs to (e.g. architectural
  // photography that reads as both architecture and art).
  tags?: Register[];
  // Shown only in Selected Works, kept out of the Archive (e.g. the combined
  // consultancy sheet whose individual projects live in the Archive).
  heroOnly?: boolean;
  body: string;
  partners?: string[];
  links?: ProjectLink[];
  cta?: ProjectCta;
  video?: ProjectVideo;
  cover?: string;
  coverAlt?: string;
};

import fs from "fs";
import path from "path";

export function getProjectGallery(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  try {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/projects/${slug}/${f}`);
  } catch {
    return [];
  }
}

export const LINK_KIND_LABEL: Record<LinkKind, string> = {
  site: "Site",
  social: "Social",
  press: "Press",
  gallery: "Gallery",
  video: "Video",
  repo: "Repository",
};

export const projects: Project[] = [
  {
    slug: "komma",
    title: "Komma",
    year: "active",
    place: "Berlin",
    register: "system-design",
    body: "Venture collective working from place to find where land and housing stay locked in speculation, then building the legal, cultural, economic and digital scaffolding that lets communities hold them as commons. Headline frame: unwinding enclosures. Contributor.",
    links: [{ label: "komma.systems", href: "https://komma.systems", kind: "site" }],
    cta: {
      label: "Partner inquiries",
      href: "mailto:clara@komma.systems?subject=Komma — partnership inquiry",
    },
  },
  {
    slug: "network-sovereignties",
    title: "Network Sovereignties for Land and Housing Commons",
    year: 2024,
    place: "SOAM Residency, with BlockchainGov",
    register: "system-design",
    body: "Research essay on network sovereignties as vehicles for land and housing commons, through the case of Catalonia's Fundació Emprius. With BlockchainGov, edited by Sofia Cossar.",
    links: [
      {
        label: "Read the essay",
        href: "https://soam-essays.vercel.app/essays/03_clara/",
        kind: "press",
      },
    ],
  },
  {
    slug: "exclosure",
    title: "Exclosure",
    year: "active",
    place: "Catalonia, Berlin",
    register: "system-design",
    body: "Komma inquiry. Thinking through, with collaborators rooted in different place-based realities, how a protective institutional membrane can hold community arrangements safe inside the larger rules.",
    links: [
      { label: "exclosu.re", href: "https://www.exclosu.re/", kind: "site" },
      { label: "komma.systems", href: "https://komma.systems", kind: "site" },
    ],
  },
  {
    slug: "tourism-housing",
    title: "Tourism × Housing",
    year: "looking for partners",
    place: "Catalonia",
    register: "system-design",
    body: "A Komma pilot exploring how tourism revenue can support permanently affordable housing, before displacement begins. Patient capital, ongoing tourism-aligned contributions, auditable outcomes and locally accountable governance. Starting in Catalonia, looking for partners across municipalities, housing co-ops, tourism operators and ethical finance.",
    links: [
      { label: "komma.systems", href: "https://komma.systems", kind: "site" },
    ],
    cta: {
      label: "Partner inquiries",
      href: "mailto:clara@komma.systems?subject=Tourism × Housing pilot — partnership inquiry",
    },
  },
  {
    slug: "dharavi",
    title: "Ex:Risk Dharavi",
    year: 2026,
    place: "Mumbai",
    register: "art",
    body: "Participatory generative light installation, first in the Ex:Risk series, on permanence and belonging in territories at risk of dispossession. Built with Meld and Kair, and shown at Devcon 8 in Mumbai as part of the Ethereum Foundation Artist Cohort.",
    links: [
      { label: "komma.systems", href: "https://komma.systems", kind: "site" },
    ],
  },
  {
    slug: "dorg",
    title: "dOrg",
    year: "2021 to 2026",
    place: "Startup DAO",
    register: "edge-tech",
    body: "Ops team at a startup DAO. A web3-native organisational form: distributed contributors, mechanism-based coordination, no boss.",
    links: [{ label: "dorg.tech", href: "https://www.dorg.tech/", kind: "site" }],
  },
  {
    slug: "w3st",
    title: "W3ST",
    year: 2022,
    place: "Remote",
    register: "edge-tech",
    body: "Advising on architecture, co-livings and strategy.",
    links: [{ label: "w3st.xyz", href: "https://www.w3st.xyz/", kind: "site" }],
  },
  {
    slug: "communitaz",
    title: "Communitaz",
    year: 2020,
    place: "Prototype",
    register: "edge-tech",
    body: "Community housing DAO templates prototype.",
    links: [
      {
        label: "github.com/jpaulet/comunitas",
        href: "https://github.com/jpaulet/comunitas?tab=readme-ov-file",
        kind: "repo",
      },
    ],
  },
  {
    slug: "fortia",
    title: "Fortià",
    year: "ongoing",
    place: "Fortià, Catalonia",
    register: "housing-commons",
    body: "Project viability research and community incubation for a social housing co-op in stewardship model. 16 new-built homes with backyards on plots leased by the city council.",
    partners: [
      "Ajuntament de Fortià",
      "Diputació de Girona",
      "Fil a l'agulla",
      "Grupo Integral",
      "Col·lectiu Ronda",
      "Undos Arquitectura",
    ],
    links: [
      {
        label: "@coop_habitatge_fortia on Instagram",
        href: "https://www.instagram.com/coop_habitatge_fortia/",
        kind: "social",
      },
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/YUnYo0uDiysgLLt1hqGP",
        kind: "gallery",
      },
      {
        label: "Empordà — Fortià engega els motors per crear una cooperativa d'habitatges",
        href: "https://www.emporda.info/comarca/2024/04/11/fortia-engega-motors-cooperativa-habitatges-100787549.html",
        kind: "press",
      },
    ],
  },
  {
    slug: "la-cellera-de-ter",
    title: "La Cellera de Ter",
    year: "ongoing",
    place: "La Cellera de Ter, Catalonia",
    register: "housing-commons",
    body: "Project viability research and community incubation for two social housing co-ops in stewardship model, refurbishing municipal buildings. Currently advancing in one property as a three-apartment co-operative.",
    partners: [
      "Ajuntament de la Cellera de Ter",
      "Diputació de Girona",
      "Grupo Integral",
      "Col·lectiu Ronda",
      "Sostre Cívic",
      "Undos Arquitectura",
    ],
    links: [
      {
        label: "@cooperativalacellera on Instagram",
        href: "https://www.instagram.com/cooperativalacellera/",
        kind: "social",
      },
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/3HLvEAJPmBp6p52VJkCK",
        kind: "gallery",
      },
      {
        label: "3Cat Telenotícies — La Cellera de Ter impulsa dos projectes d'habitatge",
        href: "https://www.ccma.cat/3cat/la-cellera-de-ter-impulsa-dos-projectes-dhabitatge-perque-la-gent-es-quedi-a-viure-al-poble/video/6180378/",
        kind: "press",
      },
      {
        label: "Diari de Girona — La Cellera i la lluita contra el despoblament a got de vermut",
        href: "https://www.diaridegirona.cat/selva/2022/10/05/cellera-i-lluita-despoblament-got-76818023.html",
        kind: "press",
      },
      {
        label: "Diari de Girona — La Cellera compra un edifici per destinar-lo a habitatge cooperatiu",
        href: "https://www.diaridegirona.cat/comarques/2022/01/10/cellera-compra-edifici-per-destinar-61408943.html",
        kind: "press",
      },
    ],
  },
  {
    slug: "sarria-de-ter",
    title: "Sarrià de Ter",
    place: "Sarrià de Ter, Catalonia",
    register: "housing-commons",
    body: "Project viability research for an eight-apartment social housing co-op with common spaces and shared facilities, on a plot leased by the city council.",
    partners: [
      "Ajuntament de Sarrià de Ter",
      "Diputació de Girona",
      "Grupo Integral",
      "Undos Arquitectura",
    ],
  },
  {
    slug: "la-pera",
    title: "La Pera",
    place: "La Pera, Catalonia",
    register: "housing-commons",
    body: "Project viability research for a ten-apartment social housing co-op, refurbishing an abandoned rural home leased by the city council.",
    partners: [
      "Ajuntament de la Pera",
      "Diputació de Girona",
      "Grupo Integral",
      "Undos Arquitectura",
    ],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/W5o30Y9ro1y8bmPPqrop",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "sant-miquel-de-campmajor",
    title: "Sant Miquel de Campmajor",
    place: "Sant Miquel de Campmajor, Catalonia",
    register: "housing-commons",
    body: "Urban and legal policy research to help a rural council activate affordable and social housing commons in abandoned old buildings.",
    partners: [
      "Ajuntament de Sant Miquel de Campmajor",
      "Diputació de Girona",
      "Adela Geli",
      "Undos Arquitectura",
    ],
  },
  {
    slug: "emprius-fundacio",
    title: "Emprius Fundació",
    year: "ongoing",
    place: "Catalonia",
    register: "housing-commons",
    body: "Member and advisor. The foundation builds rural commons: acquiring and ceding housing to community projects, stewarding productive lands, and promoting shared tools for rural life. Its guiding principles are communalism and ruralism.",
    video: {
      label: "Introduction on YouTube",
      embed: "https://www.youtube-nocookie.com/embed/Jp5L2uKz1ks",
      href: "https://www.youtube.com/watch?v=Jp5L2uKz1ks",
    },
    links: [
      { label: "emprius.cat", href: "https://emprius.cat/", kind: "site" },
      {
        label: "Guia d'habitatge cooperatiu al món rural (guide)",
        href: "https://emprius.cat/guia-habitatge-cooperatiu/",
        kind: "press",
      },
    ],
  },
  {
    slug: "masies-x-viure",
    title: "MasiesxViure",
    place: "Catalonia",
    register: "housing-commons",
    body: "Advisor on a prototype app matching the stakeholders involved in rural housing co-op projects in Catalonia, to accelerate project development.",
    links: [
      {
        label: "masiesxviure.cat",
        href: "https://www.masiesxviure.cat/",
        kind: "site",
      },
    ],
  },
  {
    slug: "girona-house",
    title: "Girona House",
    place: "Girona, Catalonia",
    register: "regen-architecture",
    tags: ["art"],
    body: "Architecture and photography.",
    partners: ["Auquer i Prats Arquitectures"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/9GiF13QwvZuNevOJntEy",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "earth-house",
    title: "Earth House",
    place: "Catalonia",
    register: "regen-architecture",
    tags: ["art"],
    body: "Architectural photography of an earthen-walled house.",
    partners: ["Auquer i Prats Arquitectures"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/3qfBzkSZ5eRij50gpZL7",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "verges-house",
    title: "Verges House",
    year: "WIP",
    place: "Verges, Catalonia",
    register: "regen-architecture",
    body: "Single-family rural house, currently in development.",
    partners: ["Auquer i Prats Arquitectures"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/mylsjOmQBbMpaUmoefaP",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "foixa-guest-house",
    title: "Foixà Guest House",
    year: "unbuilt",
    place: "Foixà, Catalonia",
    register: "regen-architecture",
    body: "Guest house project, unbuilt.",
    partners: ["Auquer i Prats Arquitectures"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/dPTfExY8U3XS7v1qfnqV",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "pirineu-house",
    title: "Pirineu House",
    year: "WIP",
    place: "Pyrenees, Catalonia",
    register: "regen-architecture",
    body: "House in the Pyrenees, currently in development.",
    partners: ["Auquer i Prats Arquitectures"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/ygExqqy1xDgW9ayq64Pz",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "garrigoles-house",
    title: "Garrigoles House",
    year: "WIP",
    place: "Garrigoles, Catalonia",
    register: "regen-architecture",
    body: "House currently in development.",
    partners: ["Auquer i Prats Arquitectures"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/xJmbIs0zO7kfzuOYcjek",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "elders-residency",
    title: "Elders residency in a rural public centre",
    year: "unbuilt",
    place: "Catalonia",
    register: "regen-architecture",
    body: "Unbuilt project for a rural public elders residency.",
    partners: ["Carolina Mejía"],
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/Pb5yI6TBhMWEOMNMMiZM",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "barragan-studio",
    title: "Barragán Studio",
    place: "Mexico City",
    register: "regen-architecture",
    tags: ["art"],
    body: "Architectural photography of Luis Barragán's studio.",
    links: [
      {
        label: "Gallery",
        href: "https://indify.co/widgets/live/gallery/uMutRAMCAbCpSJJlX8Wj",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "entropy-india",
    title: "Entropy and urban landscape in India",
    year: 2019,
    place: "India, exhibited in Catalonia",
    register: "art",
    tags: ["regen-architecture"],
    body: "Architectural and urban-landscape photography from India, commissioned for L'Àlbum de l'arquitecte and exhibited at the Col·legi d'Arquitectes de Catalunya in Girona, Figueres and Olot.",
    links: [
      {
        label: "panorama.pm",
        href: "https://panorama.pm/project/entropy-and-urban-landscape-in-india/",
        kind: "gallery",
      },
    ],
  },
  {
    slug: "lluernia",
    title: "Lluèrnia",
    year: 2023,
    place: "Olot, Catalonia",
    register: "art",
    body: "Commissioned light work for Lluèrnia, Olot's festival of fire and light, shown as part of a collective presentation.",
  },
  {
    slug: "rural-housing-consultancy",
    title: "Rural co-op viability consultancies",
    year: "ongoing",
    place: "Catalonia",
    register: "housing-commons",
    heroOnly: true,
    body: "Project-viability and policy research helping rural councils activate social housing co-ops on municipal land and buildings, with Grupo Integral and Undos Arquitectura. A single engagement across several municipalities.",
    links: [
      {
        label: "Sant Miquel de Campmajor",
        href: "/work/sant-miquel-de-campmajor",
        kind: "site",
      },
      { label: "Sarrià de Ter", href: "/work/sarria-de-ter", kind: "site" },
      { label: "La Pera", href: "/work/la-pera", kind: "site" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const HERO_ORDER: string[] = [
  // Regenerative architecture
  "earth-house",
  "girona-house",
  "verges-house",
  // Art
  "dharavi",
  "entropy-india",
  "lluernia",
  // Housing commons
  "fortia",
  "la-cellera-de-ter",
  "rural-housing-consultancy",
  "emprius-fundacio",
  // Edge technologies
  "w3st",
  "communitaz",
  // System design
  "network-sovereignties",
  "tourism-housing",
  "exclosure",
];

export function getHeroProjects(): Project[] {
  return HERO_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is Project => Boolean(p),
  );
}

export function getArchiveProjects(): Project[] {
  const heroSet = new Set(HERO_ORDER);
  return projects.filter((p) => !heroSet.has(p.slug));
}
