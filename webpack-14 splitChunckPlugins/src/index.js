import _ from "lodash";

console.log(_.join(["1","2","3"], "***"));

// function getComponents() {
//     return import("lodash").then(({
//         default: _
//     }) => {
//         const element = document.createElement("div");
//         element.innerHTML = _.join([1, 2, 3], "***");
//         return element;
//     })
// }

// getComponents().then(element => {
//     document.body.appendChild(element);
// })