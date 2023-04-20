# `validation` 校验数据
## 示例
```js
/**
 * @method 验证类型
 * @param { Object | required } rules - 校验规则.
 * @param { Array | required } data - 数据.
 * @return { Boolean | rules[key] } 返回值描述: 如果校验成功则返回 true, 校验失败返回校验的规则
 **/
var flag = validation(
  {
    price: [
      {
        type: 'empty',
      },
      {
        type: 'money',
      },
    ],
    name: {
      type: 'empty',
    },
    custom: {
      validation: data => /123456/.test(data),
    },
  },
  { price: '123', name: 456 }
)

if (flag === true) {
  // 校验成功
} else {
  // 校验失败
  console.log(flag)
}
```

## `Framework`
::: code-group

```js  [ESModule]
import { validation } from 'wgl-utils/es/index.js';
// import validation from 'wgl-utils/es/validation.js';
console.log(validation());
```

```js  [UMD]
import utils from 'wgl-utils';
console.log(utils.validation());
```

:::

## `Browser`
::: code-group

```html  [ESModule]
<script type="module">
  import { validation } from 'wgl-utils/es/index.js';
  // import validation from 'wgl-utils/es/validation.js';
  console.log(validation());
</script>
```
```html  [UMD]
<script src="wgl-utils/libs/index.umd.js"></script>
<script>
  console.log(utils.validation())
</script>
```
```html  [var]
<script src="wgl-utils/libs/index.min.js"></script>
<script>
  console.log(utils.validation())
</script>
```
:::


##  `validation.js` 源码
::: code-group

```js  [src/validation.js]
<!-- @include: ../../src/validation.js -->
```

```js  [dist/es/validation.js]
<!-- @include: ../../dist/es/validation.js -->
```
:::
