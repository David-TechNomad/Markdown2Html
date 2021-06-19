var _dec, _dec2, _dec3, _class, _temp;

import React, { Component } from "react";
import { Menu, Dropdown, message } from "antd";
import { observer, inject } from "mobx-react";
import { wordCalc } from "../utils/helper";
import SitDownConverter from "../utils/sitdownConverter";
import { SITDOWN_OPTIONS } from "../utils/constant";
import SvgIcon from "../icon";
import "./Footer.css";
let Footer = (_dec = inject("content"), _dec2 = inject("navbar"), _dec3 = inject("footer"), _dec(_class = _dec2(_class = _dec3(_class = observer(_class = (_temp = class Footer extends Component {
  constructor(props) {
    super(props);

    this.handleMessage = () => {
      const {
        pasteHtml,
        pasteText
      } = this.props.footer;
      let toMarkdown = SitDownConverter.GFM;

      switch (this.state.platform) {
        case "csdn":
          toMarkdown = SitDownConverter.CSDN;
          break;

        case "wechat":
          toMarkdown = SitDownConverter.Wechat;
          break;

        case "juejin":
          toMarkdown = SitDownConverter.Juejin;
          break;

        case "zhihu":
          toMarkdown = SitDownConverter.Zhihu;
          break;

        default:
          toMarkdown = SitDownConverter.Wechat;
          break;
      }

      const markdown = toMarkdown(pasteHtml);
      const {
        content
      } = this.props.content;
      const convertContent = content.replace(pasteText, markdown);
      this.props.content.setContent(convertContent); // 设置粘贴检测为 false

      this.props.footer.setPasteHtmlChecked(false);
      message.success("转换成功！");
    };

    this.handleMenu = ({
      key,
      domEvent
    }) => {
      if (key === "thanks") {
        const w = window.open("about:blank");
        w.location.href = "https://github.com/mdnice/sitdown";
      } else {
        this.setState({
          engineDesc: key
        });
      }

      domEvent.stopPropagation();
    };

    this.state = {
      engineDesc: SITDOWN_OPTIONS[0].desc
    };
  }

  render() {
    const menu = React.createElement(Menu, {
      onClick: this.handleMenu
    }, SITDOWN_OPTIONS.map(option => React.createElement(Menu.Item, {
      key: option.desc
    }, React.createElement("div", null, option.value))), React.createElement(Menu.Divider, null), React.createElement(Menu.Item, {
      key: "thanks"
    }, React.createElement("a", null, "SitDown \u5F15\u64CE\u63D0\u4F9B\u652F\u6301")));
    const {
      content,
      themeList
    } = this.props.content;
    const {
      templateNum
    } = this.props.navbar;
    const {
      isPasteHtmlChecked
    } = this.props.footer;
    const lineCount = content.split("\n").length;
    const wordCount = wordCalc(content);
    const themeName = themeList[templateNum] && themeList[templateNum].name;
    return React.createElement("div", {
      className: "nice-footer-container"
    }, React.createElement("p", null, "\u884C\u6570\uFF1A", lineCount), React.createElement("p", null, "\u5B57\u6570\uFF1A", wordCount), React.createElement("p", null, "\u4E3B\u9898\uFF1A", themeName), isPasteHtmlChecked && React.createElement("div", {
      className: "nice-footer-message",
      onClick: this.handleMessage
    }, "\u70B9\u51FB\u4F7F\u7528", React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-footer-overlay",
      placement: "topLeft"
    }, React.createElement("a", {
      id: "nice-footer-engine",
      className: "nice-footer-engine",
      href: "#",
      onClick: e => {
        e.stopPropagation();
      }
    }, this.state.engineDesc, React.createElement(SvgIcon, {
      name: "down",
      style: style.svgIcon,
      fill: "#40a9ff"
    }))), "\u5C06\u7C98\u8D34\u7684\u5BCC\u6587\u672C\u8F6C\u6362\u4E3A markdown"));
  }

}, _temp)) || _class) || _class) || _class) || _class);
const style = {
  svgIcon: {
    width: "12px",
    height: "12px"
  }
};
export default Footer;