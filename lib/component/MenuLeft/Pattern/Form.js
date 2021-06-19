var _dec, _class, _temp;

import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Form = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Form extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = () => {
      this.props.dialog.setFormOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-form",
      className: "nice-menu-item",
      onClick: this.showModal
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u8868\u683C")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.form));
  }

}, _temp)) || _class) || _class);
export default Form;