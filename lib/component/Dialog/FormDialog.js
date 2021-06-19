var _dec, _dec2, _class, _temp;

import React from "react";
import { observer, inject } from "mobx-react";
import { Modal, InputNumber, Form } from "antd";
let FormDialog = (_dec = inject("dialog"), _dec2 = inject("content"), _dec(_class = _dec2(_class = observer(_class = (_temp = class FormDialog extends React.Component {
  constructor(props) {
    super(props);

    this.buildRow = (rowNum, columnNum) => {
      let appendText = "|";

      if (rowNum === 1) {
        appendText += " --- |";

        for (let i = 0; i < columnNum - 1; i++) {
          appendText += " --- |";
        }
      } else {
        appendText += "     |";

        for (let i = 0; i < columnNum - 1; i++) {
          appendText += "     |";
        }
      }

      return appendText + (/windows|win32/i.test(navigator.userAgent) ? "\r\n" : "\n");
    };

    this.buildFormFormat = (rowNum, columnNum) => {
      let formFormat = "";

      for (let i = 0; i < 3; i++) {
        formFormat += this.buildRow(i, columnNum);
      }

      for (let i = 3; i <= rowNum; i++) {
        formFormat += this.buildRow(i, columnNum);
      }

      return formFormat;
    };

    this.handleOk = () => {
      const {
        markdownEditor
      } = this.props.content;
      const cursor = markdownEditor.getCursor();
      const text = this.buildFormFormat(this.state.rowNum, this.state.columnNum);
      markdownEditor.replaceSelection(text, cursor);
      const content = markdownEditor.getValue();
      this.props.content.setContent(content);
      this.handleCancel();
      cursor.ch += 2;
      markdownEditor.setCursor(cursor);
      markdownEditor.focus();
    };

    this.handleCancel = () => {
      this.setState(initialState);
      this.props.dialog.setFormOpen(false);
    };

    this.state = { ...initialState
    };
  }

  render() {
    return React.createElement(Modal, {
      title: "\u6DFB\u52A0\u8868\u683C",
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      visible: this.props.dialog.isFormOpen,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, React.createElement(Form.Item, {
      label: "\u884C\u6570",
      labelCol: {
        span: 4
      }
    }, React.createElement(InputNumber, {
      min: 2,
      max: 10,
      value: this.state.rowNum,
      defaultValue: 1,
      onChange: value => this.setState({
        rowNum: value
      })
    })), React.createElement(Form.Item, {
      label: "\u5217\u6570",
      labelCol: {
        span: 4
      }
    }, React.createElement(InputNumber, {
      min: 1,
      max: 10,
      value: this.state.columnNum,
      defaultValue: 1,
      onChange: value => this.setState({
        columnNum: value
      })
    })));
  }

}, _temp)) || _class) || _class) || _class);
const initialState = {
  columnNum: 1,
  rowNum: 2
};
export default FormDialog;