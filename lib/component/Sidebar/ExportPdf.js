var _dec, _dec2, _dec3, _dec4, _class, _temp;

import { Tooltip } from "antd";
import React, { Component } from "react";
import SvgIcon from "../../icon";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import { observer, inject } from "mobx-react";
import "./pdf.css";
let Pdf = (_dec = inject("content"), _dec2 = inject("navbar"), _dec3 = inject("imageHosting"), _dec4 = inject("dialog"), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = observer(_class = (_temp = class Pdf extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      setTimeout(() => {
        window.print();
      }, 500);
    };
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "left",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "\u5BFC\u51FAPDF"
    }, React.createElement("a", {
      id: "nice-sidebar-pdf",
      className: "nice-btn-pdf",
      onClick: this.handleClick
    }, React.createElement(SvgIcon, {
      name: "pdf",
      className: "nice-btn-pdf-icon"
    })));
  }

}, _temp)) || _class) || _class) || _class) || _class) || _class);
export default Pdf;