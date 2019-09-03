export default function test2(){
    var div = document.createElement("div");
    let num = 1;
    div.innerHTML = num;
    div.onclick = function(){
        num ++ ;
        div.innerHTML = num;
    }
    document.body.appendChild(div);
}