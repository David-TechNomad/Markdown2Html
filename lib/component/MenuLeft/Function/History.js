var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../common.css";
let History = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class History extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.dialog.setHistoryOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-history",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u672C\u5730\u5386\u53F2")));
  }

}, _temp)) || _class) || _class);
export default History;