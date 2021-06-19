import React, { Component } from "react";
import { Menu } from "antd";
import LinkToFoot from "../component/MenuLeft/Pattern/LinkToFoot";
import Format from "../component/MenuLeft/Pattern/Format";
import Image from "../component/MenuLeft/Pattern/Image";
import "./EditorMenu.css";

class EditorMenu extends Component {
  render() {
    return React.createElement(Menu, {
      id: "nice-editor-menu",
      className: "nice-editor-menu"
    }, React.createElement(Menu.Item, {
      className: "ant-dropdown-menu-item"
    }, React.createElement(LinkToFoot, null)), React.createElement(Menu.Item, {
      className: "ant-dropdown-menu-item"
    }, React.createElement(Format, null)), React.createElement(Menu.Item, {
      className: "ant-dropdown-menu-item"
    }, React.createElement(Image, null)));
  }

}

export default EditorMenu;