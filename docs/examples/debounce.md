# `debounce` 防抖节流

## `Framework`
::: code-group

```js  [ESModule]
  import { debounce, throttle } from 'wgl-utils/es/index.js';
  // import debounce from 'wgl-utils/es/debounce.js';
  debounce(() => {
    console.log(123)
  }, 200);
  throttle(() => {
    console.log(123)
  }, 200);
```

```js  [UMD]
  import utils from 'wgl-utils';
  utils.debounce(() => {
    console.log(123)
  }, 200);
  utils.throttle(() => {
    console.log(123)
  }, 200);
```

:::

## `Browser`
::: code-group

```html  [ESModule]
<script type="module">
  import { debounce, throttle } from 'wgl-utils/es/index.js';
  debounce(() => {
    console.log(123)
  }, 200);
  throttle(() => {
    console.log(123)
  }, 200);
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  utils.debounce(() => {
    console.log(123)
  }, 200);
  utils.throttle(() => {
    console.log(123)
  }, 200);
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  utils.debounce(() => {
    console.log(123)
  }, 200);
  utils.throttle(() => {
    console.log(123)
  }, 200);
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
