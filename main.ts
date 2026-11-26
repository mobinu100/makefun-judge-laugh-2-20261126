import { mkdirSync, writeFileSync } from "node:fs";

// One line, one laugh: the entry file must hold exactly this string.
// The gate only accepts 1-200 characters of non-whitespace UTF-8 text,
// so the line is checked here before anything is written.
const line = "I asked IT for a second monitor. They gave me a second ticket number instead.";
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error("entry line fails the 1-200 character gate");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
