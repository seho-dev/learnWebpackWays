// import _ from "lodash";

// console.log(_.join(["1","2","3"], "***"));



async function getComponents() {
    const {
        default: _
    } = await import("lodash");
    const element = document.createElement("div");
    element.innerHTML = _.join([1, 2, 3], "***");
    return element;
}

document.addEventListener("click", () => {
    getComponents().then(element => {
        document.body.appendChild(element);
    })
})