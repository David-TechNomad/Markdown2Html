var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Tooltip } from "antd";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import { hotKeys } from "../../utils/hotkey";
import "./common.css";
let Image = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Image extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = () => {
      this.props.dialog.setImageOpen(true);
    };
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "快捷键：" + hotKeys.image
    }, React.createElement("a", {
      id: "nice-sidebar-image",
      className: "nice-btn-tool",
      onClick: this.showModal
    }, React.createElement(SvgIcon, {
      name: "image",
      className: "nice-btn-tool-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default Image;