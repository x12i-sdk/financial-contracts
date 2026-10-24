# @x12i/financial-contracts usage example

Canonical schemas, enums, and runtime validation for the financial reporting engine.

This consuming application demonstrates **validate incoming json and report contract errors** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Canonical schemas, enums, and runtime validation for the financial reporting engine.
- A producer and consumer of financial data need to share the published type or validation contract before exchanging payloads.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/financial-contracts)
- [Implementation monorepo](https://github.com/x12i/finanfix)
- [Reviewed package source](https://github.com/x12i/finanfix/tree/8630e4c4f201deb35cd10c3790c9d5abdbce4633/packages/contracts)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
