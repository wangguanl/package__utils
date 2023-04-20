# `deepCopy` 深拷贝: Object

## 示例
```js
const obj = {
  a: 1,
  b: 2,
  c: [3, 4, {a: 1, b: 2}]
}
const copyObj = deepCopy(obj);
```

## `Framework`
::: code-group

```js  [ESModule]
import { deepCopy } from 'wgl-utils/es/index.js';
// import deepCopy from 'wgl-utils/es/deepCopy.js';
```

```js  [UMD]
import utils from 'wgl-utils';
const copyObj = utils.deepCopy(obj);
```

:::

## `Browser`
::: code-group

```html  [ESModule]
<script type="module">
  import { deepCopy } from 'wgl-utils/es/index.js';
  // import deepCopy from 'wgl-utils/es/deepCopy.js';
  const copyObj = deepCopy(obj);
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  const copyObj = utils.deepCopy(obj);
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  const copyObj = utils.deepCopy(obj);
</script>
```
:::


##  `deepCopy.js` 源码
::: code-group

```js  [src/deepCopy.js]
<!-- @include: ../../src/deepCopy.js -->
```

```js  [dist/es/deepCopy.js]
<!-- @include: ../../dist/es/deepCopy.js -->
```
:::
