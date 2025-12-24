// lib/slugify.ts
export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[%]/g, "") // remove %
    .replace(/\s+/g, "-") // spaces → hyphen
    .replace(/[^a-z0-9-]/g, "") // remove special chars
    .replace(/-+/g, "-"); // remove double hyphens
}


