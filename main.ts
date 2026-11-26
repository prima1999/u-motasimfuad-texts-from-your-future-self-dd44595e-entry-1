// Texts From Your Future Self — one funny text from your future self in 2041.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey, it's you from 2041. The sourdough starter you named Gerald finally died — he outlived three phones and one situationship. I buried him by the basil. You're welcome for the closure.";

mkdirSync("/output", { recursive: true }); // the grader provides an empty /output dir
writeFileSync("/output/entry.txt", LINE, "utf8");
