var _dec, _dec2, _dec3, _dec4, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { message, Tooltip } from "antd";
import { solveWeChatMath, solveHtml, copySafari } from "../../utils/converter";
import { LAYOUT_ID, ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./Wechat.css";
let Wechat = (_dec = inject("content"), _dec2 = inject("navbar"), _dec3 = inject("imageHosting"), _dec4 = inject("dialog"), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = observer(_class = (_temp = class Wechat extends Component {
  constructor(props) {
    super(props);

    this.copyWechat = () => {
      const layout = document.getElementById(LAYOUT_ID); // 保护现场

      const html = layout.innerHTML;
      solveWeChatMath();
      this.html = solveHtml();
      copySafari(this.html);
      message.success("已复制，请到微信公众平台粘贴");
      layout.innerHTML = html; // 恢复现场
    };

    this.html = "";
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "left",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "\u590D\u5236\u5230\u516C\u4F17\u53F7"
    }, React.createElement("a", {
      id: "nice-sidebar-wechat",
      className: "nice-btn-wechat",
      onClick: this.copyWechat
    }, React.createElement(SvgIcon, {
      name: "wechat",
      className: "nice-btn-wechat-icon"
    })));
  }

}, _temp)) || _class) || _class) || _class) || _class) || _class);
export default Wechat;