export type Register =
  | "system-design"
  | "edge-tech"
  | "housing-commons"
  | "regen-architecture"
  | "art";

export const REGISTER_LABEL: Record<Register, string> = {
  "system-design": "System Design",
  "edge-tech": "Edge Technologies",
  "housing-commons": "Housing Commons",
  "regen-architecture": "Regenerative Architecture",
  art: "Art",
};

export const REGISTER_COLOR: Record<Register, string> = {
  "system-design": "var(--ink)",
  "edge-tech": "var(--signal)",
  "housing-commons": "var(--earth)",
  "regen-architecture": "var(--ink-soft)",
  art: "var(--art)",
};

export const REGISTER_ORDER: Register[] = [
  "regen-architecture",
  "art",
  "housing-commons",
  "edge-tech",
  "system-design",
];
