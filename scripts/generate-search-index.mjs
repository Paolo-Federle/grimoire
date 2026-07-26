import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const outputDirectory = resolve(root, "public");
const outputFile = resolve(outputDirectory, "search-index.json");

const server = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { buildSearchIndex } = await server.ssrLoadModule("/src/search/buildSearchIndex.js");
  const index = buildSearchIndex();

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(outputFile, JSON.stringify(index), "utf8");
  process.stdout.write(`Generated ${index.length} search entries.\n`);
} finally {
  await server.close();
}
