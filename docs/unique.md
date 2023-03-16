# `unique` 创建唯一值: `String`

## `ESModule` 引用
::: code-group
```html  [HTML]
<script type="module">
  import { unique } from 'dist/es/index.js';
  console.log(unique());
</script>
```

```js  [JS]
  import { unique } from 'dist/es/index.js';
  console.log(unique());
```

```js  [Framework]
  // import { unique } from 'wgl-utils/es/index.js';
  import unique from 'wgl-utils/es/unique.js';
  console.log(unique());
```

:::

##  `UMD` 引用
::: code-group
```html  [HTML]
<script src="../dist/libs/index.umd.js"></script>
<script>
  console.log(utils.unique())
</script>
```

```js  [Framework]
  import utils from 'wgl-utils';
  console.log(utils.unique());
```

:::

##  `window var` 引用

::: code-group
```html  [HTML]
<script src="../dist/libs/index.min.js"></script>
<script>
  console.log(utils.unique())
</script>
```

:::



##  `unique.js` 源码
::: code-group

```js  [src/unique.js]
<!-- @include: ../src/unique.js -->
```

```js  [dist/es/unique.js]
<!-- @include: ../dist/es/unique.js -->
```

```js  [dist/libs/index.umd.js]
<!-- @include: ../dist/libs/index.umd.js -->
```

```js  [dist/libs/index.min.js]
<!-- @include: ../dist/libs/index.min.js -->
```
:::
