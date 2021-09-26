/*
// 1, 绘制矩形
// 通过Id获取元素
const canvas = document.getElementById('canvas');
// 返回二维渲染的canvas上下文
const ctx = canvas.getContext('2d');
// 设置填充颜色
ctx.fillStyle = 'green';
// 绘制填充矩形的方法
ctx.fillRect(10, 10, 150, 100);
*/

/*
// 2, 绘制三角形
// 通过Id获取元素
const canvas = document.getElementById('canvas'); 
// 返回二维渲染的canvas上下文
const ctx = canvas.getContext('2d');
// 设置填充颜色
ctx.fillStyle = '#8e44ad';
// 绘制填充矩形的方法
ctx.fillRect(0, 0, canvas.width, canvas.height);
// 清空子路径列表，开始一个新的路径。当你想创建一个新的路径时，调用此方法。
ctx.beginPath();
// 将一个新的子路径的起始点移动到(x，y)坐标
ctx.moveTo(200, 0);
// 使用直线连接子路径的最后的点到(x，y)坐标。
ctx.lineTo(400, 200);
ctx.lineTo(0, 200);
// 使笔点返回到当前子路径的起始点
ctx.closePath();
// 设置线的宽度
ctx.lineWidth = 10;
// 设置图形边线的颜色和样式
ctx.strokeStyle = '#f1c40f';
// 使用当前的样式描边子路径
ctx.stroke();
*/

/*
// 3, 绘制圆形
// 通过Id获取元素
const el = document.querySelector('canvas');
// 返回二维渲染的canvas上下文
const ctx = el.getContext('2d');
// 清空子路径列表，开始一个新的路径。当你想创建一个新的路径时，调用此方法。
ctx.beginPath();
// 设置图形边线的颜色和样式
ctx.strokeStyle = 'red';
// 设置线的宽度
ctx.lineWidth = 20;
// 绘制一段圆弧路径
ctx.arc(100, 100, 60, 0, 2 * Math.PI);
// 使用当前的样式描边子路径
ctx.stroke();
*/

/*
// 4, 绘制填充圆
// 通过Id获取元素
const el = document.querySelector('canvas');
// 返回二维渲染的canvas上下文
const ctx = el.getContext('2d');
// 清空子路径列表，开始一个新的路径。当你想创建一个新的路径时，调用此方法。
ctx.beginPath();
// 设置线的宽度
ctx.lineWidth = 10;
// 绘制一段圆弧路径
ctx.arc(100, 100, 60, 0, 2 * Math.PI);
// 设置填充颜色
ctx.fillStyle = '#f1c40f';
// 填充当前或已存在的路径
ctx.fill();
*/

/*
// 5, 绘制边框
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// 设置图形边线的颜色和样式
ctx.strokeStyle = '#16a085'
// 线条宽度
ctx.lineWidth = 30
// 定义两线相交拐点的类型：bevel斜角 ,round圆角，miter尖角
ctx.lineJoin = 'round'
// 绘制矩形边框
ctx.strokeRect(50, 50, 300, 300)
*/

/*
// 6, 渐变边框
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// 创建一个沿着参数坐标指定的线的线性渐变
const gradient = ctx.createLinearGradient(0, 200, 500, 200)
// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为渐变颜色
gradient.addColorStop(0, '#1abc9c')
gradient.addColorStop(0.25, '#9b59b6')
gradient.addColorStop(0.5, '#0b59b6')
gradient.addColorStop(0.75, '#9b09b6')
gradient.addColorStop(1, '#f1c40f')
// 渐变填充
ctx.strokeStyle = gradient
//设置线的宽度
ctx.lineWidth = 20
//绘制线条矩形
ctx.strokeRect(100, 100, 300, 300)
*/

/*
// 7, 渐变填充色
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// 创建一个沿着参数坐标指定的线的线性渐变
const gradient = ctx.createLinearGradient(0, 0, 500, 500)
// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为渐变颜色
gradient.addColorStop(0, '#1abc9c')
gradient.addColorStop(0.25, '#9b59b6')
gradient.addColorStop(0.5, '#0b59b6')
gradient.addColorStop(0.75, '#9b09b6')
gradient.addColorStop(1, '#f1c40f')
//定义填充颜色
ctx.fillStyle = gradient
//绘制矩形
ctx.fillRect(0, 0, 500, 500)
*/

/*
// 8, 清空区域
const canvas = document.getElementById('app').getContext('2d')
canvas.fillStyle = 'red'
canvas.fillRect(0, 0, 500, 500)
// 通过把像素设置为透明以达到擦除一个矩形区域的目的
canvas.clearRect(50, 50, 100, 100)
*/

/*
// 9, 填充文字
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// 填充样式
ctx.fillStyle = 'red'
// 文字大小与字体设置
ctx.font = '30px CascadiaMono'
// 在 (x, y)位置填充文本
ctx.fillText('kakusinnka.com', 10, 250)
*/

/*
// 10, 渐变文字
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
//定义渐变的开始与结束坐标
const gradient = ctx.createLinearGradient(0, 0, 500, 500)
// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为激变颜色
gradient.addColorStop(0, '#1abc9c')
gradient.addColorStop(0.25, '#9b59b6')
gradient.addColorStop(0.5, '#0b59b6')
gradient.addColorStop(0.75, '#9b09b6')
gradient.addColorStop(1, '#f1c40f')
// 渐变填充
ctx.strokeStyle = gradient
// 文字大小与字体设置
ctx.font = '30px CascadiaMono'
ctx.strokeText('kakusinnka.com', 10, 250)
*/

/*
// 11, 图片填充
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// Image()函数将会创建一个新的HTMLImageElement实例
// 它的功能等价于 document.createElement('img')
const img = new Image(500, 500)
img.src = 'dog.jpg'
// 图片加载后处理
img.onload = () => {
    // 第二个参数："repeat|repeat-x|repeat-y|no-repeat"
    const pat = ctx.createPattern(img, 'no-repeat')
    // 创建一个矩形路径
    ctx.rect(0, 0, 500, 500)
    // 指定填充方式为贴图
    ctx.fillStyle = pat
    // 开始填充
    ctx.fill()
}
*/

/*
// 12, 图片缩放
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// 创建图片对象
const img = new Image()
img.src = 'dog.jpg'
// 图片加载后处理
img.onload = () => {
    // 更改 canvas 尺寸
    el.width = img.naturalWidth
    el.height = img.naturalHeight
    // 绘制图片参数为：x, y,图片宽度,图片高度
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
}
*/

/*
// 13, 绘制像素
const el = document.getElementById('canvas')
const ctx = el.getContext('2d')
// 画布填充为绿色
ctx.fillStyle = 'green'
ctx.fillRect(0, 0, el.width, el.height)
// 向画出中绘制点
for (let i = 0; i < 100; i++) {
    // 随机生成坐标
    const x = Math.floor(Math.random() * el.width)
    const y = Math.floor(Math.random() * el.width)
    // 清空子路径列表，开始一个新的路径。当你想创建一个新的路径时，调用此方法。
    ctx.beginPath();
    // 设置线的宽度
    // ctx.lineWidth = 1;
    // 绘制一段圆弧路径
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red'
    ctx.fill()
}
*/
