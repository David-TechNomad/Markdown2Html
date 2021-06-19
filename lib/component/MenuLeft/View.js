import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import FullScreen from "./View/FullScreen";
import EditArea from "./View/EditArea";
import PreviewArea from "./View/PreviewArea";
import ThemeArea from "./View/ThemeArea";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement(FullScreen, null)), React.createElement(Menu.Divider, null), React.createElement(Menu.Item, null, React.createElement(EditArea, null)), React.createElement(Menu.Item, null, React.createElement(PreviewArea, null)), React.createElement(Menu.Item, null, React.createElement(ThemeArea, null)));

class View extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-view",
      className: "nice-menu-link",
      href: "#"
    }, "\u67E5\u770B"));
  }

}

export default View;