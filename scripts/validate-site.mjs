import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../public/", import.meta.url).pathname;
const required = [
  "index.html",
  "postgresql/index.html",
  "database-optimization/index.html",
  "database-optimization-audit/index.html",
  "query-optimization/index.html",
  "tools/index.html",
  "mysql/index.html",
  "sql-server/index.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "favicon.svg",
  "assets/styles.css"
];

for (const path of required) {
  const full = join(root, path);
  if (!statSync(full, { throwIfNoEntry: false })) {
    throw new Error(`Missing ${path}`);
  }
}

const htmlFiles = [];
function walk(dir) {
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full);
    if (item.endsWith(".html")) htmlFiles.push(full);
  }
}
walk(root);

for (const file of htmlFiles) {
  const source = readFileSync(file, "utf8");
  for (const token of ["<title>", "meta name=\"description\"", "canonical", "<h1"]) {
    if (!source.includes(token)) throw new Error(`${file} missing ${token}`);
  }
}

console.log(`Validated ${htmlFiles.length} HTML pages.`);
