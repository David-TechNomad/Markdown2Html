var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Button } from "antd";
let AboutDialog = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class AboutDialog extends Component {
  constructor(...args) {
    super(...args);

    this.handleOk = () => {
      this.props.dialog.setAboutOpen(false);
    };

    this.handleCancel = () => {
      this.props.dialog.setAboutOpen(false);
    };

    this.handleVersion = () => {
      this.props.dialog.setAboutOpen(false);
      this.props.dialog.setVersionOpen(true);
    };
  }

  render() {
    return React.createElement(Modal, {
      title: "\u5173\u4E8E",
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      visible: this.props.dialog.isAboutOpen,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      footer: [React.createElement(Button, {
        key: "version",
        onClick: this.handleVersion
      }, "\u66F4\u65B0\u8BB0\u5F55"), React.createElement(Button, {
        key: "submit",
        type: "primary",
        onClick: this.handleOk
      }, "\u786E\u8BA4")],
      bodyStyle: {
        paddingTop: "5px"
      }
    }, React.createElement("h3", {
      style: style.headerMargin
    }, "Markdown2Html", React.createElement("a", {
      id: "nice-about-dialog-star",
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://github.com/TaleAi/markdown2html",
      style: style.noBorder
    }, React.createElement("img", {
      alt: "",
      style: style.img,
      src: "https://badgen.net/github/stars/TaleAi/markdown2html"
    }))), React.createElement("p", {
      style: style.lineHeight
    }, "\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684 Markdown \u7F16\u8F91\u5668\uFF1B"), React.createElement("p", {
      style: style.lineHeight
    }, "\u652F\u6301\u5FAE\u4FE1\u516C\u4F17\u53F7\u3001\u77E5\u4E4E\u548C\u7A00\u571F\u6398\u91D1\uFF1B"), React.createElement("h3", {
      style: style.headerMargin
    }, "\u6211\u4EEC"), React.createElement("p", {
      style: style.lineHeight
    }, "\u5982\u679C\u4F60\u559C\u6B22\u6211\u4EEC\u7684\u5DE5\u5177\uFF0C\u6B22\u8FCE\u5173\u6CE8", React.createElement("a", {
      id: "nice-about-dialog-github",
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://github.com/TaleAi/markdown2html"
    }, "\xA0GitHub\xA0")));
  }

}, _temp)) || _class) || _class);
const style = {
  leftImgWidth: {
    width: "40%",
    height: "100%"
  },
  rightImgWidth: {
    width: "60%",
    height: "100%"
  },
  headerMargin: {
    marginTop: "5px",
    marginBottom: "5px",
    color: "black"
  },
  lineHeight: {
    lineHeight: "26px",
    color: "black",
    padding: 0,
    margin: 0
  },
  img: {
    width: "70px",
    marginLeft: "10px",
    display: "inline-block"
  },
  noBorder: {
    border: "none"
  }
};
export default AboutDialog;