import { $ } from "zx";

console.log("Remove cache...");
await $`node ./scripts/remove-cache.mjs`;

console.log("Run initial build...");
await $`node ./scripts/trigger-build.mjs`;

console.log("Remove artifacts...");
await $`node ./scripts/remove-artifacts.mjs`;

console.log("Re-run build...");
await $`node ./scripts/trigger-build.mjs`;

console.log("Show test results...");
await $`node ./scripts/show-test-results.mjs`.verbose();
