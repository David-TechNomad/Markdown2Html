var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { del } from "../../../utils/editorKeyEvents";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Del = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class Del extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        markdownEditor
      } = this.props.content;
      const selection = markdownEditor.getSelection();
      del(markdownEditor, selection); // 上传后实时更新内容

      const content = markdownEditor.getValue();
      this.props.content.setContent(content);
      markdownEditor.focus();
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-del",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u5220\u9664\u7EBF")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.del));
  }

}, _temp)) || _class) || _class);
export default Del;