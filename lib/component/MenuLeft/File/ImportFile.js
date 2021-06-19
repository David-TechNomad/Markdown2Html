var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../common.css";
import { message } from "antd";
let ImportFile = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class ImportFile extends Component {
  constructor(...args) {
    super(...args);

    this.handleChange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = event => {
        this.props.content.setContent(event.target.result);
        message.success("导入文件成功！");
      };

      reader.readAsText(file);
    };
  }

  render() {
    return React.createElement("label", {
      id: "nice-menu-import-file",
      className: "nice-menu-item",
      htmlFor: "importFile"
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u5BFC\u5165"), React.createElement("input", {
      style: {
        display: "none"
      },
      type: "file",
      id: "importFile",
      accept: ".txt,.md",
      hidden: "",
      onChange: this.handleChange
    })));
  }

}, _temp)) || _class) || _class);
export default ImportFile;