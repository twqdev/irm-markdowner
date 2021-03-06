# 微信公众号格式化工具

GitHub 地址：[https://github.com/ironmaxtory/wechat-markdowner](https://github.com/ironmaxtory/wechat-markdowner)

> 使用微信公众号编辑器有一个十分头疼的问题——粘贴出来的代码，格式错乱，而且特别丑。这款编辑器能够解决这个问题。

## Features
- 支持不同代码样式主题
- 代码长度溢出时横向滚动
- 支持 Webpack 调试
- 仅支持一层的 ul 和 ol，因为微信编辑器也不支持多层的列表
- 新增 Material Dark 代码样式主题
- 支持 emoji 表情
- 图片支持自定义尺寸
- 支持 3 种样式的 blockquote<sup style="color:#e4393c;">New</sup>
- 支持 PWA，只要访问过一次，则离线可用！<sup style="color:#e4393c;">New</sup>

## Blockquote
::: tip
提示文案
:::

::: tip 提示
提示文案
:::

::: warn
提示文案
:::

::: warn 警告
提示文案
:::

::: danger
提示文案
:::

::: danger 危险
提示文案
:::

## 列表嵌套
1. lorem
2. lorem
3. lorem

+ lorem
+ lorem
+ lorem

## Emoji 表情
:1st_place_medal: :2nd_place_medal: :3rd_place_medal: :astonished: :avocado:

## 二级标题
Aliqua aliqua id pariatur officia ipsum est. Ipsum velit irure exercitation mollit labore est nostrud exercitation dolor qui incididunt. Aute exercitation officia magna do sit do labore ad laboris aute laborum dolor nostrud sint. Duis cupidatat ex dolore magna commodo laborum. Qui aliquip ea eiusmod esse incididunt aliqua non labore voluptate. Veniam ad eu adipisicing dolore consequat veniam. Voluptate enim Lorem in consequat deserunt.

### 三级标题
Aliqua aliqua id pariatur officia ipsum est. Ipsum velit irure exercitation mollit labore est nostrud exercitation dolor qui incididunt. Aute exercitation officia magna do sit do labore ad laboris aute laborum dolor nostrud sint. Duis cupidatat ex dolore magna commodo laborum. Qui aliquip ea eiusmod esse incididunt aliqua non labore voluptate. Veniam ad eu adipisicing dolore consequat veniam. Voluptate enim Lorem in consequat deserunt.

#### 四级标题
Aliqua aliqua id pariatur officia ipsum est. Ipsum velit irure exercitation mollit labore est nostrud exercitation dolor qui incididunt. Aute exercitation officia magna do sit do labore ad laboris aute laborum dolor nostrud sint. Duis cupidatat ex dolore magna commodo laborum. Qui aliquip ea eiusmod esse incididunt aliqua non labore voluptate. Veniam ad eu adipisicing dolore consequat veniam. Voluptate enim Lorem in consequat deserunt.

##### 五级标题
Aliqua aliqua id pariatur officia ipsum est. Ipsum velit irure exercitation mollit labore est nostrud exercitation dolor qui incididunt. Aute exercitation officia magna do sit do labore ad laboris aute laborum dolor nostrud sint. Duis cupidatat ex dolore magna commodo laborum. Qui aliquip ea eiusmod esse incididunt aliqua non labore voluptate. Veniam ad eu adipisicing dolore consequat veniam. Voluptate enim Lorem in consequat deserunt.

###### 六级标题
Aliqua aliqua id pariatur officia ipsum est. Ipsum velit irure exercitation mollit labore est nostrud exercitation dolor qui incididunt. Aute exercitation officia magna do sit do labore ad laboris aute laborum dolor nostrud sint. Duis cupidatat ex dolore magna commodo laborum. Qui aliquip ea eiusmod esse incididunt aliqua non labore voluptate. Veniam ad eu adipisicing dolore consequat veniam. Voluptate enim Lorem in consequat deserunt.

## 代码示例
`html`代码
```html
<template>
  <Promised :promise="usersPromise">
    <p slot="pending">Loading...</p>

    <ul slot-scope="users">
      <li v-for="user in users">{{ user.name }}</li>
    </ul>

    <p slot="rejected" slot-scope="error">Error: {{ error.message }}</p>
  </Promised>
</template>
```

`css`代码：
```css
.title {
    color: #000000;
    font-size: 20px;
}
```

`js`代码：
```javascript
function sayHelloWorld (name) {
  console.log('Hello world, ' + name);
}

sayHelloWorld('Frank');
```

`php`代码：

```php
echo 'hello,world'
```

## 表格示例

| 品类 | 个数 | 备注 |
|:-----:|:-----:|:------:|
| 程序猿 | 1   | handsome |
| 程序媛 | 1   | beautiful |


