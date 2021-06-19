var _dec, _dec2, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Input, Form } from "antd";
let LinkDialog = (_dec = inject("dialog"), _dec2 = inject("content"), _dec(_class = _dec2(_class = observer(_class = (_temp = class LinkDialog extends Component {
  constructor(props) {
    super(props);

    this.handleOk = () => {
      const {
        markdownEditor
      } = this.props.content;
      const cursor = markdownEditor.getCursor();
      const selection = markdownEditor.getSelection();
      const text = `[${selection}](${this.state.link})`;
      markdownEditor.replaceSelection(text, cursor); // 上传后实时更新内容

      const content = markdownEditor.getValue();
      this.props.content.setContent(content);
      this.setState({
        link: ""
      });
      this.props.dialog.setLinkOpen(false);
      cursor.ch += 1;
      markdownEditor.setCursor(cursor);
      markdownEditor.focus();
    };

    this.handleCancel = () => {
      this.setState({
        link: ""
      });
      this.props.dialog.setLinkOpen(false);
    };

    this.handleChange = e => {
      this.setState({
        link: e.target.value
      });
    };

    this.state = {
      link: ""
    };
  }

  render() {
    return React.createElement(Modal, {
      title: "\u6DFB\u52A0\u94FE\u63A5",
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      visible: this.props.dialog.isLinkOpen,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, React.createElement(Form.Item, {
      label: "\u94FE\u63A5\u5730\u5740"
    }, React.createElement(Input, {
      placeholder: "\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740",
      value: this.state.link,
      onChange: this.handleChange
    })));
  }

}, _temp)) || _class) || _class) || _class);
export default LinkDialog;