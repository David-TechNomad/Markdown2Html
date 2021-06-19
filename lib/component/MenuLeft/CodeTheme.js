var _dec, _class, _temp;

import React from "react";
import { Menu, Dropdown } from "antd";
import { observer, inject } from "mobx-react";
import { CODE_OPTIONS, RIGHT_SYMBOL, IS_MAC_CODE } from "../../utils/constant";
import "./CodeTheme.css";
let CodeTheme = (_dec = inject("navbar"), _dec(_class = observer(_class = (_temp = class CodeTheme extends React.Component {
  constructor(...args) {
    super(...args);

    this.changeCodeTheme = item => {
      // 是否为 Mac 风格代码
      if (item.key === IS_MAC_CODE) {
        const {
          isMacCode,
          codeNum
        } = this.props.navbar;

        if (isMacCode) {
          this.props.navbar.setMacCode(false);
          this.props.navbar.setCodeNum(codeNum, false);
        } else {
          this.props.navbar.setMacCode(true);
          this.props.navbar.setCodeNum(codeNum, true);
        }
      } else {
        const {
          isMacCode
        } = this.props.navbar;
        const codeNum = parseInt(item.key, 10);
        this.props.navbar.setCodeNum(codeNum, isMacCode);
      }
    };
  }

  render() {
    const {
      codeNum,
      isMacCode
    } = this.props.navbar;
    const codeMenu = React.createElement(Menu, {
      onClick: this.changeCodeTheme
    }, CODE_OPTIONS.map((option, index) => React.createElement(Menu.Item, {
      key: index
    }, React.createElement("div", {
      id: `nice-menu-codetheme-${option.id}`,
      className: "nice-codetheme-item"
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-codetheme-item-flag"
    }, codeNum === index && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-codetheme-item-name"
    }, option.name))))), React.createElement(Menu.Divider, null), React.createElement(Menu.Item, {
      key: IS_MAC_CODE
    }, React.createElement("div", {
      id: "nice-menu-codetheme-apple",
      className: "nice-codetheme-item"
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-codetheme-item-flag"
    }, isMacCode && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-codetheme-item-name"
    }, "Mac \u98CE\u683C")))));
    return React.createElement(Dropdown, {
      overlay: codeMenu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-codetheme",
      className: "nice-menu-link",
      href: "#"
    }, "\u4EE3\u7801\u4E3B\u9898"));
  }

}, _temp)) || _class) || _class);
export default CodeTheme;