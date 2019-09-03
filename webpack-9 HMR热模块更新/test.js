export default function test(){
    var div = document.createElement("div");
    div.setAttribute("id","number");
    let num = 2000;
    div.innerHTML = num;
    document.body.appendChild(div);
}