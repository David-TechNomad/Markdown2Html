var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Tooltip } from "antd";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./PreviewType.css";
let PreviewType = (_dec = inject("navbar"), _dec(_class = observer(_class = (_temp = class PreviewType extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = key => {
      this.props.navbar.setPreviewType(key);
    };
  }

  render() {
    const targetType = this.props.navbar.previewType === "pc" ? "mobile" : "pc";
    return React.createElement(Tooltip, {
      placement: "left",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "\u9884\u89C8\u6A21\u5F0F"
    }, React.createElement("a", {
      id: "nice-sidebar-preview-type",
      className: "nice-btn-previewtype",
      onClick: () => this.handleClick(targetType)
    }, React.createElement(SvgIcon, {
      name: targetType,
      className: "nice-btn-previewtype-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default PreviewType;