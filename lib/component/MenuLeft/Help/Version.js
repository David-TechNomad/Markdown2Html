var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../common.css";
let Version = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Version extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.dialog.setVersionOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-version",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u7248\u672C\u4FE1\u606F")));
  }

}, _temp)) || _class) || _class);
export default Version;