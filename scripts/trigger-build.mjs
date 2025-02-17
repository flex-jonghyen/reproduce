import path from "node:path";
import { $, sleep, within } from "zx";

const build = async () => {
  await $`turbo run build --no-daemon --cache=remote:,local:rw`;
};

const changefile = async () => {
  await sleep(2000);
  await within(() => {
    console.log('Change file "b/index.ts"...');

    $.cwd = path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      "../packages/b/src"
    );
    return $`echo 'export const b = "c";' > index.ts`;
  });
};

const rollbackfile = async () => {
  return within(() => {
    console.log('Rollback file "b/index.ts"...');

    $.cwd = path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      "../packages/b/src"
    );

    return $`echo 'export const b = "b";' > index.ts`;
  });
};

(async () => {
  await Promise.all([build(), changefile()]);
  await rollbackfile();
})();
