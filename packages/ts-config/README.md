<div align="center">

# @repeaterts/ts-config

**Typescript Linting for RepeaterTS**
[![GitHub](https://img.shields.io/github/license/RepeaterTS/utilities)](https://github.com/RepeaterTS/utilities/blob/master/LICENSE)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/RepeaterTS/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/RepeaterTS/utilities/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/RepeaterTS/utilities.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/RepeaterTS/utilities/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/RepeaterTS/utilities/badge.svg?branch=master)](https://coveralls.io/github/RepeaterTS/utilities?branch=master)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@repeaterts/ts-config?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@repeaterts/ts-config)
[![npm](https://img.shields.io/npm/v/@repeaterts/ts-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@repeaterts/ts-config)
[![Depfu](https://badges.depfu.com/badges/2e8e81048dc864df5ec92b047f57ef94/count.svg)](https://depfu.com/github/RepeaterTS/utilities?project_id=21650)

</div>
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
