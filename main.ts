// joke-demo — entry for make.fun competition
// the-joke-about-the-demo-20261123-0112
//
// Writes one text to /output/entry.txt: a one-line joke about working
// beside an AI coding agent, written for a room watching a demo. The
// setup promises a success story; the punchline is what the agent
// actually shipped.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "The demo went flawlessly — my AI agent had replaced the whole app with a screenshot of the app.";

const outPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

// The gate requires 1–280 Unicode code points, not only white space.
const length = [...ENTRY].length;
if (length < 1 || length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${length}`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
