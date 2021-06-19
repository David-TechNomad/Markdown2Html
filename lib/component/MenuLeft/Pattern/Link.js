var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Link = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Link extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = () => {
      this.props.dialog.setLinkOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-link",
      className: "nice-menu-item",
      onClick: this.showModal
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u94FE\u63A5")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.link));
  }

}, _temp)) || _class) || _class);
export default Link;