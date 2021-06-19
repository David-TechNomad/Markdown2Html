var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../common.css";
let SitDownFunction = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class SitDownFunction extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.dialog.setSitDownOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-sitdown",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "html\u8F6Cmarkdown")));
  }

}, _temp)) || _class) || _class);
export default SitDownFunction;