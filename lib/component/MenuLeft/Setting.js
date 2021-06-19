import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import SyncScroll from "./Setting/SyncScroll";
import ContainImgName from "./Setting/ContainImgName";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement(SyncScroll, null)), React.createElement(Menu.Item, null, React.createElement(ContainImgName, null)));

class Setting extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-setting",
      className: "nice-menu-link",
      href: "#"
    }, "\u8BBE\u7F6E"));
  }

}

export default Setting;