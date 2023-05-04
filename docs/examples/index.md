## Framework
::: code-group
```js  [ESModule]
import { unique, ... } from 'wgl-utils';
unique();
```
```js  [CommonJs]
const Wgl = require('wgl-utils/umd');
Wgl.unique();
```
:::

## Browser
::: code-group
```html  [ESModule]
<script type="module">
  import { unique } from 'wgl-utils/main.mjs';
  unique();
</script>
```
```html  [UMD]
<script src="wgl-utils/main.js"></script>
<script>
  Wgl.unique()
</script>
```
:::


## Code
::: code-group

```js  [源码]
// src/index.js
<!-- @include: ../../src/index.js -->
```

```js  [ESModule]
// dist/main.mjs
<!-- @include: ../../dist/main.mjs -->
```

```js  [UMD]
// dist/main.js
<!-- @include: ../../dist/main.js -->
```
:::