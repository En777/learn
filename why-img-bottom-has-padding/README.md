# why img bottom has padding
为什么图片和文字同行显示，图片底部会有间隙？

浏览器默认情况下，img 的 css 是 display: inline; vertical-align: baseline;
vertical-align 控制垂直方向的对齐方式。
对齐方式有 top、middle、baseline、bottom 等值，
这4个值，分别类似英语作业本的4根线，baseline 本身是距离下面还有一些距离的，这就是图片底部的空隙的原因。

怎么解决图片底部的空隙？
修改对齐方式即可：
```
.selected-img {
  vertical-align: bottom;
}
```
