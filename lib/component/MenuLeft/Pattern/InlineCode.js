var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { inlineCode } from "../../../utils/editorKeyEvents";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let InlineCode = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class InlineCode extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        markdownEditor
      } = this.props.content;
      const selection = markdownEditor.getSelection();
      inlineCode(markdownEditor, selection); // 上传后实时更新内容

      const content = markdownEditor.getValue();
      this.props.content.setContent(content);
      markdownEditor.focus();
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-inline-code",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u884C\u5185\u4EE3\u7801")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.inlineCode));
  }

}, _temp)) || _class) || _class);
export default InlineCode;