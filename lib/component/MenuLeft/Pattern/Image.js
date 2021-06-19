var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Image = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Image extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = () => {
      this.props.dialog.setImageOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-image",
      className: "nice-menu-item",
      onClick: this.showModal
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u56FE\u7247")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.image));
  }

}, _temp)) || _class) || _class);
export default Image;