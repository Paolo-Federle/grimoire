import { createServer } from "vite";

const API_URL = "https://whitewolf.fandom.com/api.php";
const existingCodes = new Set(["WoD", "VtR", "WtF", "M:tA", "PTC", "CtL", "HTV", "GTS", "MTC"]);
const manifestOnly = process.argv.includes("--manifest");
const outlineOnly = process.argv.includes("--outline");
const allowPartial = process.argv.includes("--allow-partial");
const requestedCodesArgument = process.argv.find((argument) => argument.startsWith("--codes="));
const requestedCodes = new Set(
  (requestedCodesArgument?.slice("--codes=".length) || "").split(",").filter(Boolean)
);

function normalizeTitle(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function withoutLeadingArticle(value) {
  return value.replace(/^the\s+/, "");
}

function getTitleScore(book, wikiTitle) {
  const local = withoutLeadingArticle(normalizeTitle(book.Name));
  let wiki = normalizeTitle(wikiTitle)
    .replace(/\b(rulebook|sourcebook|book)\b$/u, "")
    .trim();

  const expectedPrefixes = {
    general: ["world of darkness"],
    vampire: ["vampire the requiem"],
    werewolf: ["werewolf the forsaken"],
    mage: ["mage the awakening"],
    promethean: ["promethean the created"],
    changeling: ["changeling the lost"],
    hunter: ["hunter the vigil"],
    geist: ["geist the sin eaters"],
    mummy: ["mummy the curse"],
  };
  for (const prefix of expectedPrefixes[book.gameLine] || []) {
    if (wiki.startsWith(`${prefix} `)) wiki = wiki.slice(prefix.length).trim();
  }

  wiki = withoutLeadingArticle(wiki);
  if (local === wiki) return 100;
  if (
    book["Code Name"] === "BoS" &&
    wiki === normalizeTitle("Axis Mundi: The Book of Spirits")
  ) {
    return 95;
  }
  return 0;
}

function stripWikiMarkup(value) {
  return String(value || "")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<ref\b[^>]*>[\s\S]*?<\/ref>/gi, " ")
    .replace(/<ref\b[^/>]*\/>/gi, " ")
    .replace(/\{\{[^{}]*\}\}/g, " ")
    .replace(/\{\{[^{}]*\}\}/g, " ")
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[https?:\/\/[^\s\]]+\s+([^\]]+)\]/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^[:*#;]+\s*/gm, "")
    .replace(/'{2,}/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseChapterSection(wikitext) {
  const sectionMatch = /==\s*(chapters|contents)\s*==\s*([\s\S]*?)(?=\n==[^=]|\s*$)/i.exec(
    wikitext
  );
  if (!sectionMatch) return [];

  const section = sectionMatch[2];
  const headingPattern = /^(={3,5})\s*(.*?)\s*\1\s*$/gm;
  const headings = [...section.matchAll(headingPattern)];

  return headings
    .map((match, index) => {
      const start = match.index + match[0].length;
      const end = headings[index + 1]?.index ?? section.length;
      return {
        title: stripWikiMarkup(match[2]),
        summary: stripWikiMarkup(section.slice(start, end)),
      };
    })
    .filter(
      (chapter) =>
        /^(chapter|appendix|book\s+(one|two|\d+)|part\s+(one|two|\d+))/i.test(chapter.title) &&
        chapter.summary.length >= 24
    );
}

function hasExpectedBookCategory(book, wikitext) {
  const expectedCategories = {
    general: ["Chronicles of Darkness books"],
    vampire: ["Vampire: The Requiem books"],
    werewolf: ["Werewolf: The Forsaken books"],
    mage: ["Mage: The Awakening books"],
    promethean: ["Promethean: The Created books"],
    changeling: ["Changeling: The Lost books"],
    hunter: ["Hunter: The Vigil books"],
    geist: ["Geist: The Sin-Eaters books"],
    mummy: ["Mummy: The Curse books"],
  };

  return (expectedCategories[book.gameLine] || []).some((category) =>
    wikitext.includes(`[[Category:${category}`)
  );
}

async function getJson(parameters) {
  const url = new URL(API_URL);
  Object.entries({ ...parameters, format: "json", origin: "*" }).forEach(([key, value]) =>
    url.searchParams.set(key, value)
  );
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function findWikiPage(book) {
  const search = await getJson({
    action: "query",
    list: "search",
    srsearch: `"${book.Name}"`,
    srnamespace: "0",
    srlimit: "10",
  });
  const candidates = (search.query?.search || [])
    .map((result) => ({ ...result, score: getTitleScore(book, result.title) }))
    .filter((result) => result.score >= 80)
    .sort((left, right) => right.score - left.score);

  for (const candidate of candidates.slice(0, 3)) {
    const parsed = await getJson({
      action: "parse",
      pageid: String(candidate.pageid),
      prop: "sections|wikitext",
    });
    const wikitext = parsed.parse?.wikitext?.["*"] || "";
    if (!/\{\{Book\b/i.test(wikitext)) continue;
    if (!hasExpectedBookCategory(book, wikitext)) continue;

    const chapters = parseChapterSection(wikitext);
    if (chapters.length < (allowPartial ? 1 : 2)) continue;

    const pages = Number(/\|\s*pages\s*=\s*(\d+)/i.exec(wikitext)?.[1]) || null;
    return {
      code: book["Code Name"],
      name: book.Name,
      gameLine: book.gameLine,
      wikiTitle: parsed.parse.title,
      sourceUrl: `https://whitewolf.fandom.com/wiki/${encodeURIComponent(
        parsed.parse.title.replace(/ /g, "_")
      )}`,
      pages,
      chapters,
    };
  }

  return null;
}

const server = await createServer({
  root: process.cwd(),
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { bookCatalog } = await server.ssrLoadModule("/src/books/bookNavigation.js");
  const books = bookCatalog.filter(
    (book) =>
      book["Code Name"] &&
      !existingCodes.has(book["Code Name"]) &&
      (!requestedCodes.size || requestedCodes.has(book["Code Name"]))
  );
  const verified = [];

  for (const [index, book] of books.entries()) {
    process.stderr.write(`[${index + 1}/${books.length}] ${book.Name}\n`);
    try {
      const match = await findWikiPage(book);
      if (match) verified.push(match);
    } catch (error) {
      process.stderr.write(`  skipped: ${error.message}\n`);
    }
  }

  const output = outlineOnly
    ? verified.map(({ code, name, sourceUrl, pages, chapters }) => ({
        code,
        name,
        sourceUrl,
        pages,
        chapters: chapters.map(({ title, summary }) => ({
          title,
          summary: summary.split(/(?<=[.!?])\s+/u)[0],
        })),
      }))
    : manifestOnly
    ? verified.map(({ code, name, gameLine, wikiTitle, pages, chapters }) => ({
        code,
        name,
        gameLine,
        wikiTitle,
        pages,
        chapterCount: chapters.length,
      }))
    : verified;
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
} finally {
  await server.close();
}
