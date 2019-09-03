// 引入模块
import Header from './header'
// // 引入图片
import Img from './detail.png'
var root = document.getElementById("root");
var img = new Image();
img.src = Img;
root.append(img)

new Header();