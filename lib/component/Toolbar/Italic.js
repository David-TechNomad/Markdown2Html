var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Tooltip } from "antd";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import { italic } from "../../utils/editorKeyEvents";
import { hotKeys } from "../../utils/hotkey";
import "./common.css";
let Italic = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class Italic extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        markdownEditor
      } = this.props.content;
      const selection = markdownEditor.getSelection();
      italic(markdownEditor, selection); // 上传后实时更新内容

      const content = markdownEditor.getValue();
      this.props.content.setContent(content);
      markdownEditor.focus();
    };
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "快捷键：" + hotKeys.italic
    }, React.createElement("a", {
      id: "nice-sidebar-italic",
      className: "nice-btn-tool",
      onClick: this.handleClick
    }, React.createElement(SvgIcon, {
      name: "italic",
      className: "nice-btn-tool-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default Italic;