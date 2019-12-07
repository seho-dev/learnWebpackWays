import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';

class App extends Component {
    render() {
        return (
            <div>
                <div>{_.join([1,2,3,4,5], "...")}</div>
            </div>
        )
    }
}

let haha = document.createElement("div");
document.body.appendChild(haha);
ReactDom.render(<App />, haha);
