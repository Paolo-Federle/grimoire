import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Check inline Markdown links and ATX heading anchors used by the project guides.
// Code fences and external URLs are intentionally excluded; no network is used.
function collectMarkdown(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return collectMarkdown(path);
    return entry.isFile() && entry.name.endsWith(".md") ? [path] : [];
  });
}

const documents = [
  ...readdirSync(root).filter((name) => name.endsWith(".md")).map((name) => resolve(root, name)),
  ...["docs", "src", "tests", "scripts"].flatMap((name) => collectMarkdown(resolve(root, name))),
].sort();

function withoutCodeFences(source) {
  let fence = null;

  return source.split(/\r?\n/).map((line) => {
    const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];
    if (marker && !fence) {
      fence = marker;
      return "";
    }
    if (marker && marker[0] === fence?.[0] && marker.length >= fence.length) {
      fence = null;
      return "";
    }
    return fence ? "" : line;
  }).join("\n");
}

const bodyCache = new Map();
const anchorCache = new Map();
const bodyFor = (path) => {
  if (!bodyCache.has(path)) bodyCache.set(path, withoutCodeFences(readFileSync(path, "utf8")));
  return bodyCache.get(path);
};

function anchorsFor(path) {
  if (anchorCache.has(path)) return anchorCache.get(path);

  const anchors = new Set();
  for (const [, heading] of bodyFor(path).matchAll(/^ {0,3}#{1,6}\s+(.+?)\s*#*\s*$/gm)) {
    const base = heading
      .replace(/!?\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/<[^>]*>/g, "")
      .replace(/`/g, "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\p{M}_\-\s]/gu, "")
      .replace(/\s/g, "-");
    let anchor = base;
    let duplicate = 0;
    while (anchors.has(anchor)) anchor = `${base}-${++duplicate}`;
    anchors.add(anchor);
  }
  anchorCache.set(path, anchors);
  return anchors;
}

const errors = [];
let checkedLinks = 0;

for (const document of documents) {
  const body = bodyFor(document);
  for (const match of body.matchAll(/!?\[[^\]\n]*\]\(\s*(<[^>\n]+>|[^)\n]+)\s*\)/g)) {
    const raw = match[1].trim();
    const target = raw.startsWith("<") ? raw.slice(1, -1) : raw.split(/\s+["']/)[0];
    const line = body.slice(0, match.index).split("\n").length;
    const label = `${relative(root, document).split(sep).join("/")}:${line}`;
    const report = (reason) => errors.push(`${label}: ${reason} (${target})`);

    if (/^(?:[a-z]:[\\/]|file:)/i.test(target) || (target.startsWith("/") && !target.startsWith("//"))) {
      report("use a portable relative path for local documentation links");
      continue;
    }
    if (/^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith("//")) continue;

    checkedLinks++;
    try {
      const separator = target.indexOf("#");
      const file = decodeURIComponent(separator < 0 ? target : target.slice(0, separator));
      const fragment = separator < 0 ? "" : decodeURIComponent(target.slice(separator + 1));
      const destination = file ? resolve(dirname(document), file) : document;
      const fromRoot = relative(root, destination);

      if (fromRoot === ".." || fromRoot.startsWith(`..${sep}`) || isAbsolute(fromRoot)) {
        report("local link points outside the repository");
      } else if (!existsSync(destination)) {
        report("local target does not exist");
      } else if (fragment && destination.endsWith(".md") && !anchorsFor(destination).has(fragment)) {
        report("Markdown heading anchor does not exist");
      }
    } catch (error) {
      report(`cannot validate link: ${error.message}`);
    }
  }
}

if (errors.length) {
  process.stderr.write(`${errors.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`Checked ${documents.length} Markdown files and ${checkedLinks} local links.\n`);
}
