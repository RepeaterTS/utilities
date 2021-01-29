# @repeaterts/ts-config

**A shareable typescript configuration for all @RepeaterTS projects.**

## Installation

**First install the Peer Dependencies**

```sh
yarn add -D typescript
```

**Then install `@repeaterts/ts-config`**

```sh
yarn add -D @repeaterts/ts-config
```

---

## Usage

You can use `@repeaterts/ts-config`'s
[`tsconfig.json`](/tsconfig.json) by extending it in yours:

```json
{
	"extends": "@repeaterts/ts-config"
}
```

All of its properties are defaulted for bleeding-edge TypeScript options, you may extend this to include your own
configuration options as well.
