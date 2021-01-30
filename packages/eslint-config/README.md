<div align="center">

# @repeaterts/eslint-config

**ESLint for RepeaterTS**
[![GitHub](https://img.shields.io/github/license/RepeaterTS/utilities)](https://github.com/RepeaterTS/utilities/blob/master/LICENSE)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/RepeaterTS/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/RepeaterTS/utilities/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/RepeaterTS/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/RepeaterTS/utilities/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/RepeaterTS/utilities/badge.svg?branch=master)](https://coveralls.io/github/RepeaterTS/utilities?branch=master)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@repeaterts/eslint-config?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@repeaterts/eslint-config)
[![npm](https://img.shields.io/npm/v/@repeaterts/eslint-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@repeaterts/eslint-config)
[![Depfu](https://badges.depfu.com/badges/2e8e81048dc864df5ec92b047f57ef94/count.svg)](https://depfu.com/github/RepeaterTS/utilities?project_id=21650)

</div>

## Installation

**Peer Dependencies**
```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint prettier typescript
```

**Then me**
```sh
yarn add -D @repeaterts/eslint-config
```

---

## Usage

Add the ESLint config to your `package.json`:

```json
{
	"name": "my-project",
	"eslintConfig": {
		"extends": "@repeaterts"
	}
}
```

Or to `eslintrc.js` / `.eslintrc.json`:

```json
{
	"extends": "@repeaterts"
}
```

Create `tsconfig.eslint.json` next to the eslint config file, for example with content:

```json
{
	"extends": "./tsconfig.json",
	"include": ["src", "test"]
}
```