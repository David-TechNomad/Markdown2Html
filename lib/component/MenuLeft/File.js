import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import ImportFile from "./File/ImportFile";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement(ImportFile, null)));

class File extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-file",
      className: "nice-menu-link",
      href: "#"
    }, "\u6587\u4EF6"));
  }

}

export default File;