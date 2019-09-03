import logo from "./logo.png"
// 引入css
import "./index.scss"

let arr = [1,2,3,4];
for(let key in arr){
    document.write(arr[key] + ",")
}

var img = new Image();
img.src = logo;
img.classList.add("logo");
const div =  document.getElementById("root");
div.append(img)