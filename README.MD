## Data show

滚屏数据展现动画

## 使用

### 自定义配置参数

html
```
<div  data-show="enter bottom over 1s and move 300px after 0.3s">
```

javascript

```
window.DataShow = new DataShow({
    reset: false,   // 是否重复动画
    move: '20px'    // 距离位置执行动画
});
```


```
defaults: {
    after: "0s",
    enter: "bottom",
    move: "24px",
    over: "0.66s",
    easing: "ease-in-out",
    opacity: 0,
    viewportFactor: .33,
    reset: !1,
    init: !0
}
```