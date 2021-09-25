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
// 3，绘制圆形
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