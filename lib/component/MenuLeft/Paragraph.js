import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "#"
}, "\u5BFC\u51FA")), React.createElement(Menu.Item, null, React.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "#"
}, "\u5BFC\u5165")), React.createElement(Menu.Item, null, React.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "#"
}, "\u6253\u5370")));

class Paragraph extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      className: "nice-menu-link",
      href: "#"
    }, "\u6BB5\u843D"));
  }

}

export default Paragraph;