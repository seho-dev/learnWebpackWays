export function test1() {
    console.log(1);
    let dom = document.createElement("div");
    dom.innerHTML = _.join([1, 2, 3, 4], "__");
    document.body.appendChild(dom);
}