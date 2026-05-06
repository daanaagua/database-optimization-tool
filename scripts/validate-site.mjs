import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../public/", import.meta.url).pathname;
const required = [
  "index.html",
  "postgresql/index.html",
  "database-optimization/index.html",
  "database-optimization-audit/index.html",
  "sample-database-optimization-report/index.html",
  "read-only-database-audit/index.html",
  "database-optimization-checklist/index.html",
  "how-it-works/index.html",
  "faq/index.html",
  "database-performance-audit/index.html",
  "sql-performance-tuning/index.html",
  "index-optimization/index.html",
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

const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
const llms = readFileSync(join(root, "llms.txt"), "utf8");
for (const path of [
  "/sample-database-optimization-report/",
  "/read-only-database-audit/",
  "/database-optimization-checklist/",
  "/how-it-works/",
  "/faq/",
  "/database-performance-audit/",
  "/sql-performance-tuning/",
  "/index-optimization/"
]) {
  const url = `https://databaseoptimizationtool.com${path}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) throw new Error(`sitemap.xml missing ${url}`);
  if (!llms.includes(url)) throw new Error(`llms.txt missing ${url}`);
}

console.log(`Validated ${htmlFiles.length} HTML pages.`);
