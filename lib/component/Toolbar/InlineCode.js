var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Tooltip } from "antd";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import { inlineCode } from "../../utils/editorKeyEvents";
import { hotKeys } from "../../utils/hotkey";
import "./common.css";
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
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "快捷键：" + hotKeys.inlineCode
    }, React.createElement("a", {
      id: "nice-sidebar-inlineCode",
      className: "nice-btn-tool",
      onClick: this.handleClick
    }, React.createElement(SvgIcon, {
      name: "inlineCode",
      className: "nice-btn-tool-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default InlineCode;