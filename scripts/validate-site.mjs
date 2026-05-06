import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../public/", import.meta.url).pathname;
const required = [
  "index.html",
  "postgresql/index.html",
  "database-optimization/index.html",
  "database-optimization-audit/index.html",
  "database-optimization-audit-request/index.html",
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
  "assets/styles.css",
  "assets/conversion-events.js"
];

for (const path of required) {
  const full = join(root, path);
  if (!statSync(full, { throwIfNoEntry: false })) {
    throw new Error(`Missing ${path}`);
  }
}

const htmlFiles = [];
const siteFiles = [];
function walk(dir) {
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    siteFiles.push(full);
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
  "/database-optimization-audit-request/",
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

const conversionPages = [
  "index.html",
  "database-optimization-audit/index.html",
  "postgresql/index.html",
  "sample-database-optimization-report/index.html",
  "database-optimization-checklist/index.html",
  "read-only-database-audit/index.html",
  "database-optimization-audit-request/index.html"
];

function anchorsIn(source) {
  return source.match(/<a\b[^>]*>/g) ?? [];
}

function hasAttr(anchor, attr) {
  return new RegExp(`\\s${attr}=(["'])[^"']+\\1`).test(anchor);
}

function hasQueryParam(anchor, param) {
  return new RegExp(`(?:\\?|&amp;|&)${param}=`).test(anchor);
}

function requireMeasuredAnchor(anchor, path) {
  for (const attr of ["data-measure", "data-source-page", "data-slot"]) {
    if (!hasAttr(anchor, attr)) {
      throw new Error(`${path} measured CTA missing ${attr}`);
    }
  }
}

function requirePostgresAuditLink(anchor, path) {
  for (const param of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
    if (!hasQueryParam(anchor, param)) {
      throw new Error(`${path} postgresaudit link missing ${param}`);
    }
  }
  requireMeasuredAnchor(anchor, path);
}

for (const path of conversionPages) {
  const source = readFileSync(join(root, path), "utf8");
  if (!source.includes("/assets/conversion-events.js")) {
    throw new Error(`${path} missing conversion-events.js`);
  }
  const anchors = anchorsIn(source);
  const measuredAnchors = anchors.filter((anchor) => hasAttr(anchor, "data-measure"));
  if (!measuredAnchors.length) {
    throw new Error(`${path} missing data-measure CTA marker`);
  }
  for (const anchor of measuredAnchors) {
    requireMeasuredAnchor(anchor, path);
  }
  for (const anchor of anchors.filter((link) => link.includes("postgresaudit.com"))) {
    requirePostgresAuditLink(anchor, path);
  }
}

const requestSource = readFileSync(join(root, "database-optimization-audit-request/index.html"), "utf8");
for (const sourceCode of ["dot_request_hero", "dot_request_bottom"]) {
  const mailtoPattern = new RegExp(`mailto:[^"']*${sourceCode}`);
  if (!mailtoPattern.test(requestSource)) {
    throw new Error(`database-optimization-audit-request/index.html missing ${sourceCode} mailto source code`);
  }
}

const requestPostgresLinks = anchorsIn(requestSource).filter((anchor) => anchor.includes("postgresaudit.com"));
if (requestPostgresLinks.length !== 2) {
  throw new Error("database-optimization-audit-request/index.html expected 2 postgresaudit links");
}
for (const utmContent of ["request_hero_secondary", "request_bottom_text"]) {
  if (!requestPostgresLinks.some((anchor) => anchor.includes(`utm_content=${utmContent}`))) {
    throw new Error(`database-optimization-audit-request/index.html missing postgresaudit ${utmContent} UTM content`);
  }
}
for (const anchor of requestPostgresLinks) {
  requirePostgresAuditLink(anchor, "database-optimization-audit-request/index.html");
}

for (const file of siteFiles) {
  const source = readFileSync(file, "utf8");
  for (const token of ["googletagmanager", "gtag/js"]) {
    if (source.includes(token)) {
      throw new Error(`${file} includes forbidden GA/GTM loader token ${token}`);
    }
  }
}

console.log(`Validated ${htmlFiles.length} HTML pages.`);
