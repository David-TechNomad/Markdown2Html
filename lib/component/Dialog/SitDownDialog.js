var _dec, _dec2, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Input, Select, message } from "antd";
import SitDownConverter from "../../utils/sitdownConverter";
import { SITDOWN_OPTIONS } from "../../utils/constant";
const {
  Option
} = Select;
const {
  TextArea
} = Input;
let SitDownDialog = (_dec = inject("dialog"), _dec2 = inject("content"), _dec(_class = _dec2(_class = observer(_class = (_temp = class SitDownDialog extends Component {
  constructor(props) {
    super(props);

    this.handleOk = () => {
      try {
        const {
          platform,
          sourceCode
        } = this.state;
        const domParser = new DOMParser();
        const sourceCodeDom = domParser.parseFromString(sourceCode, "text/html");
        let content = "";

        if (platform === "csdn") {
          const articleDom = sourceCodeDom.getElementById("content_views");
          content = SitDownConverter.CSDN(articleDom);
        } else if (platform === "juejin") {
          const articleDom = sourceCodeDom.getElementsByClassName("article-content");
          content = SitDownConverter.Juejin(articleDom[0]);
        } else if (platform === "zhihu") {
          const articleDom = sourceCodeDom.getElementsByClassName("Post-RichText");
          content = SitDownConverter.Zhihu(articleDom[0]);
        } else if (platform === "wechat") {
          const articleDom = sourceCodeDom.getElementById("js_content");
          content = SitDownConverter.Wechat(articleDom);
        } else {
          content = SitDownConverter.GFM(sourceCodeDom);
        }

        this.props.content.setContent(content);
        this.props.dialog.setSitDownOpen(false);
        const {
          markdownEditor
        } = this.props.content; // const cursor = markdownEditor.getCursor();
        // cursor.ch += 1;
        // markdownEditor.setCursor(cursor);

        markdownEditor.focus();
      } catch (e) {
        message.error("源代码与已选平台的文章域名不符");
      }
    };

    this.handleCancel = () => {
      this.props.dialog.setSitDownOpen(false);
    };

    this.handlePlatform = value => {
      this.setState({
        platform: value
      });
    };

    this.handleSourceCode = e => {
      this.setState({
        sourceCode: e.target.value
      });
    };

    this.state = {
      platform: "default",
      sourceCode: ""
    };
  }

  render() {
    const {
      sourceCode,
      platform
    } = this.state;
    return React.createElement(Modal, {
      title: "SitDown\uFF1Ahtml \u8F6C markdown \u795E\u5668",
      okText: "\u8F6C\u6362",
      cancelText: "\u53D6\u6D88",
      visible: this.props.dialog.isSitDownOpen,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, React.createElement(Select, {
      value: platform,
      style: {
        width: 300,
        marginBottom: "20px"
      },
      onChange: this.handlePlatform
    }, SITDOWN_OPTIONS.map(option => React.createElement(Option, {
      key: option.key,
      value: option.key
    }, option.value))), React.createElement(TextArea, {
      rows: 4,
      style: {
        marginBottom: "5px"
      },
      value: sourceCode,
      onChange: this.handleSourceCode,
      placeholder: "\u8BF7\u653E\u5165\u7F51\u9875\u6E90\u4EE3\u7801"
    }), React.createElement("span", null, "\u63D0\u793A\uFF1A\u53F3\u952E->\u663E\u793A\u7F51\u9875\u6E90\u4EE3\u7801->\u5168\u9009->\u590D\u5236\u7C98\u8D34\u3002"));
  }

}, _temp)) || _class) || _class) || _class);
export default SitDownDialog;