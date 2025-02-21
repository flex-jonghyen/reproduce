# In my case

```
$ yarn dev
```

In my case, I ran storybook to dev. It has resolve error, like this.

```
Module build failed: Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/grapgrap/workspace/reproduce/.yarn/cache/react-docgen-npm-7.1.1-0530992ae8-961e69487f.zip/node_modules/react-docgen/dist/config.js' imported from /Users/grapgrap/workspace/reproduce/.yarn/cache/react-docgen-npm-7.1.1-0530992ae8-961e69487f.zip/node_modules/react-docgen/dist/main.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:932:10)
    at defaultResolve (node:internal/modules/esm/resolve:1056:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:654:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:603:25)
    at ModuleLoader.getModuleJobForRequire (node:internal/modules/esm/loader:353:53)
    at new ModuleJobSync (node:internal/modules/esm/module_job:341:34)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:326:11)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1414:24)
    at Module._compile (node:internal/modules/cjs/loader:1547:5)
```

# Tiny reproduce

```
$ yarn node ./scripts/resolve-test.cjs
```

`react-docgen` is `type: "module"` and has `main` fields. But it does not have `exports` field.

Run this script, You can get a error like this.

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/grapgrap/workspace/reproduce/.yarn/cache/react-docgen-npm-7.1.1-0530992ae8-961e69487f.zip/node_modules/react-docgen/dist/config.js' imported from /Users/grapgrap/workspace/reproduce/.yarn/cache/react-docgen-npm-7.1.1-0530992ae8-961e69487f.zip/node_modules/react-docgen/dist/main.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:932:10)
    at defaultResolve (node:internal/modules/esm/resolve:1056:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:654:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:603:25)
    at ModuleLoader.getModuleJobForRequire (node:internal/modules/esm/loader:353:53)
    at new ModuleJobSync (node:internal/modules/esm/module_job:341:34)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:326:11)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1414:24)
    at Module._compile (node:internal/modules/cjs/loader:1547:5) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/grapgrap/workspace/reproduce/.yarn/cache/react-docgen-npm-7.1.1-0530992ae8-961e69487f.zip/node_modules/react-docgen/dist/config.js'
}
```

This error is same with `yarn dev` error.
