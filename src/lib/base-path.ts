// When the site is served from a subpath (e.g. GitHub Pages at /esamesa), Next
// prefixes its own assets automatically, but plain <img>/fetch URLs are not.
// Use `asset()` for anything in /public so it works both at the root (local /
// custom domain) and under a project subpath.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
