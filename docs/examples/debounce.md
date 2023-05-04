# 防抖节流
## Example
```js
debounce(() => {
  console.log(123)
}, 200);
throttle(() => {
  console.log(123)
}, 200);
```

## Framework
::: code-group
```js  [ESModule]
import { debounce, throttle } from 'wgl-utils';
// import { debounce, throttle } from 'wgl-utils/es/debounce.mjs';
```
:::

## Browser
::: code-group

```html  [ESModule]
<script type="module">
  import { debounce, throttle } from 'wgl-utils/main.mjs';
  // import { debounce, throttle } from 'wgl-utils/es/debounce.mjs';
</script>
```
```html  [UMD]
<!-- 全量引入 -->
<script src="wgl-utils/main.js"></script>
<script>
  Wgl.debounce();
  Wgl.throttle();
</script>
```
:::


## Code
::: code-group

```js  [源码]
// src/debounce.js
<!-- @include: ../../src/debounce.js -->
```

```js  [ESModule]
// dist/es/debounce.mjs
<!-- @include: ../../dist/es/debounce.mjs -->
```

:::
