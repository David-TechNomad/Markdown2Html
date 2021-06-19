var _dec, _dec2, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, message } from "antd";
import TEMPLATE from "../../../template/index";
import "../common.css";
let Reset = (_dec = inject("content"), _dec2 = inject("navbar"), _dec(_class = _dec2(_class = observer(_class = (_temp = class Reset extends Component {
  constructor(...args) {
    super(...args);

    this.showConfirm = () => {
      Modal.confirm({
        title: "确认重置么?",
        content: "重置后将丢失本地保存的文本和自定义样式",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk: () => {
          this.props.content.setContent(TEMPLATE.content);
          this.props.content.setStyle(TEMPLATE.normal);
          this.props.content.setCustomStyle(TEMPLATE.custom);
          this.props.navbar.setTemplateNum(0);
          message.success("重置成功！");
        },

        onCancel() {}

      });
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-reset",
      className: "nice-menu-item",
      onClick: this.showConfirm
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u91CD\u7F6E")));
  }

}, _temp)) || _class) || _class) || _class);
export default Reset;