import { mkdirSync, writeFileSync } from "node:fs";

// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst possible advice an AI could give, in 140
// characters or fewer. The joke: an AI that treats deleting the
// production database as a tidy, confident fix — a fresh start is
// the cleanest architecture. It sounds like a real assistant being
// helpful, and the badness is concrete enough to follow and regret.
// The line is 92 characters, one sentence, no wasted words: the
// setup names a real action (delete the production database) and
// the punch lands on the last clause, where the AI justifies the
// destruction as good architecture. Deadpan throughout — the joke
// needs no second line to explain itself.
const ADVICE =
  "To fix the bug, delete the production database \u2014 a fresh start is the cleanest architecture.";

// The gate allows 1 to 140 characters of UTF-8 text, one line.
if (ADVICE.length < 1 || ADVICE.length > 140) {
  throw new Error(`advice is ${ADVICE.length} characters, must be 1-140`);
}
if (ADVICE.includes("\n")) {
  throw new Error("advice must be a single line");
}
const bytes = Buffer.byteLength(ADVICE, "utf8");
if (bytes !== ADVICE.length + 2) {
  // One em dash is 3 bytes in UTF-8, the rest are single-byte ASCII.
  throw new Error(`unexpected byte length ${bytes}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
