# clear float and BFC
清除浮动与 BFC

float 浮动元素会导致一些问题（容器高度塌陷），所以我们要清除浮动。
浮动产生了什么问题，为什么要清除浮动？
参考这里：
http://zh.learnlayout.com/clearfix.html


为什么这样的代码就能清除浮动了？
原理就是这样：
https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
创建了块格式化上下文(BFC)的元素中的所有内容都会被包含到该BFC中。
BFC: Block formatting context


一些库是怎么处理的？
bootstrap v2.3.2 清除浮动是这样做的：
https://github.com/twbs/bootstrap/blob/v2.3.2/less/mixins.less

```
// 以下是 less 代码：

// Clearfix
// --------
// For clearing floats like a boss h5bp.com/q
.clearfix {
  *zoom: 1;
  &:before,
  &:after {
    display: table;
    content: "";
    // Fixes Opera/contenteditable bug:
    // http://nicolasgallagher.com/micro-clearfix-hack/#comment-36952
    line-height: 0;
  }
  &:after {
    clear: both;
  }
}
```
