var _dec, _class, _temp;

import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Tooltip } from "antd";
import SvgIcon from "../../icon";
import { hotKeys } from "../../utils/hotkey";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import "./common.css";
let Table = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Table extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = () => {
      this.props.dialog.setFormOpen(true);
    };
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "快捷键：" + hotKeys.form
    }, React.createElement("a", {
      id: "nice-sidebar-table",
      className: "nice-btn-tool",
      onClick: this.showModal
    }, React.createElement(SvgIcon, {
      name: "table",
      className: "nice-btn-tool-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default Table;