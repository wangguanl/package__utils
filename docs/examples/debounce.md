# `debounce` 防抖节流
## 示例
```js
debounce(() => {
  console.log(123)
}, 200);
throttle(() => {
  console.log(123)
}, 200);
```

## `Framework`
::: code-group

```js  [ESModule]
import { debounce, throttle } from 'wgl-utils/es/index.js';
// import { debounce, throttle } from 'wgl-utils/es/debounce.js';
```

```js  [UMD]
import utils from 'wgl-utils';
utils.debounce();
utils.throttle();
```

:::

## `Browser`
::: code-group

```html  [ESModule]
<script type="module">
  import { debounce, throttle } from 'wgl-utils/es/index.js';
  // import { debounce, throttle } from 'wgl-utils/es/debounce.js';
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  utils.debounce();
  utils.throttle();
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  utils.debounce();
  utils.throttle();
</script>
```
:::


##  `debounce.js` 源码
::: code-group

```js  [src/debounce.js]
<!-- @include: ../../src/debounce.js -->
```

```js  [dist/es/debounce.js]
<!-- @include: ../../dist/es/debounce.js -->
```
:::
