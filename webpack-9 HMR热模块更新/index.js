import "./index.css"
import test from "./test"
import test2 from "./test2"

test2();
test();

if (module.hot) {
    module.hot.accept('./test', function () {
        document.body.removeChild(document.getElementById("number"));
        // printMe();
        test();
    })
}