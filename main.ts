import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The map called it a shortcut, so I believed it. Now you're at a cul-de-sac wedding and I'm the plus-one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
