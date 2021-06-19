var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { hotKeys } from "../../utils/hotkey";
import { Tooltip } from "antd";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./common.css";
let Link = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Link extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = () => {
      this.props.dialog.setLinkOpen(true);
    };
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "快捷键：" + hotKeys.link
    }, React.createElement("a", {
      id: "nice-sidebar-link",
      className: "nice-btn-tool",
      onClick: this.showModal
    }, React.createElement(SvgIcon, {
      name: "link",
      className: "nice-btn-tool-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default Link;