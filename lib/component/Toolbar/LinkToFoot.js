var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Tooltip } from "antd";
import { parseLinkToFoot } from "../../utils/editorKeyEvents";
import { hotKeys } from "../../utils/hotkey";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./common.css";
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
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "快捷键：" + hotKeys.linkToFoot
    }, React.createElement("a", {
      id: "nice-sidebar-quote",
      className: "nice-btn-tool",
      onClick: this.handleFormat
    }, React.createElement(SvgIcon, {
      name: "quote",
      className: "nice-btn-tool-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default Format;