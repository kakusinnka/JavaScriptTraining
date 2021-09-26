class Draw {
  // 构造函数，根据选择器创建画布上下文
  constructor(el) {
    this.el = document.querySelector(el);
    this.ctx = this.el.getContext("2d");
  }

  run() {
    // 重绘画布
    this.clear();
    // bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
    const eventCallback = this.line.bind(this);
    this.el.addEventListener("mousedown", (event) => {
      // 重新开始一条路径绘制
      this.ctx.beginPath();
      // 移动画笔到指定坐标
      this.ctx.moveTo(event.offsetX, event.offsetY);
      // 线条结束为圆角
      this.ctx.lineCap = "round";
      // 线条拐角为圆角
      this.ctx.lineJoin = "round";
      this.ctx.lineWidth = 10;
      this.el.addEventListener("mousemove", eventCallback);
    });
    this.el.addEventListener("mouseup", () => {
      this.el.removeEventListener("mousemove", eventCallback);
    });
  }

  // 重绘画布
  clear() {
    this.ctx.fillStyle = "#2c3e50";
    this.ctx.fillRect(0, 0, this.el.width, this.el.height);
  }

  // 绘制一个笔画
  line(event) {
      console.log(this);
    // 添加一个绘制点
    this.ctx.lineTo(event.offsetX, event.offsetY);
    // 设置线条颜色
    this.ctx.strokeStyle = "#fff";
    // 将使用 lineTo 定义的点绘制出来
    this.ctx.stroke();
  }

  // 生成图片
  screenshot() {
    const img = document.querySelector("#img");
    // 生成图片 base64 数据
    // 返回一个包含图片展示的 data URI 
    img.src = this.el.toDataURL("image/jpeg");
    img.width = 200;
    img.style = "border:solid 5px #16a085";
  }
}

// 写字板对象
const app = new Draw("#canvas");
app.run();
