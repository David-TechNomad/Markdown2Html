var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { formatDoc } from "../../../utils/editorKeyEvents";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Format = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class Format extends Component {
  constructor(...args) {
    super(...args);

    this.handleFormat = () => {
      const {
        content
      } = this.props.content;
      formatDoc(content, this.props.content);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-format",
      className: "nice-menu-item",
      onClick: this.handleFormat
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u683C\u5F0F\u5316\u6587\u6863")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.format));
  }

}, _temp)) || _class) || _class);
export default Format;