var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { parseLinkToFoot } from "../../../utils/editorKeyEvents";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Format = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class Format extends Component {
  constructor(...args) {
    super(...args);

    this.handleFormat = () => {
      const {
        content
      } = this.props.content;
      parseLinkToFoot(content, this.props.content);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-link-to-foot",
      className: "nice-menu-item",
      onClick: this.handleFormat
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u5FAE\u4FE1\u5916\u94FE\u8F6C\u811A\u6CE8")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.linkToFoot));
  }

}, _temp)) || _class) || _class);
export default Format;