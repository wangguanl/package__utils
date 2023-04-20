# `verifyVar` 检测类型
## 示例
```js
/*
  检测类型
  variable, 返回当前variable参数类型
  [, isType], 判断variable参数类型
  来自用户传输的内容都必须验证类型
 */
verifyVar(1); // number
verifyVar('string'); // string
verifyVar([]); // array
verifyVar([], 'array'); // true
verifyVar({}); // object
verifyVar({}, 'object'); // true

```

## `Framework`
::: code-group

```js  [ESModule]
import { verifyVar } from 'wgl-utils/es/index.js';
// import verifyVar from 'wgl-utils/es/verifyVar.js';
verifyVar()
```

```js  [UMD]
import utils from 'wgl-utils';
utils.verifyVar()
```

:::

## Browser
::: code-group

```html  [ESModule]
<script type="module">
  import { verifyVar } from 'wgl-utils/es/index.js';
  // import verifyVar from 'wgl-utils/es/verifyVar.js';
  verifyVar()
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  utils.verifyVar()
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  utils.verifyVar()
</script>
```
:::


##  `verifyVar.js` 源码
::: code-group

```js  [src/verifyVar.js]
<!-- @include: ../../src/verifyVar.js -->
```

```js  [dist/es/verifyVar.js]
<!-- @include: ../../dist/es/verifyVar.js -->
```
:::
