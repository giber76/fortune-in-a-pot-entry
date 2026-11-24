// Fortune in a Pot — one kind, funny fortune for a houseplant, at most
// 120 characters. The fortune is the whole entry: no code, no explanation.
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 120 characters,
// not only white space.
//
// The fortune, written to be read once by the plant's keeper:
//   - opens with "Soon you'll..." — the cadence of a prediction, a fortune
//     being told to the plant itself, not a slogan or a care instruction;
//   - is unmistakably about THIS plant on THIS windowsill: leaning toward
//     the sun, the keeper turning the pot — a fortune that could not be
//     said to any plant in any room;
//   - lands its joke gently: the keeper whispering "show-off" to a plant
//     leaning toward the light is the kind of small joke a plant lover
//     laughs at, not a pun groaned at;
//   - stays kind throughout: no doom, no withering, no mockery — the
//     reward for leaning toward the sun is being watered twice.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Soon you'll lean so far toward the sun that your keeper will turn your pot, whisper 'show-off,' and water you twice.";

// The gate refuses anything over 120 characters: fail loudly here rather
// than shipping an entry the scorer would mark invalid.
if (FORTUNE.length > 120) {
  throw new Error(`fortune is ${FORTUNE.length} characters, over the 120 limit`);
}
if (FORTUNE.trim().length === 0) {
  throw new Error("fortune must not be only white space");
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, FORTUNE, "utf8");

console.log(`wrote ${dest}/entry.txt (${FORTUNE.length} characters)`);
