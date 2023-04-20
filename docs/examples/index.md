## Framework
::: code-group
```js  [ESModule]
import { unique, ... } from 'wgl-utils/es/index.js';
console.log(unique());
```
```js  [UMD]
import utils from 'wgl-utils';
console.log(utils.unique());
```
:::

## Browser
::: code-group
```html  [ESModule]
<script type="module">
  import { unique } from 'wgl-utils/es/index.js';
  console.log(unique());
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  console.log(utils.unique())
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  console.log(utils.unique())
</script>
```
:::



##  `index.js` 源码
::: code-group

```js  [src/index.js]
<!-- @include: ../../src/index.js -->
```

```js  [dist/es/index.js]
<!-- @include: ../../dist/es/index.js -->
```

```js  [dist/libs/index.umd.js]
<!-- @include: ../../dist/libs/index.umd.js -->
```

```js  [dist/libs/index.min.js]
<!-- @include: ../../dist/libs/index.min.js -->
```
:::