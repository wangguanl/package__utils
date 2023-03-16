# `deepMerge` 深合并: Object

## 通用引用
```js
const obj = {
  a: 1,
  b: 2,
  c: [3, 4, { a: 1, b: 2 }],
  d: {
    s: 1,
    d: 2,
    a: 22,
  },
},
obj2 = {
  a: 3,
  b: 4,
  c: [5, 6, 7],
  d: {
    s: 4,
    d: 6,
    q: 2,
  },
};
```

## `Framework`
::: code-group

```js  [ESModule]
  import { deepMerge } from 'wgl-utils/es/index.js';
  // import deepMerge from 'wgl-utils/es/deepMerge.js';
  
  const mergeObj = deepMerge(obj, obj2);
  console.log(mergeObj);
```

```js  [UMD]
  import utils from 'wgl-utils';
  const mergeObj = utils.deepMerge(obj, obj2);
  console.log(mergeObj);
```

:::

## `Browser`
::: code-group

```html  [ESModule]
<script type="module">
  import { deepMerge } from 'wgl-utils/es/index.js';
  const mergeObj = deepMerge(obj,obj2);
  console.log(mergeObj);
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  const mergeObj = utils.deepMerge(obj, obj2);
  console.log(mergeObj);
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  const mergeObj = utils.deepMerge(obj, obj2);
  console.log(mergeObj);
</script>
```
:::


##  `deepMerge.js` 源码
::: code-group

```js  [src/deepMerge.js]
<!-- @include: ../../src/deepMerge.js -->
```

```js  [dist/es/deepMerge.js]
<!-- @include: ../../dist/es/deepMerge.js -->
```
:::
