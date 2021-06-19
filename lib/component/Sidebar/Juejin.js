var _dec, _dec2, _dec3, _dec4, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { message, Tooltip } from "antd";
import { solveHtml, solveJuejinMath, solveJuejinCode, addJuejinSuffix, copySafari } from "../../utils/converter";
import { LAYOUT_ID, CODE_NUM, ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./Juejin.css";
let Juejin = (_dec = inject("content"), _dec2 = inject("navbar"), _dec3 = inject("imageHosting"), _dec4 = inject("dialog"), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = observer(_class = (_temp = class Juejin extends Component {
  constructor(props) {
    super(props);

    this.copyJuejin = () => {
      if (window.localStorage.getItem(CODE_NUM) === "0") {
        message.warning("您当前使用的是微信代码主题，请切换其他代码主题后再试！");
        return;
      }

      const layout = document.getElementById(LAYOUT_ID); // 保护现场

      const html = layout.innerHTML;
      solveJuejinMath();
      addJuejinSuffix();
      this.html = solveHtml();
      this.html = solveJuejinCode(this.html);
      copySafari(this.html);
      message.success("已复制且添加 mdnice 排版后缀，感谢宣传，请到稀土掘金粘贴");
      layout.innerHTML = html; // 恢复现场
    };

    this.html = "";
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "left",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "\u590D\u5236\u5230\u7A00\u571F\u6398\u91D1"
    }, React.createElement("a", {
      id: "nice-sidebar-juejin",
      className: "nice-btn-juejin",
      onClick: this.copyJuejin
    }, React.createElement(SvgIcon, {
      name: "juejin",
      className: "nice-btn-juejin-icon"
    })));
  }

}, _temp)) || _class) || _class) || _class) || _class) || _class);
export default Juejin;