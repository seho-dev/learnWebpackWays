export default function inner(){
   let dom = document.createElement("div");
   dom.innerHTML = "123";
   document.body.appendChild(dom);
}