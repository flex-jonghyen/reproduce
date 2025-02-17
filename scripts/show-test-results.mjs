import path from "node:path";
import { fs } from "zx";

const code = await fs.readFile(
  path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "../packages/b/src/index.ts"
  )
);

const expected = `declare const b = "b";

export { b };
`;

const actual = await fs.readFile(
  path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "../packages/b/dist/index.d.ts"
  )
);

console.log({
  code: code.toString().trim(),
  expected: expected.trim(),
  actual: actual.toString().trim(),
  pass: expected.trim() === actual.toString().trim(),
});
