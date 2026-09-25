export type ParsedRole = {
  /** Short code such as "CTO", or null when the role has no "CODE (Title)" form. */
  code: string | null;
  title: string;
};

/**
 * The CMS stores roles as "CTO (Chief Technology Officer)".
 * Splits that into a badge code and a readable title; other formats are kept as-is.
 */
export function parseRole(role: string): ParsedRole {
  const match = role.trim().match(/^([A-Za-z0-9&.\-]{2,8})\s*\((.+)\)$/);
  if (!match) return { code: null, title: role.trim() };
  return { code: match[1].toUpperCase(), title: match[2].trim() };
}

/** "CTO · Chief Technology Officer", or just the title. */
export function formatRoleLabel({ code, title }: ParsedRole): string {
  return code ? `${code} · ${title}` : title;
}
