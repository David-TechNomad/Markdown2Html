var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { message, Tooltip } from "antd";
import SvgIcon from "../../icon";
import { ENTER_DELAY, LEAVE_DELAY, EXPORT_FILENAME_SUFFIX } from "../../utils/constant";
import { download, dateFormat } from "../../utils/helper";
import "./Markdown.css";
let ExportMarkdown = (_dec = inject("content"), _dec(_class = observer(_class = (_temp = class ExportMarkdown extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        markdownEditor
      } = this.props.content;
      const content = markdownEditor.getValue();

      if ("download" in document.createElement("a")) {
        download(content, dateFormat(new Date(), "yyyy-MM-dd") + EXPORT_FILENAME_SUFFIX);
      } else {
        message.warn("浏览器不支持");
      }
    };
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "left",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "\u5BFC\u51FAMarkdown"
    }, React.createElement("a", {
      id: "nice-sidebar-markdown",
      className: "nice-btn-markdown",
      onClick: this.handleClick
    }, React.createElement(SvgIcon, {
      name: "markdown",
      className: "nice-btn-markdown-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default ExportMarkdown;