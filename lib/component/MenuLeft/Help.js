import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import About from "./Help/About";
import Version from "./Help/Version";
import Document from "./Help/Document";
import Question from "./Help/Question";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement(About, null)), React.createElement(Menu.Item, null, React.createElement(Version, null)), React.createElement(Menu.Item, null, React.createElement(Document, null)), React.createElement(Menu.Item, null, React.createElement(Question, null)));

class Help extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-help",
      className: "nice-menu-link",
      href: "#"
    }, "\u5E2E\u52A9"));
  }

}

export default Help;