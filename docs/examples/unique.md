# `unique` 创建唯一值

## `Framework`
::: code-group

```js  [ESModule]
import { unique } from 'wgl-utils/es/index.js';
// import unique from 'wgl-utils/es/unique.js';
console.log(unique());
```

```js  [UMD]
import utils from 'wgl-utils';
console.log(utils.unique());
```

:::

## `Browser`
::: code-group

```html  [ESModule]
<script type="module">
  import { unique } from 'wgl-utils/es/index.js';
  // import unique from 'wgl-utils/es/unique.js';
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


##  `unique.js` 源码
::: code-group

```js  [src/unique.js]
<!-- @include: ../../src/unique.js -->
```

```js  [dist/es/unique.js]
<!-- @include: ../../dist/es/unique.js -->
```
:::
