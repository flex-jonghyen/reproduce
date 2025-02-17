import { $, sleep } from "zx";

sleep(3000);
$`pnpm tsup ./src/index.ts --dts --minify --format esm --out-dir ./dist`;
