# 学习自己造论子

[![Build Status](https://www.travis-ci.org/FanHHHHH/wheels.svg?branch=master)](https://www.travis-ci.org/FanHHHHH/wheels)

# 介绍

学习 Vue 过程中做的一个 ui 框架

# 开始使用

1.添加 css 样式

使用本框架前需要启用 border-box

```
    *{box-sizing: border-box}
    *::before{box-sizing: border-box}
    *::after{box-sizing: border-box}

```

IE 8 及以上浏览器支持

还需要设置默认颜色等变量（后续会改为 sass 变量）

```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
        }

```

    IE15及以上支持

2.安装

`npm i --save leoheguluui`

3.引入

```
    import {Button, ButtonGroup, Icon} from 'leoheguluui'
    improt 'leohefuluui/dist/index.css'

    exprot default{
        name: 'app'
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
```

# 文档

# 提问

# 变更记录

# 联系方式

# 代码贡献
