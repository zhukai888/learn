### 文档流、文本流

```
文档流是相对于盒子模型的概念，
	将窗体自上而下分成一行一行,并在每行中按从左至右的挨次排放元素，即为普通流/文档流。

文本流是相对于文子段落讲的
	文档的读取和输出顺序，也就是我们通常看到的由左到右、由上而下的读取和输出形式。
```

### float:

```js
元素从网页的正常流动(文档流)中移除,但会保持元素的‘容器’大小，置于元素的最左边或最右边（即保留部分的流动性，未完全脱离文档流）
```

```css
.content { margin: 100px auto; width: 300px }
.box { float: left }


<div class="content">
    <div class="box" ><img src="https://himg.bdimg.com/sys/portraitn/item/72b9e5bf83e6b685312c7f" alt=""></div>
    <div class="text">
    	CSS（层叠样式表）是一种用来表现HTML或XML等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。有三种方法可以在站点网页上使用样式表：外部样式表、内部样式表和内联样式。
    </div>
</div>
```

<img src="C:\Users\Admin\Desktop\float.png" alt="浮动" style="zoom:80%;" />



### position: absolute

```
绝对定位的元素彻底脱离了文档流。在布置文档流中其它元素时，绝对定位元素不占据空间。
```

```css
.content { margin: 100px auto; width: 300px }
.box { position: absolute }


<div class="content">
    <div class="box" ><img src="https://himg.bdimg.com/sys/portraitn/item/72b9e5bf83e6b685312c7f" alt=""></div>
    <div class="text">
    	CSS（层叠样式表）是一种用来表现HTML或XML等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。有三种方法可以在站点网页上使用样式表：外部样式表、内部样式表和内联样式。
    </div>
</div>
```

![绝对定位](C:\Users\Admin\Desktop\absolute.png)

总结：

```
float、position: absolute 都失去了在文档流中的正常位置，
	但 float 保留了在文档流中的容器，只是位置发生了改变，
	而 position: absolute 彻底的脱离了文档流，形成了一个依附于祖先元素的容器
```

