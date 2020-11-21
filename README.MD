学习自己造论子

[![Build Status](https://www.travis-ci.org/FanHHHHH/wheels.svg?branch=master)](https://www.travis-ci.org/FanHHHHH/wheels)

##介绍
学习Vue过程中做的一个ui框架

##开始使用
1.添加css样式
    使用本框架前需要启用border-box
    ```
    *{box-sizing: border-box}
    *::before{box-sizing: border-box}
    *::after{box-sizing: border-box}
    ```
    IE 8 及以上浏览器支持
    好需要设置默认颜色等变量（后续会改为sass变量）
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
    ```
    npn i --save leoheguluui
    ```
3.引入
    import {Button, ButtonGroup, Icon} from 'leoheguluui'
    improt 'leohefuluui/dist/index.css'

    exprot default{
        name: 'app'
        components: {
            'g-button': Button,
            'g-icon': Icon
        }
    }
    
##文档

##提问

##变更记录

##联系方式

##代码贡献


