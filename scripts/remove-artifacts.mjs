import { $ } from "zx";

$`rm -rf packages/b/.turbo/cache`;
$`rm -rf packages/b/dist`;

$`rm -rf packages/a/.turbo/cache`;
$`rm -rf packages/a/dist`;
